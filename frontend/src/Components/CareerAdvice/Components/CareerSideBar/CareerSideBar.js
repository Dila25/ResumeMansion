import React from 'react'
import './careerSideBar.css'
import { CiSearch } from "react-icons/ci";
function CareerSideBar() {
    return (
        <div>
            <div className='career_side_continer'>
                <div className='career_side_section_one'>
                    <div className='career_side_search_bar'>
                        <CiSearch className='career_side_search_icon' />
                        <input type='text' className='career_side_search' placeholder='Search'></input>
                    </div>
                </div>
                <div className='career_side_section_two'>
                    <p className='career_side_section_two_topic'>Blog categories</p>
                    <div className='career_side_section_two_nav_item_set'>
                        <p className='career_side_section_two_nav_item career_side_section_two_nav_item_active'>View all</p>
                        <p className='career_side_section_two_nav_item'>Design</p>
                        <p className='career_side_section_two_nav_item'>Product</p>
                        <p className='career_side_section_two_nav_item'>Software Engineering</p>
                        <p className='career_side_section_two_nav_item'>Customer Success</p>
                        <p className='career_side_section_two_nav_item'>Leadership</p>
                        <p className='career_side_section_two_nav_item'>Management</p>
                    </div>

                </div>
                <div className='career_side_section_three'>
                    <p className='career_side_section_two_topic'>Blog categories</p>
                    <div className='career_side_section_three_tag_continer'>
                        <p className='career_side_section_three_tagname'>#tag</p> <p className='career_side_section_three_tagname'>#tag</p> <p className='career_side_section_three_tagname'>#tag</p> <p className='career_side_section_three_tagname'>#tag</p> <p className='career_side_section_three_tagname'>#tag</p> <p className='career_side_section_three_tagname'>#tag</p> <p className='career_side_section_three_tagname'>#tag</p> <p className='career_side_section_three_tagname'>#tag</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerSideBar
