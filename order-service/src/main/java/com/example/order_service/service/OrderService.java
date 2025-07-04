package com.example.order_service.service;

import com.example.order_service.entity.Order;
import com.example.order_service.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// Service métier pour la gestion des commandes
@Service
public class OrderService {
    // Accès aux opérations de base de données sur les commandes
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    // Récupère toutes les commandes
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    // Recherche une commande par son ID
    public Optional<Order> findById(Long id) {
        return orderRepository.findById(id);
    }

    // Sauvegarde (création ou mise à jour) d'une commande
    public Order save(Order order) {
        return orderRepository.save(order);
    }

    // Supprime une commande par son ID
    public void delete(Long id) {
        orderRepository.deleteById(id);
    }
} 