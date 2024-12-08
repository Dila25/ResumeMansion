import React from 'react'
import HeroServices from './Components/HeroServices/HeroServices'
import NavBar from '../../NavBar/NavBar'
import ServicesCard from './Components/ServicesCard/ServicesCard'
import Pricing from './Components/Pricing/Pricing'
import ServiceDataSetCard from './Components/ServiceDataSetCard/ServiceDataSetCard'
import QandA from '../../Home/Components/Q&A/QandA'
import Footer from '../../Footer/Footer'
function Services() {
    return (
        <div className='container '>
            <NavBar />
            <HeroServices />
            <ServicesCard />
            <Pricing />
            <ServiceDataSetCard />
            <QandA />
            <Footer />
        </div>
    )
}

export default Services
