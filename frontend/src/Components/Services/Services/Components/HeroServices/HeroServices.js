import React from 'react'
import './HeroServices.css'
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
function HeroServices() {
    return (
        <div className='continer_main_box'>
            <div className='container'>
                <div className='root_path'>
                    <RiHome6Line onClick={() => (window.location.href = '/')} className='path_start' />
                    <MdNavigateNext className='path_next' />
                    <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/servicess')}>Services</p>
                </div>
                <div className='content_hero_service'>
                    <p className='hero_service_topic'>Professional Job Application Services</p>
                    <p className='hero_service_pera'>Transform your job search with expertly crafted resumes, cover letters, and LinkedIn profiles that get noticed. Let Resume Mansion help you stand out and reach your career goals.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroServices
