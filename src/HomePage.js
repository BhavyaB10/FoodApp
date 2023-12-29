// src/pages/HomePage.js
import React from 'react';
import {useNavigate} from 'react-router-dom';

function HomePage(){
  const navigate = useNavigate();

  function mainCourse(){
    navigate("/Page1")

  }
  function dessert(){
    navigate("/Page2")

  }
  function starters(){
    navigate("/Page3")

  }
return(
  <>
  <h1>FOOD CATEGORY</h1>
  <button onClick={mainCourse}   style={{
        padding: '15px 25px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#61dafb',
        color: 'white',
        transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
        margin:'10px' }}>Main Course</button>
  <button onClick={dessert}  style={{
        padding: '15px 25px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#61dafb',
        color: 'white',
        transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease', 
        margin:'10px'}}>Desserts</button>
  <button onClick={starters}  style={{
        padding: '15px 25px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#61dafb',
        color: 'white',
        transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease', 
        margin:'10px'}}>Starters</button>
  </>
)
}

export default HomePage;
