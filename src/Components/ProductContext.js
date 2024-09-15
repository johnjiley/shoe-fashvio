import React, { createContext, useState } from 'react';

import shoe1 from '../assets/shoe1.jpg'; 
import shoe2 from '../assets/shoe2.jpg'; 
import shoe3 from '../assets/shoe3.jpg'; 
import shoe4 from '../assets/shoe4.jpg'; 
import shoe5 from '../assets/shoe5.jpg'; 
import shoe6 from '../assets/shoe6.jpg'; 
import shoe7 from '../assets/shoe7.jpg'; 
import shoe8 from '../assets/shoe8.jpg'; 
import shoe9 from '../assets/shoe9.jpg'; 
import shoe10 from '../assets/shoe10.jpg'; 
import shoe11 from '../assets/shoe11.jpg'; 
import shoe12 from '../assets/shoe12.jpg';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [shoes, setShoes] = useState([
    {
      name: 'Adidas',
      price: '$5000',
      description: 'A timeless pair of Adidas sneakers, perfect for everyday wear.',
      image: shoe1,
    },
    {
      name: 'Nike Blazer Low',
      price: '$4000',
      description: 'Sleek and stylish Nike Blazers, offering a modern twist on a classic design.',
      image: shoe2,
    },
    {
      name: 'Casual',
      price: '$3500',
      description: 'Comfortable and versatile casual sneakers, ideal for a relaxed look.',
      image: shoe3,
    },
    {
      name: 'New Balance',
      price: '$3500',
      description: 'High-performance New Balance running shoes, designed for comfort and speed.',
      image: shoe4,
    },
    {
      name: 'Sneaker',
      price: '$3500',
      description: 'A versatile pair of sneakers, perfect for any occasion.',
      image: shoe5,
    },
    {
      name: 'Converse',
      price: '$3500',
      description: 'Iconic Converse high-tops, a must-have for any sneaker collection.',
      image: shoe6,
    },
    {
      name: 'Jordan Retro',
      price: '$3500',
      description: 'Jordan Retro sneakers, offering a nostalgic and stylish look.',
      image: shoe7,
    },
    {
      name: 'Nike Running Shoe',
      price: '$3500',
      description: 'High-performance Nike running shoes, designed for maximum comfort and support.',
      image: shoe8,
    },
    {
      name: 'Jordan High Top',
      price: '$3500',
      description: 'Classic Jordan high-tops, offering a timeless and stylish look.',
      image: shoe9,
    },
    {
      name: 'Jordan Low',
      price: '$3500',
      description: 'Sleek and stylish Jordan lows, perfect for both on and off-court wear.',
      image: shoe10,
    },
    {
      name: 'Jordan Panda Low',
      price: '$3500',
      description: 'Eye-catching Jordan Panda lows, featuring a black and white colorway.',
      image: shoe11,
    },
    {
      name: 'Retro Basketball Sneakers',
      price: '$3500',
      description: 'Iconic Jordan Retro 4 sneakers, a must-have for any sneaker enthusiast.',
      image: shoe12,
    },
  ]);

  const addProduct = (newProduct) => {
    setShoes((prevShoes) => [...prevShoes, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ shoes, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};