import React from 'react'
import './WritersProfile.css'
import Card1 from './img/card1.png'
import Card2 from './img/card2.png'
import Card3 from './img/card3.png'
import { FaLinkedin } from "react-icons/fa6";
function WritersProfile() {
    return (
        <div className='card_main'>
            <div className='writer_card_continer'>
                <div className='writer_card writer_card_one'>
                    <div className='writr_card_ne_pd'>
                        <p className='writer_card_topic'>Emma Taylor</p>
                        <p className='writer_card_pera'>With over 15 years of experience in corporate branding and career coaching, Emma transforms your career story into a standout resume that resonates with hiring managers.</p>
                        <FaLinkedin className='writer_card_icon' />
                    </div>
                    <img src={Card1} alt='cardimage' className='writer_card_image' />
                </div>

                <div className='writer_card writer_card_two'>
                    <div className='writr_card_ne_pd'>
                        <p className='writer_card_topic'>Liam Anderson</p>
                        <p className='writer_card_pera'>A former recruiter turned resume writer, Liam brings insider knowledge of what employers seek, crafting compelling resumes and cover letters that put you ahead of the competition.</p>
                        <FaLinkedin className='writer_card_icon' />
                    </div>
                    <img src={Card2} alt='cardimage' className='writer_card_image' />
                </div>

                <div className='writer_card writer_card_thre'>
                    <div className='writr_card_ne_pd'>
                        <p className='writer_card_topic'>Sophia Chen</p>
                        <p className='writer_card_pera'>An expert in LinkedIn optimization and personal branding, Sophia specializes in creating keyword-rich profiles that enhance visibility and engagement in today’s digital job market.</p>
                        <FaLinkedin className='writer_card_icon' />
                    </div>
                    <img src={Card3} alt='cardimage' className='writer_card_image' />
                </div>
            </div>
        </div>
    )
}

export default WritersProfile
