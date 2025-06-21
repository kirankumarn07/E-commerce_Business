import React from 'react'
import men1 from '../assests/Men/men1.jpg'
import men2 from '../assests/Men/men2.jpg'
import men3 from '../assests/Men/men3.jpg'
import men4 from '../assests/Men/men4.jpg'
import men5 from '../assests/Men/men5.jpg'
import woman1 from '../assests/Woman/woman1.jpg'
import woman2 from '../assests/Woman/woman2.jpg'
import woman3 from '../assests/Woman/woman3.jpg'
import woman4 from '../assests/Woman/woman4.jpg'
import woman5 from '../assests/Woman/women5.jpg'

const Collections = (props) => {
    // const{title,image,image1,image2,image3,image4,image5,image6}=props.gentsFashion;
  return (
    <div className='collections'>
      
      <div className="menImages"> 
        <h2 style={{textAlign:"center"}}>Mens Collections</h2>
            <img src={men1} alt='men1'/>
            <img src={men2} alt='men2'/>
            <img src={men3} alt='men3'/>
            <img src={men4} alt='men4'/>
            <img src={men5} alt='men5'/>
      </div>
      <div className="womenImages">
          <h2 style={{textAlign:"center"}}>Womens Collections</h2>
        <img src={woman1} alt='woman1'/>
        <img src={woman2} alt='woman2'/>
        <img src={woman3} alt='woman3'/>
        <img src={woman4} alt='woman4'/>
        <img src={woman5} alt='woman5'/>
      </div>
    </div>
  )
}

export default Collections
