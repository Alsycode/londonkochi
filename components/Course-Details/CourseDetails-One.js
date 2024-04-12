import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Featured from "./Course-Sections/Featured";
import Instructor from "./Course-Sections/Instructor";
import Overview from "./Course-Sections/Overview";
import RelatedCourse from "./Course-Sections/RelatedCourse";
import Requirements from "./Course-Sections/Requirements";
import Review from "./Course-Sections/Review";
import Viedo from "./Course-Sections/Viedo";
import DeliveryandBenifits from "./Course-Sections/Delivery-and-Benifits"; // Corrected import
import VideoImg from "../../public/images/course/course1.jpg";
import AboutIndustry from "./Course-Sections/AboutIndustry";
import Gallery from "../Gallery/Gallery";
import Jobrole from "./Course-Sections/jobrole";
const CourseDetailsOne = ({ checkMatchCourses }) => {
  
  return (
    <>
      <div className="col-lg-8">
        <div className="course-details-content">
          {/* <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
            {checkMatchCourses.courseImg && (
              <CourseBanner bannerImg={checkMatchCourses.courseImg} />
            )}
          </div> */}
          <div className="rbt-inner-onepage-navigation sticky-top mt--30">
            <CourseMenu />
          </div>

          {checkMatchCourses &&
            checkMatchCourses.courseOverview.map((data, index) => (
              <Overview {...data} key={index} checkMatchCourses={data} />
            ))}

          <div
            className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
            id="Certificates & Affiliates"
          >
            {checkMatchCourses &&
              checkMatchCourses.courseRequirement.map((data, index) => (
                <Requirements
                {...data}
                key={index}
                checkMatchCourses={data}
              />
              ))}
          </div>

          <div
            className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
            id="Delivery & Benefit"
          >
            <div className="row g-5">
              {checkMatchCourses &&
                checkMatchCourses.courseRequirement.map((data, index) => (
                  <DeliveryandBenifits   checkMatchCourses={checkMatchCourses.DeliveryAndBenefit} />
                ))}
            </div>
          </div>
          <div
            className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
            id="About Industry"
          >
              {checkMatchCourses &&
             
             <AboutIndustry  checkMatchCourses={checkMatchCourses.aboutIndustry} />
         
                  }    </div>
          <div
            className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
            id="Recruitment"
          >
              <Gallery/>
          </div>
          <div
            className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
            id="Job rolet"
          >
           <Jobrole/>
          </div>

          {/* {checkMatchCourses &&
            checkMatchCourses.featuredReview.map((data, index) => (
              <Featured {...data} key={index} coursesFeatured={data} />
            ))} */}
        </div>
        <div className="related-course mt--60">
          {checkMatchCourses &&
            checkMatchCourses.relatedCourse.map((data, index) => (
              <RelatedCourse {...data} key={index} checkMatchCourses={data} />
            ))}
        </div>
      </div>

      <div className="col-lg-4">
        <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
          <div className="inner">
            <Viedo checkMatchCourses={checkMatchCourses && checkMatchCourses} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsOne;
