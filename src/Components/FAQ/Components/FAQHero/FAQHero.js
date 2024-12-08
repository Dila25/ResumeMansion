import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
function FAQHero() {
    return (
        <div>
            <div className='card_main'>
                <div className='root_path'>
                    <RiHome6Line onClick={() => (window.location.href = '/')} className='path_start' />
                    <MdNavigateNext className='path_next' />
                    <p className='stay_path stay_path_active' onClick={() => (window.location.href = '/fAQ')}>FAQ</p>
                </div>
                <div className='content_hero_service'>
                    <p className='hero_service_topic'>Everything you
                        need to know</p>
                    <p className='hero_service_pera'>Need something cleared up? Here are our most frequently asked questions.
                        You can reach us anytime via <b><u>hi@resumemansion.com</u></b></p>
                </div>
            </div>
        </div>
    )
}

export default FAQHero
