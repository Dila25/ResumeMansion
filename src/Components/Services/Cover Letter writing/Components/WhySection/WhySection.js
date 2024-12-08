import React from 'react'
import './WhySection.css'
import Card1 from './img/card1image.png'
function WhySection() {
  return (
    <div>
      <div className='resume_elevate_continer'>
        <div className='resume_elevate_main_container'>
          <div className='resume_elevate_continer_colum resume_elevate_continer_colum_setup'>
            <p className='resume_elevate_continer_colum_topic'>Why a Well-Crafted Cover Letter Matters</p>
            <p className='resume_elevate_continer_colum_pera'>Creating a compelling job application that stands out to hiring managers begins with a personalized cover letter. At Resume Mansion, we specialize in crafting tailored cover letters that complement your resume and highlight your key selling points. Our skilled professional resume writers will develop a keyword-optimized cover letter specifically designed for your target job title.</p>
            <p className='resume_elevate_continer_colum_pera'>Did you know that over 50% of employers prefer to see a cover letter with job applications? By partnering with Resume Mansion, you can ensure that your cover letter makes a lasting impression and meets the expectations of potential employers. Let us help you take the next step in your job search with a powerful, personalized cover letter.</p>
            <div className='resume_elevate_continer_colum_point_set'>
              <li className='resume_elevate_continer_colum_point'>A well-crafted cover letter helps you catch the eye of hiring managers.</li>
              <li className='resume_elevate_continer_colum_point'>While your resume lists your qualifications, the cover letter allows you to showcase your personality and unique attributes.</li>
              <li className='resume_elevate_continer_colum_point'>Stand out in a crowded job market where many candidates apply for the same position.</li>
              <li className='resume_elevate_continer_colum_point'>A cover letter enhances your resume by providing context and deeper insights into your experiences.</li>
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

export default WhySection
