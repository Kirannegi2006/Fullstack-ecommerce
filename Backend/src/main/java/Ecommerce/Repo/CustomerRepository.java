package Ecommerce.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import Ecommerce.Entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}

