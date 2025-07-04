package com.example.product_service.controller;

import com.example.product_service.entity.Product;
import com.example.product_service.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Contrôleur REST pour la gestion des produits
@RestController
@RequestMapping("/api/products")
public class ProductController {
    // Injection du service métier pour la logique produit
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Récupère la liste de tous les produits
    @GetMapping
    public List<Product> getAll() {
        return productService.findAll();
    }

    // Récupère un produit par son ID
    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id) {
        return productService.findById(id).orElse(null);
    }

    // Crée un nouveau produit
    @PostMapping
    public Product create(@RequestBody Product product) {
        return productService.save(product);
    }

    // Supprime un produit par son ID
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productService.delete(id);
    }
} 