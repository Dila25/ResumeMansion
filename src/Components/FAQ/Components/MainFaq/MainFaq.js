import React, { useState } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import './MainFaq.css'
import { CiSearch } from "react-icons/ci";
function MainFaq() {
    const qaData = [
        { question: "What modes of payment do you accept?", answer: "What modes of payment do you accept?" },
        { question: "What do I require to avail the services of Resume Mansion?", answer: "What do I require to avail the services of Resume Mansion?" },
        { question: "What can I do if I forgot to include some details while checking out?", answer: "What can I do if I forgot to include some details while checking out?" },
        { question: "Which transferable skills are most in demand by employers?", answer: "Which transferable skills are most in demand by employers?" },
        { question: "What modes of payment do you accept?", answer: "What modes of payment do you accept?" },
        { question: "What modes of payment do you accept?", answer: "What modes of payment do you accept?" },
    ];

    // State to handle the visibility of answers
    const [showAnswer, setShowAnswer] = useState(Array(qaData.length).fill(false));

    // Function to toggle answer visibility for a specific card
    const handleToggleAnswer = (index) => {
        const updatedAnswers = [...showAnswer];
        updatedAnswers[index] = !updatedAnswers[index];  // Toggle visibility of the answer for this index
        setShowAnswer(updatedAnswers);
    };
    return (
        <div className='card_main_faq'>
            <div className='card_main  main_part_pdin_fqa'>
                <p className='faq_main_topi'>Frequently asked questions</p>
                <p className='faq_main_pera'>Everything you need to know about the product and billing.</p>
                <div> <div className='career_side_section_one'>
                    <div className='career_side_search_bar_main'>
                        <CiSearch className='career_side_search_icon' />
                        <input type='text' className='career_side_search' placeholder='Search'></input>
                    </div>
                </div>

                </div>
                <div className='question_card_main_faq'>
                    {qaData.map((qa, index) => (
                        <div className='questuin_card_faq' key={index}>
                            <div className='question_card_hed'>
                                <p className='question'>{qa.question}</p>
                                <FaCirclePlus className='question_span_btn' onClick={() => handleToggleAnswer(index)} />
                            </div>
                            <p className={`answers ${showAnswer[index] ? 'show' : ''}`}>
                                {qa.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainFaq
