import { useState } from "react";

import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import CategoryCards from "../../components/CategoryCards";
import ProductGrid from "../../components/ProductGrid";
import Footer from "../../components/Footer";

import menProducts from "../../data/menProducts";
import womenProducts from "../../data/womenProducts";
import kidsProducts from "../../data/kidsProducts";

import styles from "./Home.module.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("men");

  

  let products = menProducts;

  if (selectedCategory === "women") {
    products = womenProducts;
  }

  if (selectedCategory === "kids") {
    products = kidsProducts;
  }

  return (
    <>
      <TopBar />

      <Navbar />

      <Hero />

      <CategoryCards
        setSelectedCategory={setSelectedCategory}
      />

      <ProductGrid
        products={products}
      />

      <Footer />
    </>
  );
}

export default Home;