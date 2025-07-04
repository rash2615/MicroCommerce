package com.example.customer_service.service;

import com.example.customer_service.entity.Customer;
import com.example.customer_service.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/* Permet de faire des opérations de base sur la table customer */
@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    /* Injection de dépendance */
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    /* Permet de récupérer tous les customers */
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    /* Permet de récupérer un customer par son id */
    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }

    /* Permet de créer un customer */
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    /* Permet de supprimer un customer */
    public void delete(Long id) {
        customerRepository.deleteById(id);
    }
} 