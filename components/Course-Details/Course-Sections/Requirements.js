import React from "react";

const Requirements = ({ checkMatchCourses }) => {
   const title1 = checkMatchCourses[0]?.title;
  const title2 = checkMatchCourses[1]?.title;
   const deatails1 = checkMatchCourses[0]?.detailsList;
  const deatails2 = checkMatchCourses[1]?.detailsList;
  return (
    <>
      <div className="col-lg-12">
        <div className="section-title">
          <h4 className="rbt-title-style-3 mb--20 text-uppercase">{title1}</h4>
        </div>
        <ul className="rbt-list-style-1">
          {checkMatchCourses[0]?.detailsList.map((item, innerIndex) => (
            <li key={innerIndex}>
              <i className="feather-check"></i>
              {item.listItem}
            </li>
          ))}
        </ul>
             <div className="section-title">
          <h4 className="rbt-title-style-3 mt--20 mb--20 text-uppercase">{title2}</h4>
        </div>
        <ul className="rbt-list-style-1">
          {checkMatchCourses[1]?.detailsList.map((item, innerIndex) => (
            <li key={innerIndex}>
              <i className="feather-check"></i>
              {item.listItem}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Requirements;
