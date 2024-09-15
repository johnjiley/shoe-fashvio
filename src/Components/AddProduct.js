import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AddProduct.css';

const AddProduct = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
  });

  const navigate = useNavigate(); // Correctly placed inside the component

  // Debugging log to check if the function is passed correctly
  useEffect(() => {
    console.log('onAddProduct:', onAddProduct);  // Should log the function definition
  }, [onAddProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9), // Generate unique ID for the product
    };

    // Validate form data
    if (!newProduct.name || !newProduct.price || !newProduct.description || !newProduct.image) {
      alert('Please fill in all required fields.');
      return;
    }

    // Call the function passed as props to add the new product
    if (typeof onAddProduct === 'function') {
      onAddProduct(newProduct);
    } else {
      console.error('onAddProduct is not a function');
    }

    alert('Product added successfully!');

    // Reset form
    setFormData({
      name: '',
      price: '',
      description: '',
      image: null,
    });

    // Navigate to the 'add-new-product' route
    navigate('/add-new-product');
  };

  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
