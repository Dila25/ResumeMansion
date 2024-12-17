import React, { useState, useEffect } from 'react';
import './navbar.css';
import Logo from './img/logo.png';
import ResLogo from './img/reslogo.png';
import { TbUser } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { FaBars } from "react-icons/fa"; // Importing hamburger icon
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
function NavBar() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle
    const [isVisible, setIsVisible] = useState(true); // State for navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0);
    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };
    const toggleServicesMobile = () => {
        setServicesOpenMobile(!servicesOpenMobile);
    };
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    // Handle scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false); // Scrolling down - hide navbar
            } else {
                setIsVisible(true); // Scrolling up - show navbar
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
    return (
        <div>
            <div className={`nav_bar ${isVisible ? 'visible' : 'hidden'}`}>
                <div>
                    <img src={Logo} alt='Logo' className='Nav_Logo nroml_verson' onClick={() => (window.location.href = '/')} />
                    <img src={ResLogo} alt='Logo' className='Nav_Logo_res res_verson' onClick={() => (window.location.href = '/')} />
                </div>
                <div className='nav_item_set'>
                    <p className='nav_item' onClick={() => (window.location.href = '/')}>Home</p>
                    <div className='nav_item flxone' onClick={toggleServices}>
                        Our Services
                        {servicesOpen ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12.5L10 7.5L15 12.5" stroke="#051D14" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#051D14" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>


                    <p className='nav_item' onClick={() => (window.location.href = '/careerAdvice')}>Career Advice</p>
                    <p className='nav_item' onClick={() => (window.location.href = '/about')}>About</p>
                    <p className='nav_item' onClick={() => (window.location.href = '/contactUs')}>Contact</p>
                    <p className='nav_item' onClick={() => (window.location.href = '/fAQ')}>FAQ</p>
                </div>
                <div className='action_set_nav'>
                    <TbUser className='icon_set' />
                    <TbShoppingBag className='icon_set' />
                    <button className='order_btn_nav nroml_verson'>Order Now</button>
                    {sidebarOpen ? (
                        <AiOutlineClose className='hamburger_icon' onClick={toggleSidebar} />
                    ) : (
                        <FaBars className='hamburger_icon' onClick={toggleSidebar} />
                    )}

                </div>
                {servicesOpen && (
                    <div className='services_dropdown'>
                        <div className='dro_card_set_nav_bar'>
                            <div className='dro_card_nav'>
                                <p className='dro_card_nav_topic' onClick={() => (window.location.href = '/resumeWriting')}><u>Professional Resume Writing Service</u><FaArrowRight /></p>
                                <p className='dro_card_nav_pera'>Transform your job prospects with a compelling resume tailored to your goals and industry.</p>
                            </div>
                            <div className='dro_card_nav'>
                                <p className='dro_card_nav_topic' onClick={() => (window.location.href = '/coverLetter')}><u>Professional Cover Letter Writing Service </u><FaArrowRight /></p>
                                <p className='dro_card_nav_pera'>Craft a captivating cover letter that highlights your strengths and complements your resume.</p>
                            </div>
                            <div className='dro_card_nav'>
                                <p className='dro_card_nav_topic' onClick={() => (window.location.href = '/linkedInOptimization')}><u>LinkedIn Optimization Service</u><FaArrowRight /></p>
                                <p className='dro_card_nav_pera'>Enhance your LinkedIn profile to attract recruiters and showcase your personal brand effectively.</p>
                            </div>
                        </div>

                    </div>
                )}
            </div>

            {/* Sidebar for mobile */}
            {sidebarOpen && (
                <div className='sidebar'>
                    <p className='nav_item' onClick={() => (window.location.href = '/')}>Home</p>
                    <div className='nav_item flxone' onClick={toggleServicesMobile}>
                        Our Services
                        {servicesOpenMobile ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12.5L10 7.5L15 12.5" stroke="#051D14" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#051D14" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </div>
                    {servicesOpenMobile && (
                        <div className='services_dropdown_mobile'>
                            <p className='nav_item service_item_nav' onClick={() => (window.location.href = '/servicess')}>Services</p>
                            <p className='nav_item service_item_nav' onClick={() => (window.location.href = '/resumeWriting')}>Resume Writing</p>
                            <p className='nav_item service_item_nav' onClick={() => (window.location.href = '/coverLetter')}>Cover Letter writing</p>
                            <p className='nav_item service_item_nav' onClick={() => (window.location.href = '/linkedInOptimization')}>LinkedIn Optimization</p>
                        </div>
                    )}
                    <p className='nav_item' onClick={() => (window.location.href = '/careerAdvice')}>Career Advice</p>
                    <p className='nav_item' onClick={() => (window.location.href = '/about')}>About</p>
                    <p className='nav_item' onClick={() => (window.location.href = '/contactUs')}>Contact</p>
                    <p className='nav_item' onClick={() => (window.location.href = '/fAQ')}>FAQ</p>
                    <button className='order_btn_nav res_verson'>Order Now</button>
                </div>
            )}
        </div>
    );
}

export default NavBar;
