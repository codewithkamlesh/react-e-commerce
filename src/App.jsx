import React, { useEffect, useState } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import Banner from './component/Banner/Banner';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Products from './component/Products/Products';
import TopProducts from './component/TopProducts/TopProducts';
import Subscribe from './component/Subscribe/Subscribe';
import Testimonials from './component/Testimonials/Testimonials';
import Footer from './component/Footer/Footer';

const App = () => {
  const [OrderPopup, setOrderPopup] = useState(false)
 const handleOrderPopup = ()=>{
  setOrderPopup(!OrderPopup);
 }
 useEffect(() => {
  
   AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,
   })
   AOS .refresh();
 }, [])
 

  return (
    <>
  
   
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
    < Navbar handleOrderPopup={handleOrderPopup} />
    <Hero handleOrderPopup = {handleOrderPopup} />
   
    <Products/>
    <TopProducts handleOrderPopup = {handleOrderPopup}/>
    <Banner/>
    <Subscribe/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  )
}

export default App