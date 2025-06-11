package Ecommerce.Service;

import java.util.List;

import Ecommerce.Entity.Category;
import Ecommerce.Entity.Customer;

public interface CategoryService {

    List<Customer> getAllCategories();

    Category getCategoryById(Long id);

    Category createCategory(Category category);

    Category updateCategory(Long id, java.util.Locale.Category category);

    boolean deleteCategory(Long id);

	Category updateCategory(Long id, Category category);
}

