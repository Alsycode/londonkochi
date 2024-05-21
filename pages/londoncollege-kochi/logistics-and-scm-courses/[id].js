import React, { useEffect } from "react";
import { useRouter } from "next/router";
import sal from "sal.js";
import CourseData from "../../../data/course-details/courseData.json";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context"; 
import CourseBreadcrumbTwo from "../../../components/Course-Details/Course-Sections/CourseBreadcrumb-Two";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import Headerstylemumbai from "../../../components/Header/headerstylemumbia";
import CourseHead from "../../../components/Course-Details/Course-Sections/course-head";
import PageHead from "../../Head";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import CourseDetailsTwo from "../../../components/Course-Details/CourseDetails-Two";
import CourseDetails from "../../../components/Course-Details/CourseDetails-Two"
import CardFive from "@/components/Cards/Card-Five";
import Headerstylekochi from "../../../components/Header/headerstylekochi"; 
console.log("CourseDatajsonnnnnnnnnnnnnnnn:", CourseData);
import Cardkochi from "../../../components/Cards/cardkochi";
import { saveAs } from 'file-saver';
const SingleCourseTwo = ({courseData, updateData}) => {
  const router = useRouter();
  const postId = router.query.id;
  const slug = router.query.id;
  console.log("slug------------------",slug)
  let getCourse;

  getCourse = JSON.parse(JSON.stringify(CourseData.courseTab));
console.log("getCourse",getCourse)

  const checkMatch = getCourse.find((course) => course.slug === postId);
console.log("matchedcourse",checkMatch);
// const detailname = courseData?.attributes?.Coursename;
    //   useEffect(() => {
    //     if (postId && checkMatch === undefined) {
    //       router.push("/courses");
    //     }

    //     sal({
    //       threshold: 0.01,
    //       once: true,
    //     });
    //   }, [checkMatch, router]);
const delivery = CourseData?.courseTab[0]?.DeliveryAndBenefit;
console.log("delivery",delivery);
console.log("courseData:", courseData); 
const update = updateData;
const coursejson = courseData?.attributes?.tabDatas;
console.log("coursejson", coursejson)

const matchingItem = courseData?.data?.find((item) => item?.attributes?.slug === slug);
console.log("matchingItem**************", matchingItem)
const handleDownload = () => {
  // URL to the syllabus Excel file
  const fileUrl = "/syllabus.xlsx";
    saveAs(fileUrl, "syllabus.xlsx");
};
  return (
    <>
      <PageHead title="Course Filter Toggle - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Headerstylekochi headerSticky="rbt-sticky" headerType="" />
          {/* <Cart /> */}

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image"></div>
            <div className="rbt-banner-content">
              <div className="rbt-banner-content-top rbt-breadcrumb-style-3">
              <div className="container">
            <div className="row">
              <CourseBreadcrumbTwo getMatchCourse={checkMatch && checkMatch} />
            </div>
          </div>
              </div>
            </div>
          </div>
          <button onClick={handleDownload} className="btn btn-primary">
                  Download Syllabus
                </button>
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseDetailsTwo
                  checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
                  courseData={matchingItem}
                />
                
              </div>
            </div>
          </div>
         
          {/* <CourseActionBottom
            checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
          /> */}

          {/* <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
            <SimilarCourses
              checkMatchCourses={courseData}
            />
          </div> */}
          <div className="rbt-rbt-card-area rbt-section-gap bg-color-white">
  <div className="container">
    <div className="row row--15 align-items-center mb--30">
      <div className="col-lg-12 text-center"> {/* Center the text */}
        <div className="section-title">
          <h2 className="title">UPDATES</h2>
        </div>
      </div>
    </div>
          <div className="row row--15">
               {update && <Cardkochi update={update} />} 
              </div>
</div>
</div>
          <BackToTop />
          {/* <Separator /> */}
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleCourseTwo;
export async function getServerSideProps() {
  const token = process.env.STRAPI_API_TOKEN;
  const apiUrl1 = process.env.LONDONKOCHI_COURSE;
  const apiUrl2 = process.env.LONDONKOCHI_UPDATES;
  // Fetching the first URL
  const res = await fetch(apiUrl1, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const courseData = await res.json();
  
  // Fetching the second URL
  const res2 = await fetch(apiUrl2, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const updateData = await res2.json();

  return {
    props: { courseData, updateData },
  };
}
