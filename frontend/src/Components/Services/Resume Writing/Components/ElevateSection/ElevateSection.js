import React from 'react'
import './ElevateSection.css'
import Card1 from './img/card1image.png'
function ElevateSection() {
  return (
    <div>
      <div className='resume_elevate_continer'>
        <div className='resume_elevate_main_container'>
          <div className='resume_elevate_continer_colum resume_elevate_continer_colum_setup'>
            <p className='resume_elevate_continer_colum_topic'>Elevate Your Career with Our Professional Resume Writing Services!</p>
            <p className='resume_elevate_continer_colum_pera'>Ready to advance your career? With Resume Mansion, you can’t go wrong. We pride ourselves on crafting compelling resumes that deliver results quickly. Our team of expert writers will work closely with you throughout the process to ensure you receive a resume you can trust. Let us help you secure more job interviews and fast-track your job search. Invest in your future today with Resume Mansion’s certified professional resume writing services!</p>
            <div className='resume_elevate_continer_colum_point_set'>
              <li className='resume_elevate_continer_colum_point'>Our expert writers craft personalized resumes that highlight your unique skills and experiences, tailored to your target job.</li>
              <li className='resume_elevate_continer_colum_point'>With knowledge across various industries, our writers understand what employers are looking for and tailor your resume accordingly.</li>
              <li className='resume_elevate_continer_colum_point'>We ensure your resume includes industry-specific keywords, increasing its visibility in applicant tracking systems (ATS).</li>
              <li className='resume_elevate_continer_colum_point'>Receive your first draft within 24-48 hours, helping you get your job applications out faster.</li>
              <li className='resume_elevate_continer_colum_point'>Our clients have experienced significantly increased interview rates, thanks to our compelling and well-structured resumes.</li>
              <li className='resume_elevate_continer_colum_point'>We use modern resume formats that are visually appealing and easy to read, ensuring your information stands out to hiring managers.</li>
            </div>
          </div>
          <div className='resume_elevate_continer_colum'>
            <img src={Card1} alt="Card1" className='card_one_resume_section_image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElevateSection
