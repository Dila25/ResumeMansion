import React from 'react'
import './working.css'
import { TbBrandLinkedin } from "react-icons/tb";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
function Working() {
    return (
        <div className='continer_main_box'>
            <div className='container'>
                <div className='working_topic_set'>
                    <p className='working_topic_set_topic'>People you’ll be working with</p>
                    <p className='working_topic_set_pera'>We’re a 100% remote team spread all across the world. Join us!</p>
                </div>
                <div className='working_card_continer_main'>
                    <div className='working_card_continer'>
                        <div className='working_card working_card_one'>
                            <div className='working_card_content'>
                                <div className='working_card_worker_name_main'>
                                    <p className='working_card_worker_name'>Alisa Hester</p>
                                    <MdArrowOutward className='working_card_worker_icon' />
                                </div>
                                <p className='worker_card_possion'>Founder & CEO</p>
                                <p className='worker_card_pera'>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                                <FaLinkedin className='worker_card_link_icon' />
                            </div>
                        </div>
                        <div className='working_card working_card_two'>
                            <div className='working_card_content'>
                                <div className='working_card_worker_name_main'>
                                    <p className='working_card_worker_name'>Rich Wilson</p>
                                    <MdArrowOutward className='working_card_worker_icon' />
                                </div>
                                <p className='worker_card_possion'>Engineering Manager</p>
                                <p className='worker_card_pera'>Lead engineering teams at Figma, Pitch, and Protocol Labs.</p>
                                <FaLinkedin className='worker_card_link_icon' />
                            </div>
                        </div>
                        <div className='working_card working_card_three'>
                            <div className='working_card_content'>
                                <div className='working_card_worker_name_main'>
                                    <p className='working_card_worker_name'>Annie Stanley</p>
                                    <MdArrowOutward className='working_card_worker_icon' />
                                </div>
                                <p className='worker_card_possion'>Product Manager</p>
                                <p className='worker_card_pera'>Former PM for Airtable, Medium, Ghost, and Lumi.</p>
                                <FaLinkedin className='worker_card_link_icon' />
                            </div>
                        </div>
                        <div className='working_card working_card_for'>
                            <div className='working_card_content'>
                                <div className='working_card_worker_name_main'>
                                    <p className='working_card_worker_name'>Johnny Bell</p>
                                    <MdArrowOutward className='working_card_worker_icon' />
                                </div>
                                <p className='worker_card_possion'>Frontend Developer</p>
                                <p className='worker_card_pera'>Former frontend dev for Linear, Coinbase, and Postscript.</p>
                                <FaLinkedin className='worker_card_link_icon' />
                            </div>
                        </div>
                        <div className='working_card working_card_five'>
                            <div className='working_card_content'>
                                <div className='working_card_worker_name_main'>
                                    <p className='working_card_worker_name'>Mia Ward</p>
                                    <MdArrowOutward className='working_card_worker_icon' />
                                </div>
                                <p className='worker_card_possion'>Backend Developer</p>
                                <p className='worker_card_pera'>Lead backend dev at Clearbit. Former Clearbit and Loom.</p>
                                <FaLinkedin className='worker_card_link_icon' />
                            </div>
                        </div>
                        <div className='working_card working_card_six'>
                            <div className='working_card_content'>
                                <div className='working_card_worker_name_main'>
                                    <p className='working_card_worker_name'>Archie Young</p>
                                    <MdArrowOutward className='working_card_worker_icon' />
                                </div>
                                <p className='worker_card_possion'>Product Designer</p>
                                <p className='worker_card_pera'>Founding design team at Figma. Former Pleo, Stripe, and Tile.</p>
                                <FaLinkedin className='worker_card_link_icon' />
                            </div>
                        </div>
                    </div>
                    <button className='meet_btn' onClick={() => (window.location.href = '/writers')}>Meet your writters</button>
                </div>
            </div>
        </div>
    )
}

export default Working
