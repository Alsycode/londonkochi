import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import Mumbaicontact from "@/components/Contacts/contactmumbai";
import ContactForm from "@/components/Contacts/Contact-Form";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Four";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";
import Headerstylemumbai from "../../components/Header/headerstylemumbia";
import Footermumbai from "../../components/Footer/footermumbai"
const ContactPage = () => {
  return (
    <>
      <PageHead title="Contact - Online Courses & Education NEXTJS14 Template" />

      <Provider store={Store}>
        <Context>
          {/* <HeaderStyleTen headerSticky="rbt-sticky" headerType="" /> */}
          <Headerstylemumbai headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />

          <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--60">
                    <span className="subtitle bg-secondary-opacity">
                      Contact Us
                    </span>
                    <h2 className="title">
                     Join us <br /> 
                    </h2>
                  </div>
                </div>
              </div>
              <Mumbaicontact />
            </div>
          </div>

          <ContactForm />

          <div className="rbt-google-map bg-color-white rbt-section-gapTop">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7909325.042834895!2d69.389294271297!3d14.54341558229313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1f84aaeefad%3A0xef0eef9ee1e8f5d1!2sLondon%20College%20Mumbai!5e0!3m2!1sen!2sin!4v1715229855471!5m2!1sen!2sin"
              height="600"
              style={{ border: "0" }}
            ></iframe>
          </div>

          <Footermumbai />
        </Context>
      </Provider>
    </>
  );
};

export default ContactPage;
