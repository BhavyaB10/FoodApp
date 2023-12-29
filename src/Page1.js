/*// src/components/FoodGrid.js
// Import React and useState hook
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './Page1.css';

// Functional component
const ProductList = () => {
  // State to store the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Dummy data for product lists
  const productList1 = ['Product A', 'Product B', 'Product C','Product X', 'Product Y', 'Product Z'];


  // Function to handle adding an item to the cart
 const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const navigate = useNavigate();
  const data = cartItems;

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
      {// Product List 1 }
      <div>
        <h2>MAIN COURSE</h2>
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

      {Cart Section
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div> }
    </div>
  );
};

// Export the component
export default ProductList;
*/
import React, { useState, useEffect } from 'react';
import {axios} from 'react';


const Page1 = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getFood');
        setFood(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchFood();
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {food.map((f) => (
          <li key={f. _id}>
            {f.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page1;