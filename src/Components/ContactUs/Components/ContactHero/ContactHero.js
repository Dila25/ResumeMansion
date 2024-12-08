import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";

function ContactHero() {
    return (
        <div>
            <div className='card_main'>
                <div className='root_path'>
                    <RiHome6Line onClick={() => (window.location.href = '/')} className='path_start' />
                    <MdNavigateNext className='path_next' />
                    <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/contactUs')}>Contact</p>

                </div>
                <div className='content_hero_service'>
                    <p className='hero_service_topic'>Get in Touch with Resume Mansion</p>
                    <p className='hero_service_pera'>Have questions or need assistance? Our team is here to help! Contact us using the form below, and we’ll respond promptly. Let’s elevate your career together!
                    You can reach us anytime via <b><u>hi@resumemansion.com</u></b></p>
                </div>
            </div>
        </div>
    )
}

export default ContactHero
