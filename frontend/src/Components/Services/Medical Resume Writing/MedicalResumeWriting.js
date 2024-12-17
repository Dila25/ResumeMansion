import React from 'react'
import NavBar from '../../NavBar/NavBar'
import HeroSection from './Components/HeroSection/HeroSection'
import Section2 from './Components/Section2/Section2'
import Reviews from './Components/ClientReviews/Reviews'
import Impression from './Components/Impression/Impression'
import InvestSection from './Components/InvestSection/InvestSection'
import Footer from '../../Footer/Footer'

function MedicalResumeWriting() {
    return (
        <div className='container'>
            <NavBar />
            <HeroSection />
            <Section2 />
            <Reviews />
            <Impression />
            <InvestSection />
            <Footer/>
        </div>
    )
}

export default MedicalResumeWriting
