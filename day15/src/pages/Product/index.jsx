import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { getProductById } from "../../services/productApi";

import styles from "./Product.module.css";

function Product() {

    const { product_id } = useParams();

    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {

        const fetchProduct = async () => {

            const data = await getProductById(product_id);

            setProduct(data);
            setSelectedImage(data.thumbnail);

        };

        fetchProduct();

    }, [product_id]);

    if (!product) {

        return <h2 className={styles.loading}>Loading...</h2>;

    }

    return (

        <>

            <Navbar />

            <div className={styles.page}>

                <div className={styles.breadcrumb}>

                    <Link to="/home"> Home</Link>

                    <span>/</span>

                    <span>{product.category}</span>

                    <span>/</span>

                    <span>{product.title}</span>

                </div>

                <div className={styles.productContainer}>

                    {/* LEFT */}

                    <div className={styles.imageSection}>

                        <div className={styles.mainImageCard}>

                            <img
                                src={selectedImage}
                                alt={product.title}
                                className={styles.mainImage}
                            />

                        </div>

                        <div className={styles.gallery}>

                            {product.images.map((img, index) => (

                                <img

                                    key={index}

                                    src={img}

                                    alt={product.title}

                                    className={`${styles.galleryImage} ${
                                        selectedImage === img ? styles.active : ""
                                    }`}

                                    onClick={() => setSelectedImage(img)}

                                />

                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className={styles.details}>

                        <span className={styles.categoryBadge}>
                            {product.category}
                        </span>

                        <h1>{product.title}</h1>

                        <h3>by {product.brand}</h3>

                        <div className={styles.discountBadge}>
                             {Math.round(product.discountPercentage)}% OFF
                        </div>

                        <h2 className={styles.price}>
                            ${product.price}
                        </h2>

                        <div className={styles.rating}>
                             {product.rating} / 5
                        </div>

                        <p className={styles.description}>
                            {product.description}
                        </p>

                        <div className={styles.specsCard}>

                            <div className={styles.specRow}>
                                <span>Brand</span>
                                <strong>{product.brand}</strong>
                            </div>

                            <div className={styles.specRow}>
                                <span>Category</span>
                                <strong>{product.category}</strong>
                            </div>

                            <div className={styles.specRow}>
                                <span>Availability</span>

                                <strong className={styles.stock}>
                                    🟢 In Stock ({product.stock})
                                </strong>

                            </div>

                            <div className={styles.specRow}>
                                <span>Rating</span>
                                <strong> {product.rating}</strong>
                            </div>

                            <div className={styles.specRow}>
                                <span>Discount</span>
                                <strong>
                                    {Math.round(product.discountPercentage)}%
                                </strong>
                            </div>

                        </div>

                        <button className={styles.cartButton}>
                             Add to Cart
                        </button>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Product;