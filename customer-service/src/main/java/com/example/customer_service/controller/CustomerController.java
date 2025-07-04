package com.example.customer_service.controller;

import com.example.customer_service.entity.Customer;
import com.example.customer_service.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Contrôleur REST pour la gestion des clients
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    // Injection du service métier pour la logique client
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    // Récupère la liste de tous les clients
    @GetMapping
    public List<Customer> getAll() {
        return customerService.findAll();
    }

    // Récupère un client par son ID (404 si non trouvé)
    @GetMapping("/{id}")
    public ResponseEntity<Customer> getById(@PathVariable Long id) {
        return customerService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // Crée un nouveau client
    @PostMapping
    public Customer create(@RequestBody Customer customer) {
        return customerService.save(customer);
    }

    // Supprime un client par son ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        customerService.delete(id);
    }
} 