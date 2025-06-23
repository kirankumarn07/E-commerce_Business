import React, { useState } from 'react'
import kid1 from '../../assests/kids/kid1.jpg'
import kid2 from '../../assests/kids/kid2.jpg'
import kid3 from '../../assests/kids/kid3.jpg'
import kid4 from '../../assests/kids/kid4.jpg'
import kid5 from '../../assests/kids/kid5.jpg'
import kid6 from '../../assests/kids/kid6.jpg'
import kid7 from '../../assests/kids/kid7.jpg'
import kid8 from '../../assests/kids/kid8.jpg'
import kid9 from '../../assests/kids/kid9.jpg'
import kid10 from '../../assests/kids/kid10.jpg'
const Kids = () => {
    const [selectedKid, setSelectedKid] = useState(null)
    const kids = () => [
        { image: kid1, price: 300 },
        { image: kid2, price: 299 },
        { image: kid3, price: 300 },
        { image: kid4, price: 290 },
        { image: kid5, price: 309 },
        { image: kid6, price: 291 },
        { image: kid7, price: 301 },
        { image: kid8, price: 209 },
        { image: kid9, price: 310 },
        { image: kid10, price: 289 },
    ]
    const handleKids = (kid, index) => {
        setSelectedKid({ ...kid, index })
    }
    const handleCart = (kid) => {
        const existingProduct = JSON.parse(localStorage.getItem('cartItems')) || [];
        existingProduct.push(kid)
        localStorage.setItem('cartItems', JSON.stringify(existingProduct))
        alert(`${kid.name} added to cart`)
    }
    const handleBuy = () => {
        alert(`Thank you for buying ${selectedKid.index + 1}. Amount is ${selectedKid.price}`);
    }
    return (
        <div>
            <marquee behaviour="scroll" direction="left">if you want buy a cloths please click on the cloth</marquee>
            <div className='imagesKids' style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>

                {kids().map((kid, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <img src={kid.image} alt={`kid ${index + 1} `} onClick={() => handleKids(kid, index)}
                            style={{
                                border: selectedKid?.index == index ? 'solid green 1px' : 'none'
                            }} />
                        {selectedKid?.index === index && (
                            <div>
                                <p style={{ margin: '5px 0' }}>₹{kid.price}</p>
                                <button style={{marginRight:'10px'}} onClick={() => handleCart(kid)}>Add2Cart</button>
                                <button onClick={handleBuy}>Buy</button>
                            </div>
                        )}
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Kids
