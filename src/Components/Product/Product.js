import React, { useContext,useState, useEffect} from 'react';
import './Product.css';
import { CartContext } from '../Cart/CartContext';
import { ProductContext } from '../../Components/Product/ProductContext';

function Product({ shoe, onRemove }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  

  const handleAddToCart = () => {
    addToCart(shoe);
    alert(`${shoe.name} has been added to your cart!`);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(shoe);
    onRemove(shoe);
    alert(`${shoe.name} has been removed from Product!`);
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={shoe.image} alt={shoe.name} />
      <div className="card-body">
        <h5 className="card-title">{shoe.name}</h5>
        <p className="card-text">{shoe.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {shoe.price}</li>
        </ul>
        <div className="card-body">
          <a href="/" className="card-link" onClick={handleAddToCart}>Add to Cart</a>
          <a href="/" className="card-link" onClick={handleRemoveFromCart}>Remove from Product</a>
        </div>
      </div>
    </div>
  );
}

function ShoeStore() {
  const { shoes } = useContext(ProductContext);
  const [shoeList, setShoeList] = useState(shoes);
 // Ensure shoeList is updated whenever shoes changes in ProductContext
 useEffect(() => {
  setShoeList(shoes);
}, [shoes]);

  const handleRemoveProduct = (shoeToRemove) => {
    const updatedShoeList = shoeList.filter(shoe => shoe.name !== shoeToRemove.name);
    setShoeList(updatedShoeList);
  };

  return (
    <div className="shoe-store">
      <h1>Products</h1>
      <div className="shoe-grid">
        {shoeList.map((shoe, index) => (
          <Product key={index} shoe={shoe} onRemove={handleRemoveProduct} />
        ))}
      </div>

      {/* <div className="shoe-grid">
        {shoes.length === 0 ? (
          <p>No products available.</p>
        ) : (
          shoes.map((shoe, index) => (
            <Product key={index} shoe={shoe} />
          ))
        )}
      </div> */}
    </div>
  );
}

export default ShoeStore;