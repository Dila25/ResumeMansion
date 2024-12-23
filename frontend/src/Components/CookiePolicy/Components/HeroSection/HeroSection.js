import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
function HeroSection() {
    return (
        <div className='continer_main_box'>
            <div className='container'>
                <div className='root_path'>
                    <RiHome6Line onClick={() => (window.location.href = '/')} className='path_start' />
                    <MdNavigateNext className='path_next' />
                    <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/cookiePolicy')}>Cookie Policy</p>
                </div>
                <div className='content_hero_service'>
                    <p className='hero_service_topic'>Cookie Policy</p>
                    <p className='hero_service_pera'>Last Updated: 04 Feb, 2024</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
