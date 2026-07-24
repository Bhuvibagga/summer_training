import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerColumn}>
        <h3>PRODUCTS</h3>
        <p>Footwear</p>
        <p>Clothing</p>
        <p>Accessories</p>
        <p>Outlet Sale</p>
      </div>

      <div className={styles.footerColumn}>
        <h3>SPORTS</h3>
        <p>Running</p>
        <p>Football</p>
        <p>Cricket</p>
        <p>Gym & Training</p>
      </div>

      <div className={styles.footerColumn}>
        <h3>COLLECTIONS</h3>
        <p>Ultraboost</p>
        <p>Superstar</p>
        <p>Stan Smith</p>
      </div>

      <div className={styles.footerColumn}>
        <h3>SUPPORT</h3>
        <p>Help</p>
        <p>Returns</p>
        <p>Order Tracker</p>
      </div>

      <div className={styles.footerColumn}>
        <h3>COMPANY INFO</h3>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press</p>
      </div>

    </footer>
  );
}

export default Footer;
