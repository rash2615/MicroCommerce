package com.example.order_service.controller;

import com.example.order_service.client.CustomerClient;
import com.example.order_service.dto.Customer;
import com.example.order_service.dto.OrderWithCustomer;
import com.example.order_service.entity.Order;
import com.example.order_service.service.OrderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;
    private final CustomerClient customerClient;

    public OrderController(OrderService orderService, CustomerClient customerClient) {
        this.orderService = orderService;
        this.customerClient = customerClient;
    }

    @GetMapping
    public List<Order> getAll() {
        return orderService.findAll();
    }

    @GetMapping("/{id}")
    public Order getById(@PathVariable Long id) {
        return orderService.findById(id).orElse(null);
    }

    @PostMapping
    public Order create(@RequestBody Order order) {
        return orderService.save(order);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        orderService.delete(id);
    }

    @GetMapping("/{id}/with-customer")
    public OrderWithCustomer getOrderWithCustomer(@PathVariable Long id) {
        Order order = orderService.findById(id).orElse(null);
        if (order == null) return null;
        Customer customer = customerClient.getCustomerById(order.getCustomerId());
        return new OrderWithCustomer(order, customer);
    }
} 