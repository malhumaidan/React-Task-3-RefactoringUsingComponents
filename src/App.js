import React from 'react';
// Data
import products from './products';
// Styling
import './App.css';

function App() {
  const productList = products.map((product) => (
    <div className="product">
      <img className="productImage" alt={product.name} src={product.image} />
      <p className="text">{product.name}</p>
      <p className="text">{product.price} KD</p>
    </div>
  ));
  return (
    <div className="body">
      <div>
        <h1 className="text">Cookies and Beyond</h1>
        <h4 className="text">Where cookie maniacs gather</h4>
        <img
          alt="cookie shop"
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          className="shopImage"
        />
      </div>
      <div className="list">{productList}</div>
    </div>
  );
}

export default App;
