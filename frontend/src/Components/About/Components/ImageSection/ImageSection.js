import React from "react";
import { TbFlag3Filled } from "react-icons/tb";
import './imageSection.css'
const ImageSection = () => {
  return (
    <div className='continer_main_box'>
      <div className='container'>
        <div className="about_grid_image_section_container">
          <div className="about_grid_image_section_container_card1">
            <TbFlag3Filled className="about_grid_image_section_container_card1_icon" />
            <p className="about_grid_image_section_container_card1_topic">Our story began in 2019 with a clear mission</p>
            <p className="about_grid_image_section_container_card1_pera">job seekers deserve resumes that truly showcase their strengths. Founded by a team of dedicated career experts, we’re here to help you stand out and succeed.</p>
          </div>
          <div className="about_grid_image_section_container_card2"></div>
          <div className="about_grid_image_section_container_card3"></div>
          <div className="about_grid_image_section_container_card4"></div>
          <div className="about_grid_image_section_container_card5"></div>
          <div className="about_grid_image_section_container_card6">
            <p className="about_grid_image_section_container_card6_topic">Resume Mansion has been a game-changer. </p>
            <p className="about_grid_image_section_container_card6_pera">Their professional writers are responsive, accommodating, and deliver high-quality, tailored resumes.</p>
            <div className="about_grid_image_section_container_card6_owner_card">
              <p className="about_grid_image_section_container_card6_owner_card_name">John Doe</p>
              <p className="about_grid_image_section_container_card6_owner_card_pera">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
