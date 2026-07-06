import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "../../features/theme/themeSlice";

import styles from "./Navbar.module.css";
import MegaMenu from "../MegaMenu";

export default function Navbar() {

  const [activeMenu, setActiveMenu] = useState("");

  const dispatch = useDispatch();

  const totalItems = useSelector(
    (state) => state.cart.totalItems
  );

  const theme = useSelector(
    (state) => state.theme.mode
  );

  return (

    <div
      className={styles.navWrapper}
      onMouseLeave={() => setActiveMenu("")}
    >

      <nav className={styles.navbar}>

        {/* Logo */}

        <Link to="/home">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
            alt="logo"
            className={styles.logo}
          />

        </Link>

        {/* Navigation */}

        <div className={styles.navLinks}>

          <span className={styles.sale}>
            END OF SEASON SALE
          </span>

          <span
            onMouseEnter={() => setActiveMenu("men")}
          >
            MEN
          </span>

          <span
            onMouseEnter={() => setActiveMenu("women")}
          >
            WOMEN
          </span>

          <span
            onMouseEnter={() => setActiveMenu("kids")}
          >
            KIDS
          </span>

        </div>

        {/* Right Side */}

        <div className={styles.navRight}>

          <button
            className={styles.themeBtn}
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <div className={styles.searchBox}>

            <input
              type="text"
              className={styles.input}
              placeholder="Search"
            />

            <span>🔍</span>

          </div>

          <span>👤</span>

          <span>♡</span>

          <Link
            to="/cart"
            className={styles.cartLink}
          >

            <div className={styles.cartIcon}>

              🛍

              {totalItems > 0 && (

                <span className={styles.cartCount}>

                  {totalItems}

                </span>

              )}

            </div>

          </Link>

        </div>

      </nav>

      {activeMenu && (

        <MegaMenu
          category={activeMenu}
          closeMenu={() => setActiveMenu("")}
        />

      )}

    </div>

  );

}