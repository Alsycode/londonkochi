import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import CardData from "../../data/elements/card";

const CardFive = ({update}) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  console.log("%%%%%%%%%%%%%%%%%%%",update)
  return (
    <>
    {update &&
      update?.data?.slice(0, 3).map((data, index) => (
        <div
          className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
          key={index}
        >
          <div className="rbt-card variation-03 rbt-hover">
            <div className="rbt-card-img position-relative">
              {/* Image */}
              <Image
                src={data?.attributes?.Bannerimg1?.data?.attributes?.formats?.small?.url}
                width={355}
                height={244}
                alt="Card image"
              />
              {/* Overlay Button */}
              <div className="position-absolute top-50 start-50 translate-middle">
                <div className="rbt-button-group">
                  <Link className="rbt-moderbt-btn" href={`/updates/${data.id}`}>
                    <span className="moderbt-btn-text">Read More</span>
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rbt-card-body">
              <h6 className="rbt-card-title">
                <Link href={`/updates/${data.id}`}>{data?.attributes?.heading}</Link>
              </h6>
              <div className="rbt-card-bottom">
                <Link className="transparent-button" href={`/updates/${data.id}`}>
                  <i>
                    <svg
                      width="17"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#27374D" fill="none" fillRule="evenodd">
                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                        <path
                          strokeLinecap="square"
                          d="M.663 5.572h14.594"
                        ></path>
                      </g>
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
  </>
  
  );
};

export default CardFive;
