import { useEffect, useState } from "react";
import sal from "sal.js";
import { Provider } from "react-redux";
import BlogData from "../../../data/blog/blog.json";
import PageHead from "../../Head";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import Cart from "@/components/Header/Offcanvas/Cart";
import Banner from "@/components/Common/Banner";
import BlogGrid from "@/components/Blogs/mumbaibloggrid";
import BackToTop from "../../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import { useAppContext } from "@/context/Context";
import ContactForm from "@/components/Contacts/Contact-Form";
import Head from "next/head";
import Headerstylemumbai from "../../../components/Header/headerstylemumbia";
const BlogGridLayout = ({ updateData }) => {  
  const [data, setData ] = useState();

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Set initial data from getServerSideProps
    if (updateData) {
      setData(updateData);
    }
  }, [updateData]);

  let getAllBlogs = JSON.parse(JSON.stringify(BlogData.blogGrid));
 console.log("check",updateData)
  return (
    <>
      <PageHead title="Blog Grid - Online Courses & Education NEXTJS14 Template" />
      {/* <Head>
        <title>{title}</title>
        <meta name="description" content="We have been succesfull in placing more than 1800+ students  in India and Middle East Asia.London college is a globally reputed  educational institution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon (1).ico" />
      </Head> */}
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <Headerstylemumbai headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <Banner col="col-lg-12" text="Updates" getBlog={getAllBlogs} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogGrid updateData={updateData} isPagination={true} top={false} start={0} end={updateData?.data?.length} />
            </div>
          </div>
<ContactForm/>
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
    const res = await fetch("https://godigitalhub.org/api/london-college-mumbaiupdates?populate[0]=seo&populate[1]=seo.metaSocial&populate[2]=Bannerimg1&populate[3]=smallimage1&populate[4]=smallimage2&populate[5]=smallimage3&populate[6]=blockquote&populate[7]=para&populate[8]=tags&populate[9]=seo.metaImage", {
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

export default BlogGridLayout;
