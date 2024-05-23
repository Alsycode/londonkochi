import { useEffect } from "react";
import { Provider } from "react-redux";
import sal from "sal.js";
import { useRouter } from "next/router";
import BlogData from "../../../data/blog/blog.json";


import PageHead from "../../Head";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import Cart from "@/components/Header/Offcanvas/Cart";
import Banner from "@/components/Common/Banner";
import BackToTop from "../../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BlogGridMinimal from "@/components/Blogs/BlogGridMinimal";
import Kochiblogminimal from "../../../components/Blogs/kochiblogminimal"
const BlogGridMinimalLayout = ({updatesData}) => {
  let getBlog = JSON.parse(JSON.stringify(BlogData.blogGrid));
  const router = useRouter();
  const tagname = router.query.tag;
  console.log("tagname",tagname)
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  const updateData = {
    data: updatesData?.data?.filter(item => {
      const blockquoteText = item?.attributes?.blockquote?.quote?.toLowerCase() || '';
      const heading = item?.attributes.heading?.toLowerCase() || '';
      const tagNameLower = tagname.toLowerCase();
      return blockquoteText.includes(tagNameLower) || heading.includes(tagNameLower);
    })
  };
console.log("1111111111111111111111",updateData)
  return (
    <>
      <PageHead title="Blog Grid - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Banner col="col-lg-12" text="Updates" getBlog={getBlog} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <Kochiblogminimal
                isPagination={true}
                top={true}
                start={0}
                end={updateData?.data?.length}
                updateData={updateData}
                 />
            </div>
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default BlogGridMinimalLayout;
export async function getServerSideProps() {
    const token = process.env.STRAPI_API_TOKEN;
    const apiUrl2 = process.env.LONDONKOCHI_UPDATES;
  try {
    const res = await fetch(apiUrl2, {
      headers: {
        Authorization: "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c"
      }
    });
    const data = await res.json();
    
    return {
      props: {
        updatesData: data
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        updatesData: null
      }
    };
  }
}
