import React from 'react'

function ContactUsFrom() {
  return (
    <div>
         <div>
        <div className='card_main'>
            <div className='main_contact_home_section'>
            <div className='colum_contact_home bk_contact_right'>
                    <div className='dataset_pera_conact'>
                        <p className='contact_pera'>After having my resume polished by Resume Mansion, I landed multiple interviews almost immediately. Their work made a real difference!</p>
                        <ul className='image_name_cotente'>
                            <li className=''>Rachel Doe</li>
                        </ul>
                        <p className='owner_pera_contact'>Software Engineer</p>
                    </div>
                </div>
                <div className='lft_colum'>
                    <div>
                        <p className='fomr_topic_con'>Still have questions?</p>
                        <p className='fome_pera'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    </div> <form className="contact_from">
                        <div>
                            <label className='contct_from_label'>First Name</label><br />
                            <input className='contact_input' type='text' required placeholder='Your First Name' /><br />
                        </div>
                        <div>
                            <label className='contct_from_label'>Email Adress</label><br />
                            <input className='contact_input' type='text' required placeholder='Your Email Adress' /><br />
                        </div>
                        <div>
                            <label className='contct_from_label'>Message</label><br />
                            <textarea className='contact_input' type='text' required placeholder='How we can help you' rows={5} /><br />
                        </div>
                        <button className='sub_btn_from'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactUsFrom
