import React from "react";
import "./Education.css";
import theme_pattern from "../assets/theme_pattern.svg";
import education_data from "../assets/education_data.js";
import arrow_icon from "../assets/arrow_icon.svg";

const Education = () => {
  return (
    <div id="education" className="Education">
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="education-container">
        {education_data.map((item, index) => (
          <div key={index} className="education-format">
            <h3>{item.s_no}</h3>
            <h2>{item.s_name}</h2>
            <p>{item.s_desc}</p>
           <p className="edu-brief gradient-text">{item.brief}</p>
            <p className="edu-institution gradient-text">{item.institution}</p>
            <p className="edu-year gradient-text">{item.year}</p>
            <p className="edu-grade gradient-text">{item.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
