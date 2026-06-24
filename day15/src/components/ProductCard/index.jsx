import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ image, name, price }) {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} />

      <div className={styles.productInfo}>
        <h3>{name}</h3>
        <p>₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
