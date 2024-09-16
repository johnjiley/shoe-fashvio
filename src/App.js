import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import CartPage from "./Components/Cart/CartPage";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AddProduct from './Components/AddProduct/AddProduct';
import { CartProvider } from "./Components/Cart/CartContext";
import { ProductProvider } from './Components/Product/ProductContext';



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
