import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { addToCartAction } from "@/redux/action/CartAction";
import VideoImg from "../../../public/images/course/course1.jpg";
// import VideoImg from "../../public/images/course/course1.jpg";
const Viedo = ({ checkMatchCourses, matchedCourse }) => {

  console.log("*************************",checkMatchCourses)
  const { cartToggle, setCart } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const makePhoneCall = () => {
    window.location.href = "tel:+1234567890"; // Replace +1234567890 with your phone number
  };
  // =====> Start ADD-To-Cart
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [amount, setAmount] = useState(1);

  const addToCartFun = (id, amount, product) => {
    dispatch(addToCartAction(id, amount, product));
    setCart(!cartToggle);
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart]);

  // =====> For video PopUp
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isHide = currentScrollPos > 200;

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const youtubeID = "gwJyrrOlypQ";
const embedurl  = `https://www.youtube.com/embed/${youtubeID}?autoplay=0`;
  return (
    <>
      <Link
        className={`video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15 ${
          hideOnScroll ? "d-none" : ""
        }`}
        data-vbtype="video"
        href={embedurl}
      >
        <div className="video-content">
          {/* {checkMatchCourses.courseImg && ( */}
            <Image
              className="w-100 rbt-radius"
              src={VideoImg}
              width={355}
              height={255}
              alt="Video Images"
            />
          {/* )} */}
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
      <div className="content-item-content">
        <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
          <div className="rbt-price">
            {/* <span className="current-price">${checkMatchCourses.price}</span> */}
            {/* <span className="off-price">${checkMatchCourses.offPrice}</span> */}
          </div>
          {/* <div className="discount-time">
            <span className="rbt-badge color-danger bg-color-danger-opacity">
              <i className="feather-clock"></i> {checkMatchCourses.days} days
              left!  fetch data from strapi
            </span>
          </div> */}
        </div>

        <div className="add-to-card-button mt--15">
          <Link
            className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              makePhoneCall(); 
            }}
          >
            <span>Call us</span>
            
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </Link>
        </div>

        <div className="buy-now-btn mt--15">
          <Link
            className="rbt-btn btn-border icon-hover w-100 d-block text-center"
            href="/admissions"
            onClick={(e) => {
             
              makePhoneCall(); // Call the function to trigger the phone call
             
            }}
          >
            <span className="btn-text">Apply Now</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </Link>
        </div>
        {/* <span className="subtitle">
          <i className="feather-rotate-ccw"></i> 30-Day Money-Back Guarantee
        </span> */}
        <div
          className={`rbt-widget-details has-show-more ${
            toggle ? "active" : ""
          }`}
        >
          <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
            {/* {checkMatchCourses &&
              checkMatchCourses.roadmap.map((item, innerIndex) => (
                <li key={innerIndex}>
                  <span>{item.text}</span>
                  <span className="rbt-feature-value rbt-badge-5">
                    {item.desc}
                  </span>
                </li>
              ))} */}
               <li >
                  <span>Start Date:</span>
                  <span className="rbt-feature-value rbt-badge-5">
                    {checkMatchCourses?.attributes?.Startdate}
                  </span>
                </li>
                <li >
                  <span>Skill Reqd:</span>
                  <span className="rbt-feature-value rbt-badge-5">
                    {checkMatchCourses?.attributes?.Skill_Level_Required_for_enrollment}
                  </span>
                </li>
                <li >
                  <span>Batch Size:</span>
                  <span className="rbt-feature-value rbt-badge-5">
                    {checkMatchCourses?.attributes?.Batch_size}
                  </span>
                </li>
                <li >
                  <span>Cerifications</span>
                  <span className="rbt-feature-value rbt-badge-5">
                    {checkMatchCourses?.attributes?.Certifications}
                  </span>
                </li>
          </ul>
          {/* <div
            className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            Show More
          </div> */}
        </div>

        <div className="social-share-wrapper mt--30 text-center">
          <div className="rbt-post-share d-flex align-items-center justify-content-center">
            <ul className="social-icon social-default transparent-with-border justify-content-center">
              <li>
                <Link href="https://www.facebook.com/londoncollegekochi/">
                  <i className="feather-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/LondonCollegebf">
                  <i className="feather-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/londoncollege_mumbai/">
                  <i className="feather-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/london-college/?originalSubdomain=in">
                  <i className="feather-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="mt--20" />
          {/* <div className="contact-with-us text-center">
            <p>For details about the course</p>
            <p className="rbt-badge-2 mt--10 justify-content-center w-100">
              <i className="feather-phone mr--5"></i> Call Us:{" "}
              <Link href="#">
                <strong>+444 555 666 777</strong>
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Viedo;
