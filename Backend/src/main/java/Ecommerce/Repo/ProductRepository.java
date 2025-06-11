package Ecommerce.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import Ecommerce.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
