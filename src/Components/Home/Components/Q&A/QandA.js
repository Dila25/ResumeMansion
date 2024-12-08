import React, { useState } from 'react';
import './Q&A.css';
import { FaCirclePlus } from "react-icons/fa6";

function QandA() {
  // Sample data for questions and answers
  const qaData = [
    { question: "What modes of payment do you accept?", answer: "What modes of payment do you accept?" },
    { question: "What do I require to avail the services of Resume Mansion?", answer: "What do I require to avail the services of Resume Mansion?" },
    { question: "What can I do if I forgot to include some details while checking out?", answer: "What can I do if I forgot to include some details while checking out?" },
    { question: "Which transferable skills are most in demand by employers?", answer: "Which transferable skills are most in demand by employers?" },
    { question: "What modes of payment do you accept?", answer: "What modes of payment do you accept?" },
    { question: "What modes of payment do you accept?", answer: "What modes of payment do you accept?" },
    { question: "What modes of payment do you accept?", answer: "What modes of payment do you accept?." },
    { question: "Who is a Certified Resume Writer?", answer: "Who is a Certified Resume Writer?" },
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
    <div>
      <div className='card_main'>
        <p className='aq_topic'>See Common Question and Answer</p>
        <div className='question_card_main'>
          {qaData.map((qa, index) => (
            <div className='questuin_card' key={index}>
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
  );
}

export default QandA;
