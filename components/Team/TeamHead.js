import React from "react";

const TeamHead = ({ title, desc }) => {
  return (
    <>
      <div className="row mb--60 mt--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h1 className="title">London College Campuses</h1>
            {/* <p className="description mt--10">{desc}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamHead;
