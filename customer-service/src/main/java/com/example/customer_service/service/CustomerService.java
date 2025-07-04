package com.example.customer_service.service;

import com.example.customer_service.entity.Customer;
import com.example.customer_service.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/* Service métier pour la gestion des clients */
@Service
public class CustomerService {
    /* Accès aux opérations de base de données sur les clients */
    private final CustomerRepository customerRepository;

    /* Injection de dépendance */
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    /* Récupère tous les clients */
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    /* Recherche un client par son ID */
    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }

    /* Sauvegarde (création ou mise à jour) d'un client */
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    /* Supprime un client par son ID */
    public void delete(Long id) {
        customerRepository.deleteById(id);
    }
} 