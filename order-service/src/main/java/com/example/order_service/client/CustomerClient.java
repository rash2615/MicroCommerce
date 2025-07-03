package com.example.order_service.client;

import com.example.order_service.dto.Customer;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "customer-service", url = "http://localhost:8081")
public interface CustomerClient {
    @GetMapping("/api/customers/{id}")
    Customer getCustomerById(@PathVariable("id") Long id);
} 