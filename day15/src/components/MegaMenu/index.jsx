import React from "react";
import styles from "./MegaMenu.module.css";

export default function MegaMenu({ category, closeMenu }) {
  const menuData = {
    men: {
      featured: ["New Arrivals", "Sportswear", "Summer Collection"],
      footwear: ["Running", "Walking", "Sneakers", "Slides"],
      clothing: ["T-Shirts", "Shorts", "Joggers", "Hoodies"],
      sports: ["Football", "Cricket", "Basketball", "Tennis"],
    },

    women: {
      featured: ["New Arrivals", "Training", "Originals"],
      footwear: ["Running", "Sneakers", "Sandals", "Slides"],
      clothing: ["Polo Shirts", "Leggings", "T-Shirts", "Jackets"],
      sports: ["Yoga", "Gym", "Running", "Tennis"],
    },

    kids: {
      featured: ["New Arrivals", "School", "Sportswear"],
      footwear: ["Running", "Sneakers", "Sandals", "Slides"],
      clothing: ["T-Shirts", "Shorts", "Tracksuits", "Hoodies"],
      sports: ["Football", "Cricket", "Swimming", "Basketball"],
    },
  };

  const data = menuData[category] || menuData.men;

  return (
    <div className={styles.megaMenu} onMouseLeave={closeMenu}>
      <div>
        <h3>FEATURED</h3>
        {data.featured.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div>
        <h3>FOOTWEAR</h3>
        {data.footwear.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div>
        <h3>CLOTHING</h3>
        {data.clothing.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div>
        <h3>SPORTS</h3>
        {data.sports.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}
