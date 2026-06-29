import styles from "./ProductGrid.module.css";
import ProductCard from "../ProductCard";

function ProductGrid({ products }) {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.thumbnail}
          name={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductGrid;