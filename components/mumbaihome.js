import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";
import Head from "next/head.js";
import Admissionform from "../components/admission.js";
import "venobox/dist/venobox.min.css";
// import TeamFive from "../Team/TeamFive.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TeamFour from "@/components/Team/TeamFour";
// import EventData from "../../data/events.json";
// import UniversityBanner from "./UniversityBanner";
import ServiceEight from "../components/Services/Service-Eight.js";
import AdvanceTab from "../components/AdvanceTab/AdvanceTab";
import CardThree from "../components/Cards/Card-Three";
import BlogGrid from "../components/Blogs/BlogGrid";
// import Events from "../Events/Events";
import Course from "../components/Accordions/Course";
import Testimonial from "../components/Testimonials/Testimonial";
import Gallery from "../components/Gallery/Gallery";
import BrandOne from "../components/Brand/Brand-One";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";
import imgOne from "../public/images/gallery/one.jpg";
import imgTwo from "../public/images/gallery/two.jpg";
import imgThree from "../public/images/gallery/three.jpg";
import hiImgOne from "../public/images/banner/one.jpg";
import hiImgTwo from "../public/images/banner/two.jpg";
import hiImgThree from "../public/images/banner/hi_3.jpg";
import videoImg from "../public/images/others/video-06.jpg";
import courseDetails from "../data/course-details/courseData.json";

import VideoSlider from "../components/videoslider/index.js";
import VideoCarousel from "../components/videocarousal/index.js";
import Vidcomponet from "../components/vidcomponent/index.js";
import BannerVideo from "../components/bannervideo";
import ContactForm from "../components/Contacts/Contact-Form.js";
import BrandOneHome from "../components/Brand/brandhome"
import Typed from "typed.js";
import CardFive from "../components/Cards/Card-Five.js";
import Mumbaibanner from "../components/mumbaibanner.js"
import Mumbaicard from "../components/Cards/cardmumbai.js"
import { useAppContext } from "../context/Context.js"; 
const UniversityClassic = ({videoData, testimonialData, update, detailData, kochiSeosDatas}) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
   const [visibleIndex2, setVisibleIndex2] = useState(0);
  //  const [ setCollege, college ] = useAppContext();
const dataset = testimonialData?.data;
 console.log("weeeeeee", detailData)
 
  
  const videoDataa = videoData;
console.log("dffdf",videoDataa)
  const [videoDatas, setVideoDatas] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (videoData) {
      setVideoDatas(videoData);
    }
  }, [videoData]);




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
  useEffect(() => {
    const typeitInstance = new Typed(".is-visible-one", {
      strings: ["Supply Chain Management", "Logistics", "Shipping"],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: Infinity,
      showCursor: false,
    });

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => {
      typeitInstance.destroy();
      clearInterval(intervalId);
    };
  }, []);
  const detailmeta = detailData?.data[1]?.attributes?.seo;
  console.log("detailmeta", detailmeta)
  return (
    <>
     <Head>
        
     <script type="application/ld+json">{JSON.stringify(kochiSeosDatas?.data?.attributes?.structuredData)}</script>
      </Head>
      <div className="rbt-slider-main-wrapper position-relative">
        <Mumbaibanner />
      </div>
       <div className="d-flex justify-content-center align-items-center my-5"> 
  <h1 className="title text-center">
      
      Why London College
      <span className="header-caption ms-2">
        <span className="cd-headline clip is-full-width">
          <span className="cd-words-wrapper">
            <b className="is-visible theme-gradient is-visible-one"></b>
          </span>
        </span>
      </span>
    
    </h1>
    </div>
     

<BannerVideo/>

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
              <span className="text-uppercase text-black">
           <h2> Our Program</h2>
          </span>

              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <Link className="rbt-btn-link" href="/logistics-and-scm-courses">
                  Explore our courses<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-5">
  {detailData?.data?.slice(0, 3).map((item, index) => (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
      <Head>
        <title>{item?.attributes?.seo?.metaTitle}</title>
        <meta name="description" content={item?.attributes?.seo?.metaDescription} />
        <meta name="keywords" content={item?.attributes?.seo?.keywords} />
        <meta name="robots" content={item?.attributes?.seo?.metaRobots} />
        <meta property="og:title" content={item?.attributes?.seo?.metaSocial[2]?.title} />
        <meta property="og:description" content={item?.attributes?.seo?.metaSocial[2]?.metaDescription} />
        <meta property="og:image" content={item?.attributes?.seo?.metaImage?.data?.attributes?.formats?.small?.url} />
        <meta property="og:url" content={item?.attributes?.seo?.canonicalURL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={item?.attributes?.seo?.metaSocial[1]?.title} />
        <meta name="twitter:description" content={item?.attributes?.seo?.metaSocial[1]?.metaDescription} />
        <meta name="twitter:image" content={item?.attributes?.seo?.metaImage?.data?.attributes?.formats?.small?.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="instgram:title" content={item?.attributes?.seo?.metaSocial[0]?.title} />
        <meta property="instgram:description" content={item?.attributes?.seo?.metaSocial[0]?.metaDescription} />
        <meta property="instgram:image" content={item?.attributes?.seo?.metaImage?.data?.attributes?.formats?.small?.url} /> 
        <script type="application/ld+json">{JSON.stringify(item?.attributes?.seo?.structuredData)}</script>
        <meta name="viewport" content={item?.attributes?.seo?.metaViewport} />
        <link rel="canonical" href={item?.attributes?.seo?.canonicalURL} />
      </Head>
      <div className="rbt-category-gallery">
        <div className="thumbnail">
          <Link href={`/logistics-and-scm-courses/${item?.attributes?.slug}`}>
            <Image
              src={item?.attributes?.courseimage?.data?.attributes?.formats?.thumbnail?.url}
              width={498}
              height={498}
              alt="Card image"
            />
            <div className="rbt-bg-overlay"></div>
          </Link>
          <div className="hover-content">
            <h3 className="title">
              <Link href={`/logistics-and-scm-courses/${item?.attributes?.slug}`}>{item.attributes?.Coursename}</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  ))}
<div className="mb-60 mt-60">
<Gallery/>
</div>
  

    
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

     

      
         
   
          </div>
        </div>
      </div>
   

      <div
        className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden"
        id="testimonial"
      >
        
      </div>
      <Vidcomponet videoData={videoData} />
      
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
      {update && <Mumbaicard update={update} />} 
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7909325.042834895!2d69.389294271297!3d14.54341558229313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1f84aaeefad%3A0xef0eef9ee1e8f5d1!2sLondon%20College%20Mumbai!5e0!3m2!1sen!2sin!4v1715229855471!5m2!1sen!2sin"
              height="600"
              style={{ border: "0" }}
            ></iframe>
          </div>
      </div></div></div>
    </>
  );
};

export default UniversityClassic;
