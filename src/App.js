import React from 'react';
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";
// import ShoppingCart from "./Components/ShoppingCart";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { CartProvider } from "./Components/CartContext";
import { Route, Routes } from 'react-router-dom';
import CartPage from './Components/CartPage';
import AddProduct from './Components/AddProduct'; // Import AddProduct
import { ProductProvider } from './Components/ProductContext';



function App() {
  return (
    <CartProvider>
       <ProductProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        <Footer />
      </div>
      </ProductProvider>
     </CartProvider>
  );
}

export default App;
