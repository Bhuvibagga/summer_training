import React from "react";
import styles from "./CategoryCards.module.css";

const categories = [
  {
    title: "MEN",
    image:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/80dcd593c2d94940a555fc8b29d9651d_9366/Mexico_26_Home_Jersey_Green_JL8580_21_model.jpg",
  },
  {
    title: "WOMEN",
    image:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e0fcf88351d446087526443c4dc5a46_9366/SATIN_SNAKE_PRINT_FIREBIRD_TRACK_JACKET_Beige_KX1885_HM1.jpg",
  },
  {
    title: "KIDS",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyH2oaKPk7OJB100kzyJlJn_ctRG0SUKGsHXKB-ih7A&s=10",
  },
];

function CategoryCards({ setSelectedCategory }) {
  return (
    <div className={styles.categoryContainer}>
      {categories.map((category) => (
        <div
          key={category.title}
          className={styles.categoryCard}
          onClick={() =>
            ["MEN", "WOMEN", "KIDS"].includes(category.title)
              ? setSelectedCategory(category.title.toLowerCase())
              : null
          }
        >
          <img src={category.image} alt={category.title} />
          <h3>{category.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoryCards;
