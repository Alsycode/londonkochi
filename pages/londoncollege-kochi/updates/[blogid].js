import React, { useEffect } from "react";
import { useRouter } from "next/router";

// import BlogData from "../../../data/blog/blog.json";
import BlogData from "../../../data/blog/blog.json";
import PageHead from "@/pages/Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogListItems from "@/components/Blogs/Blog-Sections/BlogList-Items";
import Instagram from "@/components/Instagram/Instagram";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";
import Headerstylekochi from "../../../components/Header/headerstylekochi";
import Kochisection from "../../../components/Blogs/Blog-Sections/kochisection"
const SingleBlog = ({updateData}) => {
  const router = useRouter();
  const postId = parseInt(router.query.blogid);
  console.log("*(999999999999999999999999",)
  let blogPosts;

  if (postId <= 14) {
    blogPosts = JSON.parse(JSON.stringify(BlogData.blogList));
  } else {
    blogPosts = JSON.parse(JSON.stringify(BlogData.blogGrid));
  }

  const matchedBlog = updateData?.data?.find((post) => post.id === postId);
console.log("matchedupdate",matchedBlog)
  useEffect(() => {
    if (postId && !matchedBlog) {
      router.push("/updates");
    }
  }, [matchedBlog, router]);

const filteredData = updateData?.data?.filter(item => item.id !== postId);
  return (
    <>
      {/* <PageHead title="Blog Details - Online Courses & Education NEXTJS14 Template" /> */}
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Headerstylekochi headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <div className="rbt-overlay-page-wrapper">
            {/* <BlogBreadCrumb matchedBlog={matchedBlog} /> */}

            <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
              <div className="blog-content-wrapper rbt-article-content-wrapper">
                <BlogDetails
                  matchedBlog={matchedBlog !== undefined ? matchedBlog : ""}
                  updateData={updateData}
                /> 
                <div className="related-post pt--60">
                  <div className="section-title text-start mb--40">
                    <span className="subtitle bg-primary-opacity">
                      Related Post
                    </span>
                    <h4 className="title">Similar Post</h4>
                  </div>
                   <Kochisection
                    selectedBlogs={BlogData.blogList}
                    updateData={filteredData}
                    start={1}
                    end={4}
                  /> 
                </div>
              </div>
            </div>

            {/* <Instagram /> */}
          </div>

          <BackToTop />
          <Separator />
          <FooterOne /> 
        </Context>
      </Provider>
    </>
  );
};


export async function getServerSideProps() {
  try {
    const res = await fetch("https://godigitalhub.org/api/london-collegeupdates?populate[0]=seo&populate[1]=seo.metaSocial&populate[2]=Bannerimg1&populate[3]=smallimage1&populate[4]=smallimage2&populate[5]=smallimage3&populate[6]=blockquote&populate[7]=para&populate[8]=tags&populate[9]=seo.metaImage", {
      headers: {
        Authorization: "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c"
      }
    });
    const data = await res.json();
    
    return {
      props: {
        updateData: data
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        updateData: null
      }
    };
  }
}
export default SingleBlog;
