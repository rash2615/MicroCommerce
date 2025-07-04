package com.example.customer_service.repository;

import com.example.customer_service.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/* Permet de faire des opérations de base sur la table customer */
public interface CustomerRepository extends JpaRepository<Customer, Long> {
} 