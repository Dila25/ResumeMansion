import React from 'react'
import Card1 from './img/card1image.png'
function Section2() {
  return (
    <div>
      <div className='resume_elevate_continer'>
        <div className='resume_elevate_main_container'>
          <div className='resume_elevate_continer_colum resume_elevate_continer_colum_setup'>
            <p className='resume_elevate_continer_colum_topic'>Why is Resume Mansion the perfect place for a Medical Resume?</p>
            <p className='resume_elevate_continer_colum_pera'>We have over 700,000 success stories in our arsenal. This is why Resume Mansion is one of the best places in the industry to give your medical career a healthy boost. Our team of certified professional resume writers has an in-depth understanding of the unique demands of the healthcare sector.</p>
            <p className='resume_elevate_continer_colum_pera'>Resume Mansion can help you boost your job search forward, whether you are on the front lines as a nurse or in a more behind-the-scenes capacity as a healthcare administrator. Let your Resume Mansion resume reflect your dedication, precision, and compassion to a hiring manager.</p>

          </div>
          <div className='resume_elevate_continer_colum'>
            <img src={Card1} alt="Card1" className='card_one_resume_section_image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
