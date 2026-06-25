import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";



function ProductCard({ id, image, name, price }) {
  return (
    <Link
      to={`/product/${id}`}
      className={styles.cardLink}
    >
      <div className={styles.productCard}>
        <img src={image} alt={name} />

        <div className={styles.productInfo}>
          <h3>{name}</h3>
          <p>₹{price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;

