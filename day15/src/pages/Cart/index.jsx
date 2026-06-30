import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import useCart from "../../hooks/useCart";

import styles from "./Cart.module.css";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

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
                      decreaseQuantity(product.id)
                    }
                  >
                    -
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    +
                  </button>

                </div>

                <h3>

                  $
                  {(product.price * product.quantity).toFixed(2)}

                </h3>

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