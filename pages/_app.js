import React, { useEffect } from "react";

import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";
import "../styles/VideoCarousel.css"
// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
import "../public/css/plugins/euclid-circulara.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========
import { CreateContext } from '../context/Context'; // Import your context
import { useContext } from 'react';
import sal from "sal.js";
import "../public/scss/styles.scss";

export default function App({ Component, pageProps }) {
  const context = useContext(CreateContext);
  console.log("CreateContext:", context); // Log the context object
  // const { college, setCollege } = context;
  // console.log("collegetest4444444444", college)
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    // sal({
    //   threshold: 0.01,
    //   once: true,
    // });
  }, []);
  return(
    <CreateContext.Provider>
      <Component {...pageProps} />
    </CreateContext.Provider>
  );
}

// value={{ college, setCollege }}