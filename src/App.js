import React from 'react';
// Data
import products from './products';
// Styling
import './App.css';
import Home from './components/Home/Home';
import ProductList from './components/Product/List';

function App() {
  
  return (
    <div className="body">
    
    <Home/>
    <ProductList/>
    </div>


  );
}

export default App;
