import React from 'react'
import Card1 from './img/card1.png'
import Card2 from './img/card2.png'
import Card3 from './img/card3.png'
import './Boosting.css'
function Boosting() {
    return (
        <div className='continer_main_box'>
            <div className='container'>
                <div className='boosting_card_continer_main_topic_set'>
                    <p className='boosting_card_continer_main_topic'>Career-Boosting Services to Help You Stand Out</p>
                    <p className='boosting_card_continer_main_pera'>Our tailored services—resume writing, cover letter creation, LinkedIn optimization, and career advice—are designed to showcase your strengths and help you make a lasting impression in today’s job market.</p>
                </div>
                <div className='boosting_card_continer_main'>
                    <div className='boosting_card_continer'>
                        <div className='boosting_card card_one_boost'>
                            <p className='boosting_card_topic'>Professional Resume Writing Services</p>
                            <p className='boosting_card_pera boosting_card_pera_one'>Resume Mansion’s professional resume writing services go beyond the basics. We dive deep into your background and career goals to craft a unique, modern resume that positions you as a top candidate in today’s job market. Propel your job search forward with a Resume Mansion resume that makes a lasting impact.</p>
                            <img src={Card1} alt='card_boot' className='boosting_card_image' />
                        </div>
                        <div className='boosting_card card_two_boost'>
                            <p className='boosting_card_topic'>Professional Cover Letter Writing Services</p>
                            <p className='boosting_card_pera boosting_card_pera_two'>Make your job application stand out with a personalized cover letter from Resume Mansion. Our expert writers create cover letters that showcase your skills and achievements, optimized for both applicant tracking systems (ATS) and recruiters. Invest in a cover letter that captures attention and helps you achieve your career goals.</p>
                            <img src={Card2} alt='card_boot' className='boosting_card_image' />
                        </div>
                    </div>
                    <div className='boosting_card_thre card_thre_boost'>
                        <p className='boosting_card_topic'>Professional Cover Letter Writing Services</p>
                        <p className='boosting_card_pera boosting_card_pera_thre'>Enhance your online presence with Resume Mansion’s LinkedIn optimization services. Our experts craft keyword-rich profiles that highlight your professional achievements and increase your visibility to recruiters. Let us help you make the most of LinkedIn and take your career to the next level.</p>
                        <img src={Card3} alt='card_boot' className='boosting_card_image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boosting
