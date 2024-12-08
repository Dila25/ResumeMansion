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
        <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/coverLetter')}>Cover Letter writing</p>
      </div>
      <div className='content_hero_service'>
        <p className='hero_service_topic_sub'>Put together a memorable job application</p>
        <p className='hero_service_topic'>Professional Cover Letter Writing Service</p>
        <p className='hero_service_pera'>Resume Mansion crafts personalized, keyword-optimized cover letters that enhance your resume and make your job application stand out. Let our expert writers help you showcase your skills and create a memorable first impression.</p>
        <button className='hero_service_btn'>Order now - Just for $100</button>
      </div>
    </div>
  )
}

export default HeroSection
