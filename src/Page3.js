// src/components/FoodGrid.js
// Import React and useState hook
import React, { useState } from 'react';
import './Page1.css';
import { useNavigate} from 'react-router-dom';

// Functional component
const ProductList = () => {
  // State to store the items in the cart
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const data = cartItems;

  // Dummy data for product lists
  const productList1 = ['Product A', 'Product B', 'Product C','Product X', 'Product Y', 'Product Z'];
  const productList2 = [];

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  function jump() {
    if(data==""){
      
      alert("Please add some items")
    }
    
    else{
      navigate("/CartItem",{state : {id : data}});
    }
    }

  return (
    <div>
      {/* Product List 1 */}
      <div>
        <h2>STARTERS</h2>
        <ul>
          {productList1.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={jump} >View Cart</button>
    </div>
  );
};

// Export the component
export default ProductList;