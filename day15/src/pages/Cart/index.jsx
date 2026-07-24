import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useSelector, useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

import styles from "./Cart.module.css";

function Cart() {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = useSelector(
    (state) => state.cart.totalPrice
  );

  return (
    <>
      <Navbar />

      <div className={styles.container}>

        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (

          <h2>Your cart is empty 🛒</h2>

        ) : (

          <>
            {cart.map((product) => (

              <div
                key={product.id}
                className={styles.cartItem}
              >

                <img
                  src={product.thumbnail}
                  alt={product.title}
                />

                <div className={styles.info}>

                  <h2>{product.title}</h2>

                  <p>${product.price}</p>

                </div>

                <div className={styles.quantity}>

                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(product.id))
                    }
                  >
                    -
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(product.id))
                    }
                  >
                    +
                  </button>

                </div>

                <h3>
                  $
                  {(product.price * product.quantity).toFixed(2)}
                </h3>

                <button
                  className={styles.removeBtn}
                  onClick={() =>
                    dispatch(removeFromCart(product.id))
                  }
                >
                  Remove
                </button>

              </div>

            ))}

            <div className={styles.total}>

              <h2>

                Total : $

                {totalPrice.toFixed(2)}

              </h2>

            </div>

          </>

        )}

      </div>

      <Footer />

    </>
  );
}

export default Cart;