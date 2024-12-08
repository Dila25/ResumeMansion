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
        <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/resumeWriting')}>Resume Writing</p>
      </div>
      <div className='content_hero_service'>
        <p className='hero_service_topic_sub'>Unlock Your Dream Career with Resume Mansion</p>
        <p className='hero_service_topic'>Professional Resume Writing Service</p>
        <p className='hero_service_pera'>Join over 500,000 professionals who’ve landed interviews faster with a Resume Mansion resume. Our expert writers create impactful resumes that help you stand out and take your career to the next level.</p>
        <button className='hero_service_btn'>Order now - Just for $100</button>
      </div>
    </div>
  )
}

export default HeroSection
