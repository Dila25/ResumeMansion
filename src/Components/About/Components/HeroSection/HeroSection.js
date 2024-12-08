import React from 'react'
import './hero.css'
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
function HeroSection() {
    
    return (
        <div className='card_main'>
            <div className='root_path'>
                <RiHome6Line onClick={() => (window.location.href = '/')} className='path_start' />
                <MdNavigateNext className='path_next' />
                <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/about')}>About</p>
            </div>
            <div className='content_hero_service'>
                <p className='hero_service_topic'>Our company </p>
                <p className='hero_service_pera'>We create professional resumes, cover letters, and LinkedIn profiles to boost your career. Let our experts help you stand out.</p>
            </div>
        </div>
    )
}

export default HeroSection
