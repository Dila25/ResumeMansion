import React from 'react'
import './ServicesCard.css'
import { MdDone } from "react-icons/md";
import Card1 from './img/card1.png'
import Card2 from './img/card2.png'
import Card3 from './img/card3.png'
function ServicesCard() {
    return (
        <div className='continer_main_box'>
            <div className='container'>
                <div className='card_set_continer_service_page'>
                    <div className='service_page_card card_service_page_one'>
                        <div className='service_page_card_colum'>
                            <p className='service_page_card_topic'>Professional Resume Writing</p>
                            <p className='service_page_card_pera'>Our certified professional resume writers collaborate with you to create a resume that reflects your skills, accomplishments, and career aspirations. We know what recruiters look for, so we ensure every resume we craft aligns with industry standards and grabs attention.</p>
                            <div className='service_page_card_content_set'>
                                <p className='service_page_card_content'>
                                    <div className='tik'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9.15527e-05C4.486 9.15527e-05 0 4.48609 0 10.0001C0 15.5141 4.486 20.0001 10 20.0001C15.514 20.0001 20 15.5141 20 10.0001C20 4.48609 15.514 9.15527e-05 10 9.15527e-05ZM8.001 14.4131L4.288 10.7081L5.7 9.29209L7.999 11.5871L13.293 6.29309L14.707 7.70709L8.001 14.4131Z" fill="#532E07" />
                                        </svg>
                                    </div>
                                    Customized resume to fit your career goals and job title
                                </p>
                                <p className='service_page_card_content'>
                                    <div className='tik'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9.15527e-05C4.486 9.15527e-05 0 4.48609 0 10.0001C0 15.5141 4.486 20.0001 10 20.0001C15.514 20.0001 20 15.5141 20 10.0001C20 4.48609 15.514 9.15527e-05 10 9.15527e-05ZM8.001 14.4131L4.288 10.7081L5.7 9.29209L7.999 11.5871L13.293 6.29309L14.707 7.70709L8.001 14.4131Z" fill="#532E07" />
                                        </svg>
                                    </div>
                                    Keyword-optimized to pass Applicant Tracking Systems (ATS)
                                </p>
                                <p className='service_page_card_content'>
                                    <div className='tik'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9.15527e-05C4.486 9.15527e-05 0 4.48609 0 10.0001C0 15.5141 4.486 20.0001 10 20.0001C15.514 20.0001 20 15.5141 20 10.0001C20 4.48609 15.514 9.15527e-05 10 9.15527e-05ZM8.001 14.4131L4.288 10.7081L5.7 9.29209L7.999 11.5871L13.293 6.29309L14.707 7.70709L8.001 14.4131Z" fill="#532E07" />
                                        </svg>
                                    </div>
                                    Focused on showcasing skills and achievements that make an impact
                                </p>
                            </div>
                            <button className='service_page_card_btn' onClick={() => (window.location.href = '/resumeWriting')}>Learn more</button>
                        </div>
                        <div className='service_page_card_colum' >
                            <img src={Card1} alt="card_image" className='service_page_card_image' />
                        </div>
                    </div>

                    <div className='service_page_card card_service_page_two'>
                        <div className='service_page_card_colum'>
                            <p className='service_page_card_topic'>Professional Cover Letter Writing</p>
                            <p className='service_page_card_pera'>A personalized cover letter allows you to present your unique story and qualities beyond your resume. Our team crafts cover letters that highlight your qualifications and match your tone, helping you connect with employers on a deeper level.</p>
                            <div className='service_page_card_content_set'>
                                <p className='service_page_card_content'>
                                    <div className='tik'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9.15527e-05C4.486 9.15527e-05 0 4.48609 0 10.0001C0 15.5141 4.486 20.0001 10 20.0001C15.514 20.0001 20 15.5141 20 10.0001C20 4.48609 15.514 9.15527e-05 10 9.15527e-05ZM8.001 14.4131L4.288 10.7081L5.7 9.29209L7.999 11.5871L13.293 6.29309L14.707 7.70709L8.001 14.4131Z" fill="#532E07" />
                                        </svg>
                                    </div>
                                    Tailored to the job title and company you’re applying to
                                </p>
                                <p className='service_page_card_content'>
                                    <div className='tik'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9.15527e-05C4.486 9.15527e-05 0 4.48609 0 10.0001C0 15.5141 4.486 20.0001 10 20.0001C15.514 20.0001 20 15.5141 20 10.0001C20 4.48609 15.514 9.15527e-05 10 9.15527e-05ZM8.001 14.4131L4.288 10.7081L5.7 9.29209L7.999 11.5871L13.293 6.29309L14.707 7.70709L8.001 14.4131Z" fill="#532E07" />
                                        </svg>
                                    </div>
                                    Showcases your enthusiasm and best qualities
                                </p>
                                <p className='service_page_card_content'>
                                    <div className='tik'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 9.15527e-05C4.486 9.15527e-05 0 4.48609 0 10.0001C0 15.5141 4.486 20.0001 10 20.0001C15.514 20.0001 20 15.5141 20 10.0001C20 4.48609 15.514 9.15527e-05 10 9.15527e-05ZM8.001 14.4131L4.288 10.7081L5.7 9.29209L7.999 11.5871L13.293 6.29309L14.707 7.70709L8.001 14.4131Z" fill="#532E07" />
                                        </svg>
                                    </div>
                                    Helps you stand out by adding a personal touch to your application
                                </p>
                            </div>
                            <button className='service_page_card_btn' onClick={() => (window.location.href = '/coverLetter')}>Learn more</button>
                        </div>
                        <div className='service_page_card_colum' >
                            <img src={Card2} alt="card_image" className='service_page_card_image' />
                        </div>
                    </div>


                    <div className='service_page_card card_service_page_three'>
                        <div className='service_page_card_colum'>
                            <p className='service_page_card_topic'>LinkedIn Profile Optimization</p>
                            <p className='service_page_card_pera'>In today’s digital hiring landscape, an optimized LinkedIn profile is crucial. Our experts work with you to craft a profile that promotes your personal brand and uses strategic keywords to attract hiring managers and recruiters in your field.</p>
                            <div className='service_page_card_content_set'>
                                <p className='service_page_card_content'>
                                    <MdDone className='service_page_point_icon_thre' />Profile content customized for your industry and job role
                                </p>
                                <p className='service_page_card_content'>
                                    <MdDone className='service_page_point_icon_thre' />Keyword-optimized to improve discoverability on LinkedIn
                                </p>
                                <p className='service_page_card_content'>
                                    <MdDone className='service_page_point_icon_thre' />Professional summary and job descriptions that highlight your strengths
                                </p>
                            </div>
                            <button className='service_page_card_btn_thre' onClick={() => (window.location.href = '/linkedInOptimization')}>Learn more</button>
                        </div>
                        <div className='service_page_card_colum' >
                            <img src={Card3} alt="card_image" className='service_page_card_image' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard
