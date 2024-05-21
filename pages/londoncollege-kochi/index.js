import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import FooterOne from "@/components/Footer/Footer-One";
import Cart from "@/components/Header/Offcanvas/Cart";
import UniversityClassic from "@/components/13-university-classic/13-University-Classic";
import HeaderStyleFour from "@/components/Header/HeaderStyle-Four";
import Separator from "@/components/Common/Separator";
import Kochihome from "../../components/kochihome"
import KochiHeader from "../../components/Header/Headers/kochiheader"
import Headerstylekochi from "../../components/Header/headerstylekochi"
const UniversityPage = ({videoData, testimonialData, update, detailData, kochiSeosDatas }) => {
  const data = update;
 console.log("00000000000000000000000000000000000000", kochiSeosDatas)
  return (
    <>
      <PageHead title="London College- No.1 Logistics School" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          {/* <HeaderStyleFour headerType="" /> */}
          <Headerstylekochi headerSticky="rbt-sticky" headerType="" />
          <Kochihome videoData={videoData} detailData={detailData} testimonialData={testimonialData} update={update} kochiSeosDatas={kochiSeosDatas} />
          <Cart />
               
          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default UniversityPage;
export async function getServerSideProps(context) {
  const token = process.env.STRAPI_API_TOKEN;
  const videoUrl = process.env.LONDONKOCHI_VIDEO;
  const testimonyUrl = process.env.LONDONKOCHI_TESTIMONY;
  const seoUrl = process.env.LONDONKOCHI_SEOS;
  const updatesUrl = process.env.LONDONKOCHI_UPDATES;
  const courseUrl = process.env.LONDONKOCHI_COURSE
  try {
    // Fetch video data
    const videoRes = await fetch(
      videoUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const videoData = await videoRes.json();

    // Fetch testimonials data
    const testimonialRes = await fetch(
      testimonyUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const testimonialData = await testimonialRes.json();

    // Fetch updates data
    const updateRes = await fetch(
      updatesUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const update = await updateRes.json();

    // Fetch course details data
    const courseDetailsRes = await fetch(
      courseUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const detailData = await courseDetailsRes.json();

    const kochiSeosRes = await fetch(
      seoUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const kochiSeosDatas = await kochiSeosRes.json();

    return {
      props: {
        videoData,
        testimonialData,
        update,
        detailData,
        kochiSeosDatas,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Error fetching data",
      },
    };
  }
}