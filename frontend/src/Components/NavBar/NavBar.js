import React, { useState } from 'react';
import './navbar.css';
import Logo from './img/logo.png';
import ResLogo from './img/reslogo.png';
import { TbUser } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { FaBars } from "react-icons/fa"; // Importing hamburger icon
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <div className='nav_bar'>
                <div>
                    <img src={Logo} alt='Logo' className='Nav_Logo nroml_verson' onClick={() => (window.location.href = '/')} />
                    <img src={ResLogo} alt='Logo' className='Nav_Logo_res res_verson' onClick={() => (window.location.href = '/')} />
                </div>
                <div className='nav_item_set'>
                    <p className='nav_item' onClick={() => (window.location.href = '/')}>Home</p>
                    <div className='nav_item flxone' onClick={toggleServices}>
                        Our Services
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="#051D14" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {servicesOpen && (
                        <div className='services_dropdown'>
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
            </div>

            {/* Sidebar for mobile */}
            {sidebarOpen && (
                <div className='sidebar'>
                    <p className='nav_item' onClick={() => (window.location.href = '/')}>Home</p>
                    <div className='nav_item flxone' onClick={toggleServices}>
                        Our Services
                    </div>
                    {servicesOpen && (
                        <div className='services_dropdown'>
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
