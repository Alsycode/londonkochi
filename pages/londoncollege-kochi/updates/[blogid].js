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
import Kochiblogdetails from "../../../components/Blogs/kochiblogdetails"
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
      <PageHead title={matchedBlog?.attributes?.heading} />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Headerstylekochi headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <div className="rbt-overlay-page-wrapper">
            {/* <BlogBreadCrumb matchedBlog={matchedBlog} /> */}

            <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
              <div className="blog-content-wrapper rbt-article-content-wrapper">
                <Kochiblogdetails
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
  const token = process.env.STRAPI_API_TOKEN;

  const apiUrl = process.env.LONDONKOCHI_UPDATES;
  try {
    const res = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
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
