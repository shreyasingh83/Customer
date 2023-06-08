import React from 'react';
import Topslide from './Topslide';
import Topdeals from './Topdeals';
import Footer from './Footer';
import Navbar1 from '../Navbar1';

const Home = () => {
  return (
    <div>
    <Navbar1/>
    <Topslide/>
    <Topdeals/>
    <Footer/>
    </div>
  )
}

export default Home
