import React, { useEffect } from "react";
import { useRouter } from "next/router";
import sal from "sal.js";
import CourseData from "../../data/course-details/courseData.json";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context"; 

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import CourseHead from "../../components/Course-Details/Course-Sections/course-head";
import PageHead from "../Head";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import CourseDetailsTwo from "../../components/Course-Details/CourseDetails-Two";
import CourseDetails from "../../components/Course-Details/CourseDetails-Two"
import CardFive from "@/components/Cards/Card-Five";
console.log("CourseDatajsonnnnnnnnnnnnnnnn:", CourseData);
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
  useEffect(() => {
    if (postId && checkMatch === undefined) {
      router.push("/courses");
    }

    sal({
      threshold: 0.01,
      once: true,
    });
  }, [checkMatch, router]);
const delivery = CourseData?.courseTab[0]?.DeliveryAndBenefit;
console.log("delivery",delivery);
console.log("courseData:", courseData); 
const update = updateData;
const coursejson = courseData?.attributes?.tabDatas;
console.log("coursejson", coursejson)

const matchingItem = courseData?.data?.find((item) => item?.attributes?.slug === slug);
console.log("matchingItem**************", matchingItem)
  return (
    <>
      <PageHead title="Course Filter Toggle - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="" headerType={true} />
          {/* <Cart /> */}

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image"></div>
            <div className="rbt-banner-content">
              <div className="rbt-banner-content-top rbt-breadcrumb-style-3">
                <CourseHead
                  checkMatch={checkMatch !== undefined ? checkMatch : ""}
                />
              </div>
            </div>
          </div>

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
          <div className="row row--15">
               {update && <CardFive update={update} />} 
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
  const token = "3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c";
  
  // Fetching the first URL
  const res = await fetch("http://godigitalhub.org/api/coursedetails?populate[0]=seo&populate[1]=seo.metaSocial&populate[2]=seo.metaImage&populate[3]=tags&populate[4]=courseimage&populate[5]=recruiters&populate[6]=jobrole&populate[7]=courseVideo", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const courseData = await res.json();
  
  // Fetching the second URL
  const res2 = await fetch("https://godigitalhub.org/api/london-collegeupdates?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const updateData = await res2.json();

  return {
    props: { courseData, updateData },
  };
}
