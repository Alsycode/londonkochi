import React, { useState } from "react";

const Overview = ({ overview }) => {
  const [toggle, setToggle] = useState(false);
  
  const courseOverviewww = overview?.courseOverview[0];
   const descrip = courseOverviewww?.desc;
   const title = courseOverviewww?.title;
  console.log("check111111111111111", descrip)
  // const { title, desc, overviewList } = checkMatchCourses;
  // const { title, desc, descTwo, overviewList } = checkMatchCourses;
  return (
    <>
      <div
        className={`rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more ${
          toggle ? "active" : ""
        }`}
        id="overview"
      >
         <div className="rbt-course-feature-inner has-show-more-inner-content">
          <div className="section-title">
          <h4 className="rbt-title-style-3 text-uppercase">{title}</h4>
          </div>
          <p>{descrip}</p>

           <div className="row g-5 mb--30">
            {/* <div className="col-lg-6">
              <ul className="rbt-list-style-1">
                {overviewList.slice(0, 4).map((item, innerIndex) => (
                  <li key={innerIndex}>
                    <i className="feather-check"></i>
                    {item.listItem}
                  </li>
                ))}
              </ul>
            </div>  */}

            <div className="col-lg-6">
              {/* <ul className="rbt-list-style-1">
                {overviewList.slice(4, 8).map((item, innerIndex) => (
                  <li key={innerIndex}>
                    <i className="feather-check"></i>
                    {item.listItem}
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
          {/* {descTwo && (  <p>{descTwo}</p>)} */}
        
        </div>
        <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          Show More
        </div> 
      </div>
    </>
  );
};

export default Overview;
