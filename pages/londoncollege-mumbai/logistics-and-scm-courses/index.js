import { useEffect, useState } from "react";
import PageHead from "../../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import MobileMenu from "@/components/Header/MobileMenu";
import Headerstylemumbai from "@/components/Header/headerstylemumbia";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import Pagination from "@/components/Common/Pagination";
import FooterOne from "@/components/Footer/Footer-One";
import CourseDetails from "../../../data/course-details/courseData.json";
import BackToTop from "../../backToTop";
import CourseCardTwo from "@/components/Category/Filter/CourseCard-Two";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import ContactForm from "@/components/Contacts/Contact-Form";
import Coursecardmumbai from "../../../components/Category/Filter/coursecardmumbai"
import Footermumbai from "../../../components/Footer/footermumbai"
const CourseCardFourLayout = ({courseData}) => {
  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));

  const startIndex = (page - 1) * 10;
  const getSelectedCourse = courseData?.data?.slice(startIndex, startIndex + 10);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCourse(courseData?.data);
    setTotalPages(Math.ceil(courseData?.data?.length / 10));
  }, [setTotalPages, setCourse]);

console.log("^&&&&&&&^^^^^^^^^^^^^&&&&&&&&&",courseData)
  return (
    <>
      <PageHead title="Course Four - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
        <Headerstylemumbai headerSticky="rbt-sticky" headerType="" />
          <CategoryHead category={getAllCourse} />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <Coursecardmumbai course={courseData} />
              {courseData?.data?.length > 3 ? ( // Updated for 10 courses per page
                <div className="row">
                  <div className="col-lg-12 mt--60">
                    <Pagination
                      totalPages={totalPages}
                      pageNumber={page}
                      handleClick={handleClick}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <ContactForm />
          <BackToTop />
          <Footermumbai />
        </Context>
      </Provider>
    </>
  );
};

export default CourseCardFourLayout;
export async function getServerSideProps() {
  const token = process.env.STRAPI_API_TOKEN;
  const apiUrl1 = process.env.LONDONMUMBAI_COURSE;

  // Fetching data from the specified URL
  const res = await fetch(apiUrl1, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const courseData = await res.json();

  return {
    props: { courseData },
  };
}