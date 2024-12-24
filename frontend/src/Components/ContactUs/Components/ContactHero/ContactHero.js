import React from 'react';
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import './contat.css';

function ContactHero() {
    const handleEmailClick = (e) => {
        e.preventDefault();
        // Replace with your preferred email client URL
        const email = 'hi@resumemansion.com';
        const subject = 'Inquiry';
        const body = 'Hello, I have a question about...';
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailURL, '_blank');
    };

    return (
        <div className='continer_main_box'>
            <div className='container'>
                <div className='root_path'>
                    <RiHome6Line onClick={() => (window.location.href = '/')} className='path_start' />
                    <MdNavigateNext className='path_next' />
                    <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/contactUs')}>Contact</p>
                </div>
                <div className='content_hero_service'>
                    <p className='hero_service_topic'>Get in Touch with Resume Mansion</p>
                    <p className='hero_service_pera'>
                        Have questions or need assistance? Our team is here to help! Contact us using the form below, and we’ll respond promptly. Let’s elevate your career together!
                        You can reach us anytime via <span className='mai_conet' onClick={handleEmailClick}>hi@resumemansion.com</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
