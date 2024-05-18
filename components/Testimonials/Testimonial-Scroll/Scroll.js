import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Scroll = ({ testimonial, testimonialData , dataset}) => {
  const data = dataset;

  console.log("data",data);
  return (
    <>
    <div>
    
          <div className="scroll-animation-wrapper mt--50" >
            <div className="scroll-animation scroll-right-left">
              {data?.map((item, innerIndex) => (

                <div className="single-column-20" key={innerIndex}>
                  <Head>
  <title>{item?.data?.attributes?.seo?.metaTitle}</title>
  <meta name="description" content={item?.data?.attributes?.seo?.metaDescription} />
  <meta name="keywords" content={item?.data?.attributes?.seo?.keywords} />
  <meta name="robots" content={item?.data?.attributes?.seo?.metaRobots} />
  
  <meta property="og:title" content={item?.data?.attributes?.seo?.metaSocial[2]?.title} />
  <meta property="og:description" content={item?.data?.attributes?.seo?.metaSocial[2]?.metaDescription} />
  <meta property="og:image" content={item?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.small?.url} />
  {/* <meta property="og:url" content={item?.data?.attributes?.seo?.canonicalURL} /> */}
  <meta property="og:type" content="website" />
  
  <meta name="twitter:title" content={item?.data?.attributes?.seo?.metaSocial[1]?.title} />
  <meta name="twitter:description" content={item?.data?.attributes?.seo?.metaSocial[1]?.metaDescription} />
  <meta name="twitter:image" content={item?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.small?.url} />
  <meta name="twitter:card" content="summary_large_image" />
  
  <meta property="instgram:title" content={item?.data?.attributes?.seo?.metaSocial[0]?.title} />
  <meta property="instgram:description" content={item?.data?.attributes?.seo?.metaSocial[0]?.metaDescription} />
  <meta property="instgram:image" content={item?.data?.attributes?.seo?.metaImage?.data?.attributes?.formats?.small?.url} /> 
  
  {/* <script type="application/ld+json">{JSON.stringify(item?.data?.attributes?.seo?.structuredData)}</script> */}
  
  <meta name="viewport" content={item?.data?.attributes?.seo?.metaViewport} />
  
  {/* <link rel="canonical" href={item?.data?.attributes?.seo?.canonicalURL} /> */}
</Head>

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
      
 
          <div className="scroll-animation-wrapper mt--30" >
            <div className="scroll-animation scroll-left-right">
              {data?.map((item, innerIndex) => (
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
