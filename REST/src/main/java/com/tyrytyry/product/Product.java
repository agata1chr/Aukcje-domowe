package com.tyrytyry.product;

import lombok.Data;

@Data
public class Product {
    private String id;
    private String name;
    private double price;
    private String imageUrl;

    public Product(String id, String name, double price, String imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl= imageUrl;
    }
}
