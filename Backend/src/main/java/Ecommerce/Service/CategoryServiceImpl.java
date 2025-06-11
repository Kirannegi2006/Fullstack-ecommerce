package Ecommerce.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Ecommerce.Entity.Category;
import Ecommerce.Repo.CategoryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Long id, Category category) {
        Optional<Category> existingCategory = Optional.empty();
        if (existingCategory.isPresent()) {
            category.setId(id);
            return categoryRepository.save(category);
        }
        return null;
    }

    @Override
    public boolean deleteCategory(Long id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id); 
            return true;
        }
        return false;
    }

    @Override
    public Category getCategoryById(Long id) {
        Optional<Category> category = Optional.empty();
        return category.orElse(null);
    }

	@Override
	public Category updateCategory(Long id, java.util.Locale.Category category) {
		// TODO Auto-generated method stub
		return null;
	}
}
