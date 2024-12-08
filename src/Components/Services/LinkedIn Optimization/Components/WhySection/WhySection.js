import React from 'react'
import './WhySection.css'
import Card1 from './img/card1image.png'
function WhySection() {
  return (
    <div>
      <div className='resume_elevate_continer'>
        <div className='resume_elevate_main_container'>
          <div className='resume_elevate_continer_colum resume_elevate_continer_colum_setup'>
            <p className='resume_elevate_continer_colum_topic'>Why is LinkedIn Profile Optimization important?</p>
            <p className='resume_elevate_continer_colum_pera'>Did you know that over 50% of employers prefer to see a cover letter with job applications? By partnering with Resume Mansion, you can ensure that your cover letter makes a lasting impression and meets the expectations of potential employers. Let us help you take the next step in your job search with a powerful, personalized cover letter.</p>
            <div className='resume_elevate_continer_colum_point_set'>
              <li className='resume_elevate_continer_colum_point'>Have an updated online presence</li>
              <li className='resume_elevate_continer_colum_point'>Maximize your networking opportunities</li>
              <li className='resume_elevate_continer_colum_point'>Build and broadcast your personal brand</li>
              <li className='resume_elevate_continer_colum_point'>Narrate the story of your career progression over the years</li>
              <li className='resume_elevate_continer_colum_point'>Narrate the story of your career progression over the years</li>
              <li className='resume_elevate_continer_colum_point'>Make it easier for hiring managers to find you on the platform</li>
              <li className='resume_elevate_continer_colum_point'>Attract hiring managers and recruiters from your target industries</li>
              <li className='resume_elevate_continer_colum_point'>Enhance your visibility and get you on the radar of the right people</li>
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
