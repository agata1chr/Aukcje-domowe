package com.tyrytyry.web;

import com.tyrytyry.product.Product;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class pageBasket {

        @GetMapping("/basket")
        public String pageBasket(Model model) {
            List<Product> products = new ArrayList<>();
            products.add(new Product("1", "Narożnik VINTED", 169.50, "produkty/wyro.png"));
            products.add(new Product("2", "Sosnowe krzesla", 168.49, "produkty/krzesło.png"));
            products.add(new Product("4", "Szafka RTV", 1590.29 , "produkty/półka.png"));
            products.add(new Product("3", "Szafka kremowa", 310.15, "produkty/szafka.png"));
            model.addAttribute("products", products);

            return "basket.html";
        }
}


