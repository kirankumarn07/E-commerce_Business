import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const handleBuy = () => {
    alert('Thank you for your purchase!');
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <div
      className="cartCount"
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#fafafa',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No items in the cart.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cartItems.map((item, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '15px',
                padding: '10px',
                borderBottom: '1px solid #ccc'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="60"
                  height="60"
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
                  <p style={{ margin: 0, color: '#666' }}>₹{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(index)}
                style={{
                  backgroundColor: 'gray',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={handleBuy}
            style={{
              padding: '10px 20px',
              backgroundColor: 'violet',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
