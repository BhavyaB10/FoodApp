// src/FoodListPage.js
import {React,useState} from 'react';
import {ProductList,addToCart} from './Page1';
import { useLocation, useNavigate } from 'react-router-dom';

const Fun=()=>{
const location = useLocation();
const navigate = useNavigate();
const orderDone=()=>{
   alert("Order successfully done");
  
  return navigate("/")
}

  return(
    <div>
    {//Cart Section
      <div>
        <h2>Shopping Cart</h2>
        <ul>
           <li>{location.state.id}</li>
        </ul>
      </div> }
      <button onClick={orderDone}>Order Now</button>
    </div>
  
  )
}

export default Fun;
