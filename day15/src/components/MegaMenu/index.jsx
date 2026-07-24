import React from "react";
import { Link } from "react-router-dom";
import styles from "./MegaMenu.module.css";

export default function MegaMenu({ category, closeMenu }) {
  const menuData = {
    men: {
      featured: [
        "New Arrivals",
        "Sportswear",
        "Summer Collection",
        "About Adidas",
      ],
      footwear: ["Running", "Walking", "Sneakers", "Slides"],
      clothing: ["T-Shirts", "Shorts", "Joggers", "Hoodies"],
      sports: ["Football", "Cricket", "Basketball", "Tennis"],
    },

    women: {
      featured: [
        "New Arrivals",
        "Training",
        "Originals",
        "About Adidas",
      ],
      footwear: ["Running", "Sneakers", "Sandals", "Slides"],
      clothing: ["Polo Shirts", "Leggings", "T-Shirts", "Jackets"],
      sports: ["Yoga", "Gym", "Running", "Tennis"],
    },

    kids: {
      featured: [
        "New Arrivals",
        "School",
        "Sportswear",
        "About Adidas",
      ],
      footwear: ["Running", "Sneakers", "Sandals", "Slides"],
      clothing: ["T-Shirts", "Shorts", "Tracksuits", "Hoodies"],
      sports: ["Football", "Cricket", "Swimming", "Basketball"],
    },
  };

  const data = menuData[category] || menuData.men;

  return (
    <div className={styles.megaMenu} onMouseLeave={closeMenu}>
      {/* Featured */}
      <div>
        <h3>FEATURED</h3>

        {data.featured.map((item) =>
          item === "About Adidas" ? (
            <Link
              key={item}
              to="/about"
              className={styles.menuLink}
              onClick={closeMenu}
            >
              {item}
            </Link>
          ) : (
            <p key={item}>{item}</p>
          )
        )}
      </div>

      {/* Footwear */}
      <div>
        <h3>FOOTWEAR</h3>

        {data.footwear.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      {/* Clothing */}
      <div>
        <h3>CLOTHING</h3>

        {data.clothing.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      {/* Sports */}
      <div>
        <h3>SPORTS</h3>

        {data.sports.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}