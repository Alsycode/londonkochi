import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import img from "../../public/images/bg/videobg.jpg";

const Video = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  const youtubeID = "0wW2G9G0lRs"; // Replace with your actual video ID

  const embedUrl = `https://www.youtube.com/embed/${youtubeID}?autoplay=0`;
  return (
    <>
      <div className="rbt-video-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-popup-wrapper">
                <Image
                  className="w-100 rbt-radius"
                  src={img}
                  alt="Video Images"
                />
                <Link
                  className="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-theme-color"
                  data-vbtype="video"
                  controls
                  href={embedUrl}
                >
                  <span className="play-icon"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
