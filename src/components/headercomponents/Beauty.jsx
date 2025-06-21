import React, { useState } from 'react';
import beautyProducts from '../../utilities/beautyProducts'; // ✅ do NOT add () — it's not a function
// import { Navigate, useNavigate } from 'react-router-dom';

const Beauty = () => {
 const [cart,setCart]=useState([])
  const [selectProduct, setSelectProduct] = useState(null);
  const [showTooltip, setShowTooltip]=useState(null)
//   const navigate=useNavigate();
  
  const handleSelect = (product, index) => {
    setSelectProduct({ ...product, index });
  };
 const handleAddtocart =(product)=>{
    const existingProduct=JSON.parse(localStorage.getItem('cartItems')) || [];
    existingProduct.push(product)  
    localStorage.setItem('cartItems',JSON.stringify(existingProduct))
    // navigate('/cart')
    alert(`${product.name} add to cart`)
 }
  const handleBuy = () => {
    alert(`Thank you for buying product #${selectProduct.index + 1} for ₹${selectProduct.price}`);
  };

  return (
    <div>
      <marquee>If you want to buy a product, click on the image! if you want know more about product please hover a mouse on details</marquee>
      <div className="imagesBeauty" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent:'center' }}>
        {beautyProducts.map((product, index) => (
          <div key={index} style={{ textAlign: 'center', position: 'relative'}}>
            <img
              src={product.image}
              alt={product.name}
              width="150"
              height="150"
              onClick={() => handleSelect(product, index)}
              style={{ cursor: 'pointer', objectFit:'cover',
                border: selectProduct?. index == index? 'solid violet 2px' : 'none'
               }}
            />
            <p>{product.name}</p>
            {selectProduct?.index === index && (
              <div>
                <p style={{ margin: '5px 0' }}>₹{product.price}</p>
                <p
                  onMouseOver={()=>setShowTooltip(true)}
                  onMouseLeave={()=>setShowTooltip(false)}
                 style={{margin:'5px 0', whiteSpace: 'normal',overflow:'visible', wordWrap:'break-word', textOverflow:'ellipsis', maxWidth:'100%'}}>Detail</p>
                  {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            background: '#333',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '4px',
            whiteSpace: 'normal',
            zIndex: 999,
            width: '150px',
            fontSize: '12px'
          }}
        >
          {product.description}
        </div>
      )}       <button style={{marginRight:'10px'}} onClick={()=>handleAddtocart(product)}>Add2Cart</button>
                <button onClick={handleBuy}>Buy</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beauty;
