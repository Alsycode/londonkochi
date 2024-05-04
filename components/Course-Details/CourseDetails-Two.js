import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";
import "venobox/dist/venobox.min.css";
import Viedo from "./Course-Sections/Viedo";
import CourseMenu from "./Course-Sections/Course-Menu";
import Overview from "./Course-Sections/Overview";
import Requirements from "./Course-Sections/Requirements";
import Instructor from "./Course-Sections/Instructor";
import Review from "./Course-Sections/Review";
import Featured from "./Course-Sections/Featured";
import RelatedCourse from "./Course-Sections/RelatedCourse";
import Content from "./Course-Sections/Content";
import DeliveryandBenifits from "./Course-Sections/Delivery-and-Benifits"; // Corrected import
 
import VideoImg from "../../public/images/course/course-02.jpg";
import AboutIndustry from "./Course-Sections/AboutIndustry";
import Gallery from "../Gallery/Gallery";
import Jobrole from "./Course-Sections/jobrole";
const tags = ["Warehouse","Commerce","DIPLOMA","Online","Shipping","Supply Chain Management","Logistics","Logistics Courses","Logistics Colleges"];
const CourseDetailsTwo = ({ checkMatchCourses, courseData }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
 const cerificate = checkMatchCourses?.courseRequirement;

   const detailname = courseData?.attributes?.Coursename;
  const jsontitle = checkMatchCourses?.courseTitle;
  let matchedCourse = null;
 courseData?.data?.forEach((item) => {
 
  if (item?.attributes?.Coursename === jsontitle) {
    // If a match is found, assign the current item to matchedCourse
    matchedCourse = item;
    // Exit the loop since we found a match
    return;
  }
});

//  console.log("jsontitle",jsontitle)
// console.log("detailname",detailname)
  const deliveryandBenifits = courseData?.attributes?.tabDatas?.DeliveryAndBenefit;

  const aboutIndustry = courseData?.attributes?.tabDatas?.aboutIndustry;
// const AcclaimedAffiliations = courseData?.attributes?.tabDatas?.Acclaimed Affiliations;
 const overview = courseData?.attributes?.tabDatas;
  const requirement = courseData?.attributes?.tabDatas?.courseRequirement;
  const tagData = courseData?.attributes?.tags;
// const certificates = 
 console.log("requirement",tagData)
 console.log("jsontitle",jsontitle)
 const meta = courseData?.attributes?.seo?.metaDescription;
 console.log("checkMatchCourses111111111111",meta)
 const jobrole = courseData?.attributes?.jobrole;
 console.log("jobrolee111111111111",jobrole)
  return (
    <>
      <Head>
    <title>{courseData?.attributes?.seo?.metaTitle}</title>
    <meta name="description" content={courseData?.attributes?.seo?.metaDescription} />
    <meta name="keywords" content={courseData?.attributes?.seo?.keywords} />
    <meta name="robots" content={courseData?.attributes?.seo?.metaRobots} />
    
    <meta property="og:title" content={courseData?.attributes?.seo?.metaSocial[2]?.title} />
    <meta property="og:description" content={courseData?.attributes?.seo?.metaSocial[2]?.metaDescription} />
    <meta property="og:image" content={courseData?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} />
    <meta property="og:url" content={courseData?.attributes?.seo?.canonicalURL} />
    <meta property="og:type" content="website" />
    
    <meta name="twitter:title" content={courseData?.attributes?.seo?.metaSocial[1]?.title} />
    <meta name="twitter:description" content={courseData?.attributes?.seo?.metaSocial[1]?.metaDescription} />
    <meta name="twitter:image" content={courseData?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} />
    <meta name="twitter:card" content="summary_large_image" />
    
    <meta property="instgram:title" content={courseData?.attributes?.seo?.metaSocial[0]?.title} />
    <meta property="instgram:description" content={courseData?.attributes?.seo?.metaSocial[0]?.metaDescription} />
    <meta property="instgram:image" content={courseData?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} /> 
    
    <script type="application/ld+json">{JSON.stringify(courseData?.attributes?.seo?.structuredData)}</script>
    
    <meta name="viewport" content={courseData?.attributes?.seo?.metaViewport} />
    
    <link rel="canonical" href={courseData?.attributes?.seo?.canonicalURL} />
</Head>
      <div className="col-lg-8">

        {checkMatchCourses?.courseImg && (
          <Link
            className="video-popup-with-text video-popup-wrapper text-center popup-video mb--15"
            data-vbtype="video"
            href="https://www.youtube.com/shorts/57SFQ4MoP5M"
          >
            <div className="video-content">
              <Image
                className="w-100 rbt-radius"
                src={VideoImg}
                width={1305}
                height={660}
                alt="Video Images"
              />
              {/* <div className="position-to-top">
                <span className="rbt-btn rounded-player-2 with-animation">
                  <span className="play-icon"></span>
                </span>
              </div>
              <span className="play-view-text d-block color-white">
                <i className="feather-eye"></i> Preview this course
              </span> */}
            </div>
          </Link>
        )}
      </div>

      <div className="row row--30 gy-5 pt--60">
        <div className="col-lg-8">
          <div className="course-details-content">
            <div className="rbt-inner-onepage-navigation sticky-top mt--30">
              <CourseMenu />
            </div>


          


            {/* Commented-out section */}
            
             {/* {checkMatchCourses &&
              checkMatchCourses?.courseOverview?.map((data, index) => ( */}
                <Overview  overview={overview}  />
              {/* ))}
             */}
            <div
              className="rbt-instructor rbt-shadow-box instructor-wrapper mt--30"
              id="Delivery & Benefit" // Corrected typo
            >
              
                  <DeliveryandBenifits   checkMatchCourses={deliveryandBenifits} />

            </div>

            <div
              className="rbt-instructor rbt-shadow-box instructor-wrapper mt--30"
              id="About Industry" // Corrected typo
            >
              
          {checkMatchCourses &&
             
             <AboutIndustry checkMatchCourses={aboutIndustry} />
           }

            </div>

            <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="Certificates & Affiliates">
  <div className="row">
    {requirement &&
      // checkMatchCourses?.courseRequirement?.map((data, index) => (
        <div className="col-lg-6 col-md-12" >
          <Requirements  checkMatchCourses={requirement} />
        </div>
      // ))
    }
  </div>
</div>
            
            {/* Display Delivery and Benefits section */}
            {/* <DeliveryandBenifits /> */}
            
            {/* Instructor section */}

            {/* Commented-out section */}
            {/* <div className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30" id="review">
              <Review />
            </div> */}

            {/* Featured section */}
            {/* {checkMatchCourses &&
              checkMatchCourses.featuredReview.map((data, index) => (
                <Featured {...data} key={index} coursesFeatured={data} />
              ))} */}
              
          </div>
          {/* Related course section */}
          {/* <div className="related-course mt--60">
            {checkMatchCourses &&
              checkMatchCourses.relatedCourse.map((data, index) => (
                <RelatedCourse {...data} key={index} checkMatchCourses={data} />
              ))}
          </div> */}
         

            <div
              className="rbt-instructor rbt-shadow-box instructor-wrapper mt--30"
              id="Recruitment"
            >
              
             <Gallery/>

            </div>

            <div
              className="rbt-instructor rbt-shadow-box instructor-wrapper mt--30"
              id="Job role"
            >
              
             <Jobrole jobrole={jobrole}/>

            </div>
            <div className="tagcloud" style={{ marginTop: "30px" }}>
      {tagData?.map((tag, index) => (
         <Link
         key={index}
         href="/relatedCourse/[tag]"
         as={`/relatedCourse/${encodeURIComponent(tag?.tagtext.replace(/\s+/g, '-'))}`}
       >
          #{tag?.tagtext}
        </Link>
      ))}
    </div>
        </div>
        
             <div className="col-lg-4">
        <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
          <div className="inner">
            <Viedo checkMatchCourses={courseData} matchedCourse={matchedCourse} />
          </div>
        </div>
      </div>
      </div>
 
    </>
  );
};

export default CourseDetailsTwo;

