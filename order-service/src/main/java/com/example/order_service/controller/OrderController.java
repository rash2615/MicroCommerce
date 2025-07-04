package com.example.order_service.controller;

import com.example.order_service.client.CustomerClient;
import com.example.order_service.dto.Customer;
import com.example.order_service.dto.OrderWithCustomer;
import com.example.order_service.entity.Order;
import com.example.order_service.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Contrôleur REST pour la gestion des commandes
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    // Injection des services métier et client Feign
    private final OrderService orderService;
    private final CustomerClient customerClient;

    public OrderController(OrderService orderService, CustomerClient customerClient) {
        this.orderService = orderService;
        this.customerClient = customerClient;
    }

    // Récupère la liste de toutes les commandes
    @GetMapping
    public List<Order> getAll() {
        return orderService.findAll();
    }

    // Récupère une commande par son ID
    @GetMapping("/{id}")
    public Order getById(@PathVariable Long id) {
        return orderService.findById(id).orElse(null);
    }

    // Crée une nouvelle commande
    @PostMapping
    public Order create(@RequestBody Order order) {
        return orderService.save(order);
    }

    // Supprime une commande par son ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        orderService.delete(id);
    }

    // Récupère une commande avec les infos client associées (via Feign)
    // Retourne 404 si la commande ou le client n'existe pas
    @GetMapping("/{id}/with-customer")
    public ResponseEntity<OrderWithCustomer> getOrderWithCustomer(@PathVariable Long id) {
        Order order = orderService.findById(id).orElse(null);
        if (order == null) return ResponseEntity.notFound().build();
        try {
            Customer customer = customerClient.getCustomerById(order.getCustomerId());
            return ResponseEntity.ok(new OrderWithCustomer(order, customer));
        } catch (Exception e) {
            // Si le client n'existe pas ou erreur Feign, retourne 404
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
} 