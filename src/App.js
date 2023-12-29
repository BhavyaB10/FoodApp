// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello this is my first react App</h1>
//       <h1>I want to create dynamic react page</h1>
//     </div>
//   );
// }
// export default App;
import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import CartItem from './CartItem.js'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path ='/' element ={<HomePage/>}/>
      <Route path ='/Page1' element ={<Page1/>}/>
      <Route path ='/Page2' element ={<Page2/>}/>
      <Route path ='/Page3' element ={<Page3/>}/>
      <Route path='/CartItem' element={<CartItem/>}/>
    </Routes>
      </BrowserRouter>
   
    </div>
  );
}
export default App;

