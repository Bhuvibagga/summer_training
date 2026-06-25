import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import menProducts from "../../data/menProducts";
import womenProducts from "../../data/womenProducts";
import kidsProducts from "../../data/kidsProducts";

import styles from "./Product.module.css";

function Product() {
  const { product_id } = useParams();

  // Combine all products
  const allProducts = [
    ...menProducts,
    ...womenProducts,
    ...kidsProducts,
  ];

  // Find the clicked product
  const product = allProducts.find(
    (item) => item.id === Number(product_id)
  );

  // If product doesn't exist
  if (!product) {
    return (
      <>
        <Navbar />
        <div className={styles.notFound}>
          <h1>Product Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.homeLink}>
  <Link to="/home">← Home</Link>
</div>

      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        <div className={styles.right}>
          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <p className={styles.category}>
            {product.category || "adidas Collection"}
          </p>

          <button className={styles.button}>
            ADD TO BAG
          </button>

          <h3>Product Description</h3>

          <p>
            Premium adidas product made with high-quality materials.
            Designed for comfort, performance and everyday style.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;