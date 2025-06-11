import React, { useContext, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { UserContext } from '../Context/UserContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Registration from './Register';


export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { isLoggedIn } = useContext(UserContext); // Check if logged in
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  // State to manage registration/login flow
  const [showRegistration, setShowRegistration] = useState(true); // Initially show registration
  
  // After registration, switch to login screen
  const handleRegistrationComplete = () => {
    setShowRegistration(false); // Show login after registration
  };

  // Redirect to login page after successful registration
  if (!isLoggedIn) {
    return (
      <div>
        {showRegistration ? (
          <Registration onRegistrationComplete={handleRegistrationComplete} />
        ) : (
          <Login />
        )}
      </div>
    );
  }

  return (
    <div>
      {/* Once logged in, show product details */}
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}
