import React from 'react'
import GentsBanner from "../assests/GentsBanner.gif"
const Banner = () => {
  return (
    <div className='bannerSection'>
      <div className="bannerBox">
        <img src={GentsBanner} alt='Banner'/>
      </div>
    </div>
  )
}

export default Banner
