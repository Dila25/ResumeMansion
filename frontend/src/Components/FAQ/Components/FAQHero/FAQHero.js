import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
function FAQHero() {
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
                    <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/fAQ')}>FAQ</p>
                </div>
                <div className='content_hero_service'>
                    <p className='hero_service_topic'>Everything you
                        need to know</p>
                    <p className='hero_service_pera'>Need something cleared up? Here are our most frequently asked questions.
                        You can reach us anytime via <span className='mai_conet' onClick={handleEmailClick}>hi@resumemansion.com</span></p>
                </div>
            </div>
        </div>
    )
}

export default FAQHero
