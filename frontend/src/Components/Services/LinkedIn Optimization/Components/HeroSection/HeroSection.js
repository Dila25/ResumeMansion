import React from 'react'
import './HeroSection.css'
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
function HeroSection() {
  return (
    <div className='card_main Resume_Hreeo_home_back'>
      <div className='root_path'>
        <RiHome6Line onClick={() => (window.location.href = '/')} className='path_start' />
        <MdNavigateNext className='path_next' />
        <p className='stay_path' onClick={() => (window.location.href = '/servicess')}>Services</p>
        <MdNavigateNext className='path_next' />
        <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/linkedInOptimization')}>LinkedIn Optimization </p>
      </div>
      <div className='content_hero_service'>
        <p className='hero_service_topic_sub'>Take your LinkedIn profile to the next level</p>
        <p className='hero_service_topic'>LinkedIn Optimization Service</p>
        <p className='hero_service_pera'>Boost your online presence with a keyword-optimized LinkedIn profile from Resume Mansion. Our experts showcase your strengths to help you stand out to recruiters and elevate your personal brand.</p>
        <button className='hero_service_btn'>Order now - Just for $100</button>
      </div>
    </div>
  )
}

export default HeroSection