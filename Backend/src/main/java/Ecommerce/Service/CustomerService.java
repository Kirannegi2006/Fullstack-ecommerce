package Ecommerce.Service;

import java.util.List;

import Ecommerce.Entity.Customer;

public interface CustomerService {

    List<Customer> getAllCustomers();

    Customer getCustomerById(Long id);

    Customer createCustomer(Customer customer);

    Customer updateCustomer(Long id, Customer customer);

    boolean deleteCustomer(Long id);
}

