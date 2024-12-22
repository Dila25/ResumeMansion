import React, { useState } from 'react';
import './Accomplishments.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Accomplishments() {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5, // Trigger when 50% of the component is visible
    onChange: (isVisible) => setStartCount(isVisible),
  });

  return (
    <div className="continer_main_box" ref={ref}>
      <div className='container'>
        <div className="accomplishments_continer">
          <div className="accomplishments_continer_card_one">
            <p className="accomplishments_continer_card_topic">
              Highlights of Our Accomplishments
            </p>
            <p className="accomplishments_continer_card_pera">
              Recognizing noteworthy milestones and achievements within our journey, showcasing success and perseverance.
            </p>
          </div>
          <div className='counting_boot'>
            <div className="accomplishments_continer_card">
              <p className="accomplishments_continer_card_topic">
                {startCount ? <CountUp start={0} end={23} duration={2} suffix="+" /> : '23+'}
              </p>
              <p className="accomplishments_continer_card_pera">Excellence Award</p>
            </div>
            <div className="accomplishments_continer_card">
              <p className="accomplishments_continer_card_topic">
                {startCount ? <CountUp start={0} end={13} duration={2} suffix="+" /> : '13+'}
              </p>
              <p className="accomplishments_continer_card_pera">International Presence</p>
            </div>
            <div className="accomplishments_continer_card">
              <p className="accomplishments_continer_card_topic">
                {startCount ? <CountUp start={0} end={55} duration={2} suffix="k" /> : '55k'}
              </p>
              <p className="accomplishments_continer_card_pera">User’s Retention</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;
