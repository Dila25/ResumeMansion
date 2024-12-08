import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
function CareerHero() {
    return (
        <div className='card_main'>
            <div className='root_path'>
                <RiHome6Line onClick={() => (window.location.href = '/')} className='path_start' />
                <MdNavigateNext className='path_next' />
                <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/careerAdvice')}>Career Advice</p>
            </div>
            <div className='content_hero_service'>
                <p className='hero_service_topic'>Your Career Compass: Expert Tips & Insights</p>
                <p className='hero_service_pera'>Explore our career advice blog for expert tips and strategies to enhance your professional journey. From resume writing to interview techniques, we provide insights to empower your career growth.</p>
            </div>
        </div>
    )
}

export default CareerHero
