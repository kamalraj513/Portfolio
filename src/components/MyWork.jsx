import React from 'react';
import './MyWork.css';
import theme_pattern from "../assets/theme_pattern.svg";
import mywork_data from '../assets/mywork_data.js';

const MyWork = () => {
  return (
    <div id="projects" className='mywork'>
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
            <div className="mywork-card">
            <img src={work.w_img} alt={work.w_name} />
    </div>
  </a>
))}

      </div>
    </div>
  );
};

export default MyWork;
