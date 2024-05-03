import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import TestimonialData from "../../data/elements/testimonial.json";

const TestimonialModified = ({testimonialData}) => {
    const testttt = testimonialData;
    console.log("fffffffffffff", testttt)
  return (
    <>
      {testttt &&
        TestimonialData.testimonialFour.map((data, index) => (
          <div className="container" key={index}>
            <div className="row">
              <div className="col-lg-12 mb--60">
                {/* <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    {data.tag}
                  </span>
                  <h2 className="title">{data.title}</h2>
                </div> */}
              <Head>
    <title>{testttt?.data?.attributes?.seo?.metaTitle}</title>
    <meta name="description" content={testttt?.data?.attributes?.seo?.metaDescription} />
    <meta name="keywords" content={testttt?.data?.attributes?.seo?.keywords} />
    <meta name="robots" content={testttt?.data?.attributes?.seo?.metaRobots} />
    
    <meta property="og:title" content={testttt?.data?.attributes?.seo?.metaSocial[2]?.title} />
    <meta property="og:description" content={testttt?.data?.attributes?.seo?.metaSocial[2]?.metaDescription} />
    <meta property="og:image" content={testttt?.data?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} />
    {/* <meta property="og:url" content={testttt?.data?.attributes?.seo?.canonicalURL} /> */}
    <meta property="og:type" content="website" />
    
    <meta name="twitter:title" content={testttt?.data?.attributes?.seo?.metaSocial[1]?.title} />
    <meta name="twitter:description" content={testttt?.data?.attributes?.seo?.metaSocial[1]?.metaDescription} />
    <meta name="twitter:image" content={testttt?.data?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} />
    <meta name="twitter:card" content="summary_large_image" />
    
    <meta property="instgram:title" content={testttt?.data?.attributes?.seo?.metaSocial[0]?.title} />
    <meta property="instgram:description" content={testttt?.data?.attributes?.seo?.metaSocial[0]?.metaDescription} />
    <meta property="instgram:image" content={testttt?.data?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} /> 
    
    {/* <script type="application/ld+json">{JSON.stringify(testttt?.data?.attributes?.seo?.structuredData)}</script> */}
    
    <meta name="viewport" content={testttt?.data?.attributes?.seo?.metaViewport} />
    
    {/* <link rel="canonical" href={testttt?.data?.attributes?.seo?.canonicalURL} /> */}
</Head>

              </div>
            </div>
            <div className="row g-8" >
              {testttt?.data?.map((item, innerIndex) => (
                <div className="col-lg-4 col-md-6 col-12" style={{marginBottom:"30px"}} key={innerIndex}>
                  <div className="rbt-testimonial-box">
                    <div className="inner">
                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <Image
                            src={item?.attributes?.image?.data?.attributes?.formats?.thumbnail.url}
                            width={494}
                            height={494}
                            alt="Clint Images"
                          />
                        </div>
                        <div className="client-info">
                          <h5 className="title">{item?.attributes?.name}</h5>
                          {/* <span>
                            {item.position} <i>{item.company}</i>
                          </span> */}
                        </div>
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.attributes?.Testimony}</p>
                        <div className="rating mt--20">
  {/* Render star icons dynamically based on the value of data?.attributes?.stars */}
  {Array.from({ length: item?.attributes?.stars }, (_, index) => (
    <Link href="#" key={index}>
      <i className="fa fa-star"></i>
    </Link>
  ))}
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

export default TestimonialModified;
