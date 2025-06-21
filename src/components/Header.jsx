import React, { useEffect, useState } from 'react'
import logo from '../assests/logo.png'
import cart from '../assests/cart.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Signin from './headercomponents/Signin'
const Header = () => {
  const navigate = useNavigate();
  const [countCart, setCountCart] = useState(0)
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCountCart(items.length)

    function updateCartfromStorage() {
      const updated = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCountCart(updated.length)
    }
  })

  return (
    <div className='headerSection'>
      <div className='left'>
        <div className='title'>
          <img src={logo} alt='logo' onClick={() => navigate('/')} />
        </div>
      </div>
      <div className='center'>
        <ul>
          <li><Link to="/men">MEN</Link></li>
          <li><Link to='/woman'>WOMAN</Link></li>
          <li><Link to='/kids'>KIDS</Link> </li>
          <li><Link to='/beauty'>BEAUTY</Link> </li>
        </ul>
      </div>
      <div className="seacrh">
        <input type='text' placeholder='seacrh....' />
      </div>
      <div className='right'>
        <div className="forms" style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
          <div className='signup' onClick={()=>navigate('/signup')}>Sign-Up</div>
          <div className='signin' onClick={()=>navigate('/signin')}>Sign-In</div>
        </div>
        <div className="cart" style={{ position: 'relative', width: '40px', height: '40px' }}>
          <Link to='/cart'><img src={cart} alt='cart' />
           <span
          style={{
            position: 'absolute',
            top: '-5px',
            right: '2px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '10px',
            fontWeight: 'bold',
            lineHeight: 1,
          }}
        >
          {countCart}
        </span>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Header
