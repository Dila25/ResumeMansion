import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviewsData = [
  {
    review:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    owner: "Kelly Williams",
  },
  {
    review:
      "The resume writing service has been a game-changer for my career! Truly a remarkable experience.",
    owner: "Chris Johnson",
  },
  {
    review:
      "Professional, efficient, and results-driven. I recommend their services to everyone.",
    owner: "Taylor Smith",
  },
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const { review, owner } = reviewsData[currentIndex];

  return (
    <div className="star_continer">
      <div>
        <p className="client_name">Client reviews</p>
        <p className="sub_review">
          We pride ourselves in Resume Writing Services as we know we’re very good at it. Still, there’s nothing more
          reassuring than the feedback we get from thousands of our customers worldwide. Elevating Careers with
          Professional Resume Writing Services.
        </p>
      </div>
      <div className="slider">
        <FaChevronLeft className="arrow left" onClick={handlePrev} />
        <div>
          <p className="reviv_pera">{review}</p>
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">
                <FaStar />
              </span>
            ))}
          </div>
          <p className="owner_rate">{owner}</p>
          <div className="dots">
        {reviewsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
        </div>
        <FaChevronRight className="arrow right" onClick={handleNext} />
       
      </div>
    
    </div>
  );
}

export default Reviews;
