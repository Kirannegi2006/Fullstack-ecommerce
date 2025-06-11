package Ecommerce.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import Ecommerce.Entity.Category;
import Ecommerce.Entity.Customer;

public interface CategoryRepository extends JpaRepository<Customer, Long> {

	Category save(Category category);



}
