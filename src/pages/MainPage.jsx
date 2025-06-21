import React,{useState} from 'react'
import Banner from '../components/Banner'
// import Header from '../components/Header'
import Collections from '../components/Collections'
import { Gents } from '../data'
import LadyBanner from '../components/LadiesBanner'
import Footer from '../components/Footer'
const MainPage = () => {
    // const[gentsFashion,setGentsFashion]=useState(Gents)
  return (
    <div>
        {/* <Header/> */}
      <Banner/>
      <Collections />
      <LadyBanner/>
      <Footer/>
    </div>
  )
}

export default MainPage
