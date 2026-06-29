import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductGrid from "../../components/ProductGrid";
import PaginationBar from "../../components/PaginationBar";
import { getProducts } from "../../services/productApi";

function Home() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {

        const fetchProducts = async () => {

            const data = await getProducts(10, (page - 1) * 10);
            setProducts(data.products);

        };

        fetchProducts();

    }, [page]);

    return (

        <>
            <Navbar />

            <ProductGrid products={products} />

            <PaginationBar
                page={page}
                setPage={setPage}
            />

            <Footer />
        </>

    );

}

export default Home;