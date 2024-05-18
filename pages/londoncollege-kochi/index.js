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
  try {
    // Fetch video data
    const videoRes = await fetch(
      "https://godigitalhub.org/api/london-college-videos?populate[0]=seo&populate[1]=seo.metaSocial&populate[2]=seo.metaImage&populate[3]=videoimage&populate[4]=Video",
      {
        headers: {
          Authorization:
            "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c",
        },
      }
    );
    const videoData = await videoRes.json();

    // Fetch testimonials data
    const testimonialRes = await fetch(
      "https://godigitalhub.org/api/london-college-testimonials?populate[0]=seo&populate[1]=seo.metaSocial&populate[2]=seo.metaImage&populate[3]=image",
      {
        headers: {
          Authorization:
            "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c",
        },
      }
    );
    const testimonialData = await testimonialRes.json();

    // Fetch updates data
    const updateRes = await fetch(
      "https://godigitalhub.org/api/london-collegeupdates?populate[0]=seo&populate[1]=seo.metaSocial&populate[2]=Bannerimg1&populate[3]=smallimage1&populate[4]=smallimage2&populate[5]=smallimage3&populate[6]=blockquote&populate[7]=para&populate[8]=tags&populate[9]=seo.metaImage",
      {
        headers: {
          Authorization:
            "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c",
        },
      }
    );
    const update = await updateRes.json();

    // Fetch course details data
    const courseDetailsRes = await fetch(
      "https://godigitalhub.org/api/coursedetails?populate[0]=seo&populate[1]=seo.metaSocial&populate[2]=seo.metaImage&populate[3]=tags&populate[4]=courseimage&populate[5]=recruiters&populate[6]=jobrole&populate[7]=courseVideo&populate[8]=jobrole.roles&populate[9]=jobrole.roleimage",
      {
        headers: {
          Authorization:
            "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c",
        },
      }
    );
    const detailData = await courseDetailsRes.json();

    const kochiSeosRes = await fetch(
      "https://godigitalhub.org/api/london-colleg-kochiseos",
      {
        headers: {
          Authorization:
            "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c",
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