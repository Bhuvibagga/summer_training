import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

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
        <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      

    );

}

export default App;