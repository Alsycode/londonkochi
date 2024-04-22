import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";
import Admissionform from "../admission.js";
import "venobox/dist/venobox.min.css";
import TeamFive from "../Team/TeamFive.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TeamFour from "@/components/Team/TeamFour";
import EventData from "../../data/events.json";
import UniversityBanner from "./UniversityBanner";
import ServiceEight from "../Services/Service-Eight";
import AdvanceTab from "../AdvanceTab/AdvanceTab";
import CardThree from "../Cards/Card-Three";
import BlogGrid from "../Blogs/BlogGrid";
import Events from "../Events/Events";
import Course from "../Accordions/Course";
import Testimonial from "../Testimonials/Testimonial";
import Gallery from "../Gallery/Gallery";
import BrandOne from "../Brand/Brand-One";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";
import imgOne from "../../public/images/gallery/one.jpg";
import imgTwo from "../../public/images/gallery/two.jpg";
import imgThree from "../../public/images/gallery/three.jpg";
import hiImgOne from "../../public/images/banner/one.jpg";
import hiImgTwo from "../../public/images/banner/two.jpg";
import hiImgThree from "../../public/images/banner/hi_3.jpg";
import videoImg from "../../public/images/others/video-06.jpg";
import courseDetails from "../../data/course-details/courseData.json";
import VideoSlider from "../videoslider/index.js";
import VideoCarousel from "../videocarousal/index.js";
import Vidcomponet from "../vidcomponent/index.js";
import BannerVideo from "../../components/bannervideo";
import ContactForm from "../Contacts/Contact-Form.js";
import BrandOneHome from "../Brand/brandhome"
import Typed from "typed.js";
import CardFive from "../Cards/Card-Five.js";
const UniversityClassic = ({videoData, testimonialData, update, detailData}) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
   const [visibleIndex2, setVisibleIndex2] = useState(0);
const dataset = testimonialData?.data;
 console.log("weeeeeee", detailData)
 
  // useEffect(() => {
  //   const typeitInstance = new Typed(".is-visible", {
  //     strings: ["Clip One.", "Clip Two.", "Clip Three."],
  //     typeSpeed: 80,
  //     backSpeed: 60,
  //     startDelay: 200,
  //     loop: Infinity,
  //     showCursor: false,
  //   });
  //   const intervalId = setInterval(() => {
  //     setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
  //   }, 2000);

  //    const intervalIdTwo = setInterval(() => {
  //      setVisibleIndex2((prevIndex) => (prevIndex + 1) % 2);
  //    }, 2000);

  //   return () => {
  //     typeitInstance.destroy();
  //     clearInterval(intervalId);
  //     clearInterval(intervalIdTwo);
  //   };
  // }, []);
  const videoDataa = videoData;
console.log("dffdf",videoDataa)
  const [videoDatas, setVideoDatas] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (videoData) {
      setVideoDatas(videoData);
    }
  }, [videoData]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("http://139.59.78.49:1337/api/london-college-videos?populate=*", {
  //         headers: {
  //           Authorization: "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c"
  //         }
  //       });
  //       const data = await res.json();
  //       setVideoData(data);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   fetchData();
  //   sal({
  //     threshold: 0.01,
  //     once: true,
  //   });
  // }, []);


  console.log("video",videoData)
  const coursess = courseDetails.courseTab.slice(0, 3);
  console.log("coursess",coursess)
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });

    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="rbt-slider-main-wrapper position-relative">
        <UniversityBanner />
      </div>
      {/* <div className="d-flex justify-content-center align-items-center my-5"> 
  <h1 className="title text-center">
    Why
    <span className="header-caption ms-2">
      <span className={`cd-headline loading-bar`}>
        <span
          className={`cd-words-wrapper ${
            visibleIndex2 === 1 ? "is-loading" : ""
          }`}
        >
          <b
            className={
              visibleIndex === 0
                ? "is-visible theme-gradient"
                : "is-hidden theme-gradient"
            }
          >
            Logistics
          </b>
          <b
            className={
              visibleIndex === 1
                ? "is-visible theme-gradient"
                : "is-hidden theme-gradient"
            }
          >
            Supply Chain Management
          </b>
          <b
            className={
              visibleIndex === 2
                ? "is-visible theme-gradient"
                : "is-hidden theme-gradient"
            }
          >
           Management
          </b>
        </span>
      </span>
    </span>
  </h1>
</div> */}

<BannerVideo/>
<TeamFive/>
<div className="rbt-advance-tab-area rbt-section-gapTop bg-color-white">
        <AdvanceTab
          tag=""
          title="LONDON COLLEGE AWARDS AND ACCREDITIONS"
          desc=" "
        />
      </div>
      <div
        className="rbt-program-area rbt-section-gapTop bg-color-white"
        id="program"
      >
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
              <span className="subtitle bg-primary-opacity">
                    Our Program
                  </span>

              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="/course-card-2">
                  Browse Histudy Program<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-5">
          {detailData?.data?.slice(0, 3).map((item, index) => {
  console.log(item); // Logging the current item


  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
      <div className="rbt-category-gallery">
        <div className="thumbnail">
          <Link href={`/courses/${item.id}`}>
          <Image
                    src={item?.attributes?.courseimage?.data?.attributes?.formats?.small?.url}
                    width={498}
                    height={498}
                    alt="Card image"
                  />
            <div className="rbt-bg-overlay"></div>
          </Link>
          <div className="hover-content">
            <h3 className="title">
            <Link href={`/course-details-2/${item.id}`}>{item.attributes?.Coursename}</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
})}
<div className="mb-60 mt-60">
<Gallery/>
</div>
  

      {/* <div
        className="rbt-video-area bg-color-white rbt-section-gapTop"
        id="about"
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={videoImg}
                  width={638}
                  height={407}
                  property="true"
                  alt="Video Images"
                />
                <Link
                  className="rbt-btn rounded-player popup-video position-to-top rbtplayer"
                  data-vbtype="video"
                  href="https://www.youtube.com/watch?v=HASl3MlPgGg"
                >
                  <span>
                    <i className="feather-play"></i>
                  </span>
                </Link>
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner pl--50 pl_lg--0 pl_md--0 pl_sm--0">
                <div className="section-title text-start">
                  <h4 className="title">Build your Career Life.</h4>
                  <p className="description mt--30">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="rbt-feature-wrapper mt--40">
                    <div className="rbt-feature feature-style-1 align-items-center">
                      <div className="icon bg-pink-opacity">
                        <i className="feather-heart"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Flexible Classes</h6>
                      </div>
                    </div>

                    <div className="rbt-feature feature-style-1 align-items-center">
                      <div className="icon bg-primary-opacity">
                        <i className="feather-book"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">Learn From Anywhere</h6>
                      </div>
                    </div>

                    <div className="rbt-feature feature-style-1 align-items-center">
                      <div className="icon bg-coral-opacity">
                        <i className="feather-monitor"></i>
                      </div>
                      <div className="feature-content">
                        <h6 className="feature-title">
                          Experienced Teacher&apos;s service.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
      style={{height:"800px"}}
      ><VideoSlider videoData={videoData} /></div> */}
{/* <div> <VideoCarousel videoData={videoData} /> </div> */}

{/* {videoData?.data?.map((videoObj) => {
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
  <div style={{ width: '50%', marginRight: '20px', maxWidth: '50%' }}>
      <video style={{ width: '100%', height: 'auto' }} controls>
          <source src={videoObj?.attributes?.Video?.data?.attributes?.url} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
  </div>
  <div style={{ width: '50%', marginLeft: '20px', maxWidth: '50%' }}>
      <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>{description}</p>
  </div>
</div>
})} */}

      {/* <div className="rbt-category-area bg-color-white rbt-section-gapTop">
        <ServiceEight isHead={false} />
      </div> */}

      <div className="rbt-banner-area rbt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                className="swiper viral-banner-activation rbt-arrow-between"
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  nextEl: ".rbt-arrow-left",
                  prevEl: ".rbt-arrow-right",
                }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="thumbnail">
                      <Link href="#">
                        <Image
                          className="rbt-radius w-100"
                          src={hiImgOne}
                          width={1305}
                          height={425}
                          property="true"
                          alt="Banner Images"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="thumbnail">
                      <Link href="#">
                        <Image
                          className="rbt-radius w-100"
                          src={hiImgTwo}
                          width={1305}
                          height={425}
                          property="true"
                          alt="Banner Images"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="thumbnail">
                      <Link href="#">
                        <Image
                          className="rbt-radius w-100"
                          src={hiImgThree}
                          width={1305}
                          height={425}
                          property="true"
                          alt="Banner Images"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="rbt-swiper-arrow rbt-arrow-left">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-left"></i>
                    <i className="rbt-icon-top feather-arrow-left"></i>
                  </div>
                </div>
                <div className="rbt-swiper-arrow rbt-arrow-right">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-right"></i>
                    <i className="rbt-icon-top feather-arrow-right"></i>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

     

      
         
            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rbt-category-gallery">
                <div className="thumbnail">
                  <Link href="#">
                    <Image src={imgTwo} property="true" alt="Gallery Images" />
                    <div className="rbt-bg-overlay"></div>
                  </Link>
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="#">ADVANCED DIPLOMA</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="rbt-category-gallery">
                <div className="thumbnail">
                  <Link href="#">
                    <Image
                      src={imgThree}
                      property="true"
                      alt="Gallery Images"
                    />
                    <div className="rbt-bg-overlay"></div>
                  </Link>
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="#">DIPLOMA</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    {/* <div
        className="rbt-course-area rbt-section-gapTop bg-color-white"
        id="course"
      >
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Our Online Courses</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="course-card-2">
                  Browse Histudy Courses<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div> 

           <div className="row g-5">
            <CardThree />
          </div>
        </div> 
       </div>  */}

      {/* <div
        className="rbt-rbt-blog-area rbt-section-gapTop bg-color-white"
        id="blog"
      >
        <div className="container">
          <div className="row g-5 align-items-end mb--30">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Our Research</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="/blog-list">
                  Browse Histudy Post<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <BlogGrid isPagination={false} top={false} start={0} end={3} />
        </div>
      </div> */}
{/* 
      <div className="rbt-event-area bg-color-white rbt-section-gapTop">
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Our Events</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="#">
                  University Upcoming Events
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <Events
            start={0}
            end={4}
            isPagination={false}
            parentClass="card-list-2 event-list-card"
            childClass="col-lg-6 col-md-6 col-12"
            getEvents={EventData}
          />
        </div>
      </div> */}
      {/* <div className="col-lg-12">
  <Slider {...settings}>
    {checkMatchCourses.map((course, index) => (
      <div key={index}>
        <Link
          className="video-popup-with-text video-popup-wrapper text-center popup-video mb--15"
          data-vbtype="video"
          href={course.link}
        >
          <div className="video-content">
            <Image
              className="w-100 rbt-radius"
              src={course.courseImg}
              width={1305}
              height={660}
              alt="Video Images"
            />
            <div className="position-to-top">
              <span className="rbt-btn rounded-player-2 with-animation">
                <span className="play-icon"></span>
              </span>
            </div>
            <span className="play-view-text d-block color-white">
              <i className="feather-eye"></i> Preview this course
            </span>
          </div>
        </Link>
      </div>
    ))}
  </Slider>
</div> */}

      <div
        className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden"
        id="testimonial"
      >
        {/* <div className="container">
          <Course title="University Tuition & Fees" />
        </div> */}
      </div>
      <Vidcomponet videoData={videoData} />
      {/* <div className="rbt-testimonial-area bg-color-light rbt-section-gap overflow-hidden">
        <div className="wrapper mb--60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                  <h2 className="title">
                  Experience the London College difference through <br /> the words of our students and alumni.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div> */}
      {/* <div className="rbt-gallery-area">
        <Gallery />
      </div> */}
       <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
            <div className="container-fluid">
              <div className="row g-5 align-items-center">
                <div className="col-xl-3">
                  <div className="section-title pl--100 pl_md--30 pl_sm--0">
                    <h2 className="title">What Our Students Say</h2>
                    {/* <p className="description mt--20">
                      Learning communicate to global world and build a bright
                      future with our histudy.
                    </p> */}
                        <div className="rbt-button-group">
                <Link className="rbt-moderbt-btn" href="#">
                  <span className="moderbt-btn-text">Explore</span>
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
                  </div>
                </div>
                <TestimonialSix dataset={dataset} />
              </div>
            </div>
          </div>
      {/* <div className="rbt-brand-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row align-items-center g-5">
            <BrandOneHome/>
          </div>
        </div>
      </div> */}
    <div className="rbt-rbt-card-area rbt-section-gap bg-color-white">
            <div className="container">
              <div className="row row--15 align-items-center mb--30">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2 className="title">UPDATES</h2>
                  </div>
                </div>
              </div>
              
              <div className="row row--15">
               {update && <CardFive update={update} />} 
              </div>
            </div>
          </div>
     
      <div
        className="rbt-program-area rbt-section-gapTop bg-color-white"
        id="program"
      >
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">CONTACT US</h2>
              </div>
            </div>
      <ContactForm/>
      <div className="rbt-google-map bg-color-white rbt-section-gapTop">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8054316500397!2d76.32349407450882!3d10.032908772468666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b1cf47bc41d%3A0xe5a66b4a652615b9!2sLondon%20College!5e0!3m2!1sen!2sin!4v1711517169630!5m2!1sen!2sin"
              height="600"
              style={{ border: "0" }}
            ></iframe>
          </div>
      </div></div></div>
    </>
  );
};

export default UniversityClassic;
