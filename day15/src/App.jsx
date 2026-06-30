import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Navigate to="/home" />}
            />

            <Route
                path="/home"
                element={<Home />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/product/:product_id"
                element={<Product />}
            />

            <Route
                path="*"
                element={<Navigate to="/home" />}
            />
            <Route
                path="/cart"
                element={<Cart />}
            />

        </Routes>

    );

}

export default App;