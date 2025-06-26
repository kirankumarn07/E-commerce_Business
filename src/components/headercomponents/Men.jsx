import React, { useState } from 'react';
import shirt1 from '../../assests/shirts/shirt1.jpg';
import shirt2 from '../../assests/shirts/shirt2.jpg';
import shirt3 from '../../assests/shirts/shirt3.jpg';
import shirt4 from '../../assests/shirts/shirt4.jpg';
import shirt5 from '../../assests/shirts/shirt5.jpg';
import shirt6 from '../../assests/shirts/shirt6.jpg';
import shirt7 from '../../assests/shirts/shirt7.jpg';
import shirt8 from '../../assests/shirts/shirt8.jpg';
import shirt9 from '../../assests/shirts/shirt9.jpg';
import shirt10 from '../../assests/shirts/shirt10.jpg';
import { useNavigate } from 'react-router-dom';

const Men = () => {
  const [selectedShirt, setSelectedShirt] = useState(null);
  const navigate=useNavigate();
  const shirts = [
    { image: shirt1, price: 650 },
    { image: shirt2, price: 700 },
    { image: shirt3, price: 550 },
    { image: shirt4, price: 620 },
    { image: shirt5, price: 680 },
    { image: shirt6, price: 600 },
    { image: shirt7, price: 750 },
    { image: shirt8, price: 570 },
    { image: shirt9, price: 690 },
    { image: shirt10, price: 630 },
  ];

  const handleShirtClick = (shirt, index) => {
    setSelectedShirt({ ...shirt, index });
  };
  const handleAddtocart=(shirt)=>{
    const user=JSON.parse(localStorage.getItem('user'));
    if(!user){
      alert(`You have to login before the add to cart`)
      navigate('/signin')
    }
    const existingProduct=JSON.parse(localStorage.getItem('cartItems')) || [];
    existingProduct.push(shirt);
    localStorage.setItem('cartItems',JSON.stringify(existingProduct))
    // alert(`${shirt.name} add to cart`)
  }
  const handleBuy = () => {
    const user=JSON.parse(localStorage.getItem('user'));
    if(!user){
      alert('you have to login before buy')
      navigate('/signin')
    }
    // alert(`Thank you for buying Shirt ${selectedShirt.index + 1} for ₹${selectedShirt.price}!`);
  };

  return (
    <div>
      <marquee behavior="scroll" direction="right" style={{ color: 'DarkRed' }}>
        Click on a shirt to view price and buy!
      </marquee>
      <div className="imagesMen" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {shirts.map((shirt, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={shirt.image}
              alt={`Shirt ${index + 1}`}
              onClick={() => handleShirtClick(shirt, index)}
              style={{
                // width: '220px',
                // height: '170px',
                // cursor: 'pointer',
                border: selectedShirt?.index === index ? '2px solid green' : 'none',
              }}
            />
            {selectedShirt?.index === index && (
              <div>
                <p style={{ margin: '5px 0' }}>₹{shirt.price}</p>
                <button style={{marginRight:'10px'}} onClick={()=>handleAddtocart(shirt)} >Add2Cart</button>
                <button onClick={handleBuy}>Buy</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
