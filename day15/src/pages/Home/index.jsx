import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import PaginationBar from "../../components/PaginationBar";

import { getProducts } from "../../services/productApi";

function Home() {

    const [products, setProducts] = useState([]);

    const [page, setPage] = useState(1);

    const theme = useSelector(
        (state) => state.theme.mode
    );

    useEffect(() => {

        const fetchProducts = async () => {

            const data = await getProducts(
                10,
                (page - 1) * 10
            );

            setProducts(data.products);

        };

        fetchProducts();

    }, [page]);

    return (

        <div
            style={{

                background:
                    theme === "light"
                        ? "#ffffff"
                        : "#1d1d1d",

                color:
                    theme === "light"
                        ? "#000000"
                        : "#ffffff",

                minHeight: "100vh",

            }}
        >

            <Navbar />

            <ProductGrid products={products} />

            <PaginationBar
                page={page}
                setPage={setPage}
            />

            <Footer />

        </div>

    );

}

export default Home;