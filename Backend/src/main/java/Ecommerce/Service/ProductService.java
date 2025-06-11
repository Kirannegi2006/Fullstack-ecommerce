package Ecommerce.Service;

import java.util.List;

import Ecommerce.Entity.Product;

public interface ProductService {

    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product createProduct(Product product);

    Product updateProduct(Long id, Product product);

    boolean deleteProduct(Long id);

	Product createProduct1(Product product);
}

