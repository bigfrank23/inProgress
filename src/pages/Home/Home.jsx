import React from 'react'
import Banner from '../../components/Banner/Banner'
import Extraordinay from '../../components/Extraordinary/Extraordinay'
import FindPeople from '../../components/FindPeople/FindPeople'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import More from '../../components/more/More'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/slider/Slider'
import TornContainer from '../../components/TornContainer/TornContainer'
import WhatsNext from '../../components/WhatsNext/WhatsNext'

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <HeroSection />
        <Banner />
        <FindPeople />
        {/* <Slider /> */}
        <More />
        <TornContainer />
        <Extraordinay />
        <WhatsNext />
        <Footer />
    </div>
  )
}

export default Home