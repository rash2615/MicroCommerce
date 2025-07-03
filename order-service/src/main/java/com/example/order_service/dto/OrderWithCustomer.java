package com.example.order_service.dto;

import com.example.order_service.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderWithCustomer {
    private Order order;
    private Customer customer;
} 