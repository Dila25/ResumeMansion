import React from 'react'
import './blog.css'
import CarrerSideBar from '../CareerSideBar/CareerSideBar'
import BlogCard from './BlogCard'
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
function CarrerBlogSection() {
    return (
        <div className='card_main'>
            <div className='carrer_Blog_Section_continer'>
                <div>
                    <CarrerSideBar />
                </div>
                <div className='blog_card_continer'>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
            <div className='navigate_btn_footer_continer'>
                <button className='navigate_btn_footer'><GrLinkPrevious /> Previous</button>
                <div className='navigate_btn_footer_sub_continer'>
                    <button className='navigate_btn_footer_number navigate_btn_footer_number_active'>1</button>
                    <button className='navigate_btn_footer_number'>2</button>
                    <button className='navigate_btn_footer_number'>3</button>
                    <p className='navigate_btn_footer_number'>...</p>
                    <button className='navigate_btn_footer_number'>8</button>
                    <button className='navigate_btn_footer_number'>9</button>
                    <button className='navigate_btn_footer_number'>10</button>
                </div>
                <button className='navigate_btn_footer'>Next <GrLinkNext /></button>
            </div>
        </div>
    )
}

export default CarrerBlogSection
