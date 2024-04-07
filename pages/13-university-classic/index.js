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

const UniversityPage = ({videoData}) => {

 
  return (
    <>
      <PageHead title="London College- No.1 Logistics School" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleFour headerType="" />
          <UniversityClassic videoData={videoData}/>
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
