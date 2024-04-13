import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const ServiceEleven = ({ isTitle }) => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceEleven.map((data, index) => (
          <div className="container" key={index}>
            {isTitle === undefined ? (
              <div className="row mb--60">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h4 className="rbt-title-style-3">Job role</h4>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="row row--15 mt_dec--30">
              {data.body.map((item, innerIndex) => (
                <div
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={innerIndex}
                >
                  <div className="variation-2">
                    <div
                      className={`rbt-flipbox-wrap rbt-service rbt-service-1 ${
                        item.bgOne
                          ? "card-bg-4"
                          : "" || item.bgTwo
                          ? "card-bg-4"
                          : "" || item.bgThree
                          ? "card-bg-4"
                          : "" || item.bgFour
                          ? "card-bg-4"
                          : ""
                      }`}
                    >
                      <div className="rbt-flipbox-front rbt-flipbox-face inner">
                        <div className="front-thumb w-100">
                          <Image
                            src={item.imgFront}
                            width={490}
                            height={300}
                            alt="card-icon"
                          />
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link href="#">{item.title}</Link>
                          </h6>
                          <ul className="rbt-list-style-3">
                            {item.list.map((listItem, innerIndex) => (
                              <li key={innerIndex}>
                                {/* <i className={listItem.icon}></i>{" "} */}
                                {listItem.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default ServiceEleven;
