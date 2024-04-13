import Image from "next/image";
import Link from "next/link";

const Scroll = ({ testimonial, testimonialData , dataset}) => {
  const data = dataset;

  console.log("data",data);
  return (
    <>
    <div>
    
          <div className="scroll-animation-wrapper mt--50" >
            <div className="scroll-animation scroll-right-left">
              {data.map((item, innerIndex) => (
                <div className="single-column-20" key={innerIndex}>
                  <div className="rbt-testimonial-box">
                    <div className="inner">
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <Image
                            src={item.attributes.image.data.attributes.formats.thumbnail.url}
                            width={494}
                            height={494}
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">{item.attributes.name}</h5>
                   
                        </div>
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.attributes.Testimony}</p>
                        {/* <Link className="rbt-btn-link" href="#">
                          Read Project Case Study
                          <i className="feather-arrow-right"></i>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
 
          <div className="scroll-animation-wrapper mt--30" >
            <div className="scroll-animation scroll-left-right">
              {data.map((item, innerIndex) => (
                <div className="single-column-20" key={innerIndex}>
                  <div className="rbt-testimonial-box">
                    <div className="inner">
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <Image
                            src={item?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}
                            width={494}
                            height={494}
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">{item?.attributes?.name}</h5>
                      
                        </div>
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item?.attributes?.Testimony}</p>
                        {/* <Link className="rbt-btn-link" href="#">
                          Read Project Case Study
                          <i className="feather-arrow-right"></i>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
        </div>
    </>
  );
};

export default Scroll;
