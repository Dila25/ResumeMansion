import React from 'react'
import HeroSection from '../Cover Letter writing/Components/HeroSection/HeroSection'
import NavBar from '../../NavBar/NavBar'
import WhySection from './Components/WhySection/WhySection'
import CraftSection from './Components/CraftSection/CraftSection'
import Pricing from './Components/Pricing/Pricing'
import QandA from '../../Home/Components/Q&A/QandA'
import Footer from '../../Footer/Footer'
import InvestSection from './Components/InvestSection/InvestSection'
function CoverLetterwriting() {
    return (
        <div className='container'>
            <NavBar />
            <HeroSection />
            <WhySection />
            <CraftSection />
            <Pricing />
            <InvestSection />
            <QandA />
            <Footer />
        </div>
    )
}

export default CoverLetterwriting
