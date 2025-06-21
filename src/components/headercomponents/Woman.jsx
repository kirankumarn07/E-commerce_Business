import React, { useState } from 'react'
import dress1 from '../../assests/womanClothes/dress1.jpg'
import dress2 from '../../assests/womanClothes/dress2.jpg'
import dress3 from '../../assests/womanClothes/dress3.jpg'
import dress4 from '../../assests/womanClothes/dress4.jpg'
import dress5 from '../../assests/womanClothes/dress5.jpg'
import dress6 from '../../assests/womanClothes/dress6.jpg'
import dress7 from '../../assests/womanClothes/dress7.jpg'
import dress8 from '../../assests/womanClothes/dress8.jpg'
import dress9 from '../../assests/womanClothes/dress9.jpg'
import dress10 from '../../assests/womanClothes/dress10.jpg'

const Woman = () => {
    const [selectedDress, setSelectedDress] = useState(null)
    const dresses = () => [
        { image: dress1, price: 200 },
        { image: dress2, price: 220 },
        { image: dress3, price: 300 },
        { image: dress4, price: 330 },
        { image: dress5, price: 299 },
        { image: dress6, price: 199 },
        { image: dress7, price: 399 },
        { image: dress8, price: 179 },
        { image: dress9, price: 199 },
        { image: dress10, price: 989 },
    ]
    const handleShirtClick = (dress, index) => {
        setSelectedDress({ ...dress, index });
    }
    const handleBuy = () => {
        alert(`Thank you for buying dress ${selectedDress.index + 1} for ₹${selectedDress.price}!`);
    };
    return (
        <div>
            <marquee behaviour="scroll" direction="right">
                if you want buy or know about the price please click on the image which you want see
            </marquee>
            <div className='imagesWoman' style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {dresses().map((dress, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <img src={dress.image} alt={`Dress ${index + 1}`} onClick={() => handleShirtClick(dress, index)}
                            style={{
                                border: selectedDress?.index == index ? 'solid darkblack 2px' : 'none',
                            }}
                        />
                        {selectedDress?.index === index && (
                            <div>
                                <p style={{ margin: '5px 0' }}>₹{dress.price}</p>

                                <button onClick={handleBuy}>Buy</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Woman
