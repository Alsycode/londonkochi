import React, { useState } from "react";

const AboutIndustry = ({ checkMatchCourses }) => {
  const [toggle, setToggle] = useState(false);
  const { title, description } = checkMatchCourses[0];
console.log("gettttttttttttttt", checkMatchCourses)
const aboutTitle = checkMatchCourses[0]?.title;
const aboutDescription = checkMatchCourses[0]?.description;
  return (
    <>
    
        <div className="rbt-course-feature-inner has-show-more-inner-content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">{aboutTitle}</h4>
          </div>
          <p>{aboutDescription}</p>

          <div className="row g-5 mb--30">
            <div className="col-lg-6">
              {/* <ul className="rbt-list-style-1">
                {overviewList.slice(0, 4).map((item, innerIndex) => (
                  <li key={innerIndex}>
                    <i className="feather-check"></i>
                    {item.listItem}
                  </li>
                ))}
              </ul> */}
            </div>

           
          </div>
          {/* <p>{descTwo}</p> */}
        </div>
    
      
    </>
  );
};

export default AboutIndustry;
