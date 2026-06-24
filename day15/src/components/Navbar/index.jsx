import React from "react";
import styles from "./Navbar.module.css";
import MegaMenu from "../MegaMenu";

export default function Navbar({ activeMenu, setActiveMenu }) {
  return (
    <nav
      className={styles.navbar}
      onMouseLeave={() => setActiveMenu("")}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
        alt="logo"
        className={styles.logo}
      />

      <div className={styles.navLinks}>
        <span className={styles.sale}>END OF SEASON SALE</span>

        <span onMouseEnter={() => setActiveMenu("men")}>MEN</span>

        <span onMouseEnter={() => setActiveMenu("women")}>WOMEN</span>

        <span onMouseEnter={() => setActiveMenu("kids")}>KIDS</span>
      </div>

      <div className={styles.navRight}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search" className={styles.input} />
          <span>🔍</span>
        </div>

        <span>👤</span>
        <span>♡</span>
        <span>🛍</span>
      </div>

      {activeMenu && (
        <MegaMenu category={activeMenu} closeMenu={() => setActiveMenu("")} />
      )}
    </nav>
  );
}
