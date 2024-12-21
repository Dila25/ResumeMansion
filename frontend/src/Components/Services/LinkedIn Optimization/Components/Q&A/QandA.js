import React, { useState } from 'react';


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
    <div className='continer_main_box'>
      <div className='container'>
        <div className='card_main'>
          <p className='aq_topic'>See Common Question and Answer</p>
          <div className='question_card_main'>
            {qaData.map((qa, index) => (
              <div className='questuin_card' onClick={() => handleToggleAnswer(index)} key={index}>
                <div className='question_card_hed'>
                  <p className='question'>{qa.question}</p>
                  <div>
                    {showAnswer[index] ? (
                      <div className='question_close_btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_229_26315)">
                            <mask id="mask0_229_26315" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                              <path d="M24 0H0V24H24V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_229_26315)">
                              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H7V11H17V13Z" fill="#063B26" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_229_26315">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                      </div>

                    ) : (
                      <div className='question_span_btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_229_26349" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <path d="M24 0H0V24H24V0Z" fill="white" />
                          </mask>
                          <g mask="url(#mask0_229_26349)">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" fill="#063B26" />
                          </g>
                        </svg>

                      </div>
                    )}
                  </div>
                </div>
                <p className={`answers ${showAnswer[index] ? 'show' : ''}`}>
                  {qa.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QandA;
