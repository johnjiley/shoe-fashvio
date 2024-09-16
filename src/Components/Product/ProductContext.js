import React, { createContext, useState } from 'react';

import shoe1 from '../../assets/shoe1.jpg'; 
import shoe2 from '../../assets/shoe2.jpg'; 
import shoe3 from '../../assets/shoe3.jpg'; 
import shoe4 from '../../assets/shoe4.jpg'; 
import shoe5 from '../../assets/shoe5.jpg'; 
import shoe6 from '../../assets/shoe6.jpg'; 
import shoe7 from '../../assets/shoe7.jpg'; 
import shoe8 from '../../assets/shoe8.jpg'; 
import shoe9 from '../../assets/shoe9.jpg'; 
import shoe10 from '../../assets/shoe10.jpg'; 
import shoe11 from '../../assets/shoe11.jpg'; 
import shoe12 from '../../assets/shoe12.jpg';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [shoes, setShoes] = useState([
    {
      name: 'Nike',
      price: 'Rs-1500',
      description: 'NIKE Mens Downshifter 13 Running Shoe.',
      image: shoe1,
    },
    {
      name: 'Sparx Mens Sc0162g Sneakers',
      price: '$4000',
      description: 'Material:MESH Lifestyle:Casual Heel Type:Flats',
      image: shoe2,
    },
    {
      name: 'Aircity Mens Sports ',
      price: 'RS-1200',
      description: 'High Quality Synthetic as upper material and PVC as sole material.',
      image: shoe3,
    },
    {
      name: 'AADI Mens Black Mesh',
      price: 'RS-3500',
      description: 'Outdoor Casual Shoes Lace-Up.',
      image: shoe4,
    },
    {
      name: 'ASIAN Mens Thar-01 Sports Running',
      price: 'RS-2500',
      description: 'Lightweight & Breathable-Comfort Sole & Flexible Walk.',
      image: shoe5,
    },
    {
      name: 'Red Tape Casual Sneaker Shoes',
      price: 'RS5500',
      description: 'Elevate your style game and embrace the essence of modern sophistication.',
      image: shoe6,
    },
    {
      name: 'HOOH-now comfort in fashion',
      price: 'RS-2000',
      description: 'Jordan Inspired Style:Taking design cues from popular Jordan sneakers,.',
      image: shoe7,
    },
    {
      name: 'Leacom Sneaker Shoes for Men',
      price: 'RS-4500',
      description: 'Stylish Casual Shoes for Men White Dailywear Sports Running Shoes Lightweight',
      image: shoe8,
    },
    {
      name: 'Puma Mens',
      price: 'RS-2500',
      description: 'Style Name:-Running Shoe Model Name:-Foam Stride Brand Color:-Feather Gray-Black-Silver',
      image: shoe9,
    },
    {
      name: 'Leacom Sneaker Shoes',
      price: 'RS-1299',
      description: 'Stylish Casual Shoes for Men White Dailywear Sports Running Shoes Lightweight.',
      image: shoe10,
    },
    {
      name: 'Nike',
      price: 'RS-4500',
      description: 'Eye-catching Nike running shoes.',
      image: shoe11,
    },
    {
      name: 'Bacca Bucci',
      price: 'RS-3500',
      description: 'Perfect choice to pair with any sport or casual outfit.',
      image: shoe12,
    },
  ]);

  
  const addProduct = (newProduct) => {
    setShoes((prevShoes) => [...prevShoes, newProduct]);
  };

  const removeProduct = (productToRemove) => {
    setShoes((prevShoes) => prevShoes.filter(shoe => shoe.name !== productToRemove.name));
  };

  return (
    <ProductContext.Provider value={{ shoes, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};