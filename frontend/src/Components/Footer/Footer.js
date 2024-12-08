import React, { useRef } from 'react';
import './footer.css'
import Logo from './Logo/logo.png'
import { FiUploadCloud } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandFacebook } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";
function Footer() {
    const fileInputRef = useRef(null); // create a ref for the file input

    // Function to trigger file input
    const handleFileUpload = () => {
        fileInputRef.current.click(); // programmatically trigger the file input click
    };
    return (
        <div>
            <div className='main_row_footer_container'>
                <div className='main_row_footer'>
                    <div className='colum_footer_main_rwo'>
                        <p className='foter_topic'>Boost Your Career with a Free Resume Review!</p>
                        <p className='foter_sub_topic'>Get your resume reviewed by certified resume writers today – simply upload your current resume and we’ll get back to you within 24 hours to provide a full resume critique.</p>
                    </div>
                    <div className='colum_footer_main_rwo_two'>
                        <FiUploadCloud className='icon_uplode' onClick={handleFileUpload} />
                        <p className='content_uplode'><span className='btn_uplode'  onClick={handleFileUpload}>Click to upload</span> or drag and drop</p>
                        <p className='content_uplode'>.doc, .docx, .pdf, .jpg, .png</p>
                        {/* Hidden file input element */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }} // hide the input element
                            accept=".doc,.docx,.pdf,.jpg,.png"
                            onChange={(e) => {
                                // Handle the file selection (you can handle it further as per your need)
                                console.log(e.target.files[0]);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className='footeer_second_colum'>
                        <div className='first_box_colum_footer'>
                            <div className='footer_left_box_sub'>
                                <img src={Logo} alt='logo' className='footer_logo' />
                                <p className='sub_name_logo_footer'>It’s a Resume Exploit</p>
                            </div>
                            <div className='footer_soshel'>
                                <TbBrandLinkedin className='soshel_icon_footer' />
                                <TbBrandFacebook className='soshel_icon_footer' />
                                <BsTwitterX className='soshel_icon_footer' />
                                <TbBrandYoutube className='soshel_icon_footer' />
                            </div>
                        </div>
                        <div className='footer_right_box'>
                            <div className='footer_box'>
                                <p className='footer_head'>Services</p>
                                <p className='footer_nav_item'>Resume Writing</p>
                                <p className='footer_nav_item'>Cover letter Writing</p>
                                <p className='footer_nav_item'>Career Advice</p>
                                <p className='footer_nav_item'>LinkedIn optimization</p>
                            </div>
                            <div className='footer_box'>
                                <p className='footer_head'>About</p>
                                <p className='footer_nav_item'>Our Company</p>
                                <p className='footer_nav_item'>Our Process</p>
                                <p className='footer_nav_item'>Careers</p>
                                <p className='footer_nav_item'>Affiliates</p>
                            </div>
                            <div className='footer_box'>
                                <p className='footer_head'>Support</p>
                                <p className='footer_nav_item'>FAQ</p>
                                <p className='footer_nav_item'>Contact Us</p>
                                <p className='footer_nav_item'>Privacy Policy</p>
                                <p className='footer_nav_item'>Cookie Policy</p>
                            </div>
                        </div>
                    </div>
                    <p className='Copyright'>Copyright 2010-2024 © Resume Mansion. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
