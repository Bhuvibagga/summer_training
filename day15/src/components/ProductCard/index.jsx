import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

function ProductCard({ id, image, name, price }) {

  const dispatch = useDispatch();

  const product = {
    id,
    thumbnail: image,
    title: name,
    price,
  };

  return (
    <div className={styles.card}>

      <Link
        to={`/product/${id}`}
        className={styles.link}
      >
        <img src={image} alt={name} />

        <div className={styles.productInfo}>
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
      </Link>

      <button
        className={styles.cartButton}
        onClick={(e) => {

    e.preventDefault();

    dispatch(addToCart(product));

}}
      >
        🛒 Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;