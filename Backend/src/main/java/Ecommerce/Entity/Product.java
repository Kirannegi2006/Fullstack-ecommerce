package Ecommerce.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Version;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Product name must not be blank")
    @Size(min = 2, max = 100, message = "Product name must be between 2 and 100 characters")
    private String name;

    @NotNull(message = "Price is required")
    private Double new_price;

    @NotNull(message = "Old price is required")
    private Double old_price;
    
    
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

   
   
    
    @Version
    private Long version;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Double getNew_price() {
		return new_price;
	}


	public void setNew_price(Double new_price) {
		this.new_price = new_price;
	}


	public Double getOld_price() {
		return old_price;
	}


	public void setOld_price(Double old_price) {
		this.old_price = old_price;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public Long getVersion() {
		return version;
	}


	public void setVersion(Long version) {
		this.version = version;
	}


	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	


	public Product(Long id,
			@NotBlank(message = "Product name must not be blank") @Size(min = 2, max = 100, message = "Product name must be between 2 and 100 characters") String name,
			@NotNull(message = "Price is required") Double new_price,
			@NotNull(message = "Old price is required") Double old_price, Category category, Long version) {
		super();
		this.id = id;
		this.name = name;
		this.new_price = new_price;
		this.old_price = old_price;
		this.category = category;
		this.version = version;
	}  
    
    
    
    
    

   
}
