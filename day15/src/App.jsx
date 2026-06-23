import { useState } from "react";
import "./App.css";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryCards from "./components/CategoryCards";
import MegaMenu from "./components/MegaMenu";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

import menProducts from "./data/menProducts";
import womenProducts from "./data/womenProducts";
import kidsProducts from "./data/kidsProducts";
function App() {
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("men");

  const getProducts = () => {
    switch (selectedCategory) {
      case "women":
        return womenProducts;
      case "kids":
        return kidsProducts;
      default:
        return menProducts;
    }
  };

  return (
    <div>
      <TopBar />

      <Navbar
        setActiveMenu={setActiveMenu}
      />

      {activeMenu && (
        <MegaMenu
          type={activeMenu}
          closeMenu={() => setActiveMenu("")}
        />
      )}

      <Hero />

      <CategoryCards
        setSelectedCategory={setSelectedCategory}
      />

      <div className="results">
        <h2>
          {selectedCategory.charAt(0).toUpperCase() +
            selectedCategory.slice(1)}{" "}
          Collection
        </h2>
      </div>

      <ProductGrid products={getProducts()} />

      <Footer />
    </div>
  );
}

export default App;