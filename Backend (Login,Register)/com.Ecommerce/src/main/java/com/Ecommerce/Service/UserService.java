package com.Ecommerce.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Ecommerce.Entity.User;
import com.Ecommerce.Repo.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        if (userRepo.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email already in use");
        }

        // Hash the password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    public boolean authenticate(String email, String rawPassword) {
        User user = userRepo.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("User not found")); // If email not registered

        if (passwordEncoder.matches(rawPassword, user.getPassword())) {
            return true;
        }

        throw new RuntimeException("Invalid password"); // If password is wrong
    }

    
    
    }

