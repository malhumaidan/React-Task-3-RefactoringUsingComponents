import React from "react";
// Data
import products from "./products";
// Styling
import styles from "./styles";

function App() {
  const productList = products.map((product) => (
    <div style={styles.product}>
      <img style={styles.productImage} alt={product.name} src={product.image} />
      <p style={styles.text}>{product.name}</p>
      <p style={styles.text}>{product.price} KD</p>
    </div>
  ));
  return (
    <div style={styles.body}>
      <div>
        <h1 style={styles.text}>Cookies and Beyond</h1>
        <h4 style={styles.text}>Where cookie maniacs gather</h4>
        <img
          alt="cookie shop"
          src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
          style={styles.shopImage}
        />
      </div>
      <div style={styles.list}>{productList}</div>
    </div>
  );
}

export default App;
