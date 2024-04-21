import { useEffect, useState } from "react";
import PageHead from "../Head";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import Pagination from "@/components/Common/Pagination";
import FooterOne from "@/components/Footer/Footer-One";
import CourseDetails from "../../data/course-details/courseData.json";
import BackToTop from "../backToTop";
import CourseCardTwo from "@/components/Category/Filter/CourseCard-Two";
import CallToActionFour from "@/components/Call-To-Action/CallToAction-Four";
import ContactForm from "@/components/Contacts/Contact-Form";

const CourseCardFourLayout = () => {
  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();
  const tagname = router.query.tag;
  console.log("tagname",tagname)

  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));
  console.log("relatedCourses77777777777777",getAllCourse)
  const matchingRelatedCourses = [];

  getAllCourse.forEach(course => {
    if (course?.courseTitle?.toLowerCase().includes(tagname.toLowerCase()) || course?.sortDescription?.toLowerCase().includes(tagname.toLowerCase())) {
        matchingRelatedCourses.push(course);
    } else if (course?.serviceEleven) {
        course.serviceEleven.forEach(item => {
            if (item.body) {
                item.body.forEach(subItem => {
                    if (subItem.title && subItem.title.toLowerCase().includes(tagname.toLowerCase())) {
                        matchingRelatedCourses.push(course);
                    }
                });
            }
        });
    }
});
console.log("matchingRelatedCourses",matchingRelatedCourses)
  const startIndex = (page - 1) * 10;
  const getSelectedCourse = courses?.slice(startIndex, startIndex + 10);
console.log("getAllCourse",getAllCourse)
  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCourse(matchingRelatedCourses);
    setTotalPages(Math.ceil(getAllCourse.length / 10)); // Updated for 10 courses per page
  }, [setTotalPages, setCourse]);
console.log("get",getAllCourse)
  return (
    <>
      <PageHead title="Course Four - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <CategoryHead category={getAllCourse} />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <CourseCardTwo course={getSelectedCourse} />
              {getAllCourse?.length > 10 ? ( // Updated for 10 courses per page
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
