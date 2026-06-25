import React from "react";
import ProductCard from "../ProductCard";
import styles from "./ProductGrid.module.css";

function ProductGrid({ products }) {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
      ))}
    </div>
  );
}

export default ProductGrid;
