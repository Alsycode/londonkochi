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

const CourseCardFourLayout = ({courseData}) => {
  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();
  const tagname = router.query.tag;
  console.log("tagname",tagname)

  
  if (tagname) {
    // Your code that uses tagname
  } else {
    console.error('Tagname is undefined or null');
  }
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));
  console.log("relatedCourses77777777777777",courseData)
  const matchingRelatedCourses = { data: [] };

  courseData?.data?.forEach(course => {
    // Check if Coursename attribute includes tagname
    if (course?.attributes?.Coursename?.toLowerCase().includes(tagname?.toLowerCase())) {
      matchingRelatedCourses.data.push(course);
    } 
    // Check if desc property of tabDatas includes tagname
    else if (course?.attributes?.tabDatas?.courseOverview[0]?.desc?.toLowerCase().includes(tagname?.toLowerCase())) {
      matchingRelatedCourses.data.push(course);
    }
  });
console.log("matchingRelatedCourses",matchingRelatedCourses)
  const startIndex = (page - 1) * 10;
  const getSelectedCourse = courses?.data?.slice(startIndex, startIndex + 10);
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
              <CourseCardTwo course={courses} />
              {courses?.length > 10 ? ( // Updated for 10 courses per page
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
  const token = "3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c";
  
  // Fetching the first URL
  const res = await fetch("http://139.59.78.49:1337/api/coursedetails?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const courseData = await res.json();
  
  return {
    props: { courseData },
  };
}
