import { useEffect, useState } from "react";
import PageHead from "../../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import Pagination from "@/components/Common/Pagination";
import FooterOne from "@/components/Footer/Footer-One";
import CourseDetails from "../../../data/course-details/courseData.json";
import BackToTop from "../../backToTop";
import CourseCardTwo from "@/components/Category/Filter/CourseCard-Two";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import ContactForm from "@/components/Contacts/Contact-Form";
import CoursecardKochi from "../../../components/Category/Filter/coursecardkochi"
import Headerstylekochi from "../../../components/Header/headerstylekochi";
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
    setTotalPages(Math.ceil(courseData?.data?.length / 10)); // Updated for 10 courses per page
  }, [setTotalPages, setCourse]);
console.log("get",getAllCourse)
console.log("^&&&&&&&^^^^^^^^^^^^^&&&&&&&&&",courseData)
  return (
    <>
      <PageHead title="Updates" />
      <Provider store={Store}>
        <Context>
          <Headerstylekochi headerSticky="rbt-sticky" headerType={true} />
          <CategoryHead category={getAllCourse} />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <CoursecardKochi course={courseData} />
              {getAllCourse?.length > 3 ? ( // Updated for 10 courses per page
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
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default CourseCardFourLayout;
export async function getServerSideProps() {
  const token = process.env.STRAPI_API_TOKEN;
  const apiUrl = process.env.LONDONKOCHI_COURSE;

  // Fetching data from the specified URL
  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const courseData = await res.json();

  return {
    props: { courseData },
  };
}