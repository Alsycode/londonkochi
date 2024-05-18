import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import { useEffect, useState } from "react";

import BlogData from "../../data/blog/blog.json";
import BlogGridTop from "./Blog-Sections/BlogGrid-Top";
import Pagination from "../Common/Pagination";

const BlogGrid = ({ isPagination, top, start, end, updateData }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
console.log("blogData",updateData)
  const startIndex = (page - 1) * 10;
  const selectedGridBlogs = updateData?.data?.slice(startIndex, startIndex + 10);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setBlogs(updateData?.data);
    setTotalPages(Math.ceil(updateData?.data?.length / 10));
  }, [setTotalPages, setBlogs]);
  console.log("%%%%%%%%%%%%%%",selectedGridBlogs)
  const metasoc = selectedGridBlogs[0]?.attributes?.seo.metaSocial[0].title;
   console.log("))))))))))))))))",metasoc)
  return (
    <>
      {top ? (
        <BlogGridTop
        updateData={updateData}
          BlogData={BlogData}
          selectedGridBlogs={selectedGridBlogs}
        />
      ) : (
        ""
      )}

      <div className="row g-5 mt--15">
        {selectedGridBlogs &&
          selectedGridBlogs?.slice(start, end).map((data, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
              <div className="rbt-card variation-02 rbt-hover" >
                <div className="rbt-card-img">
                  <Link href={`/londoncollege-mumbai/updates/${data.id}`}>
                    <Image
                      src={data?.attributes?.Bannerimg1?.data?.attributes?.formats?.small?.url}
                      width={450}
                      height={267}
                      priority
                      alt="Card image"
                    />{" "}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title">
                    <Link href={`/londoncollege-mumbai/updates/${data.id}`}>{data?.attributes?.heading}</Link>
                  </h5>
                  <p className="rbt-card-text">{data?.desc}</p>
                  <Head>
                  <title>{data?.seo?.metaTitle}</title>
    <meta name="description" content={data?.seo?.metaDescription} />
    <meta name="keywords" content={data?.seo?.keywords} />
    <meta name="robots" content={data?.seo?.metaRobots} />
    
    
    <meta property="og:title" content={data?.attributes?.seo?.metaSocial[2]?.title} />
    <meta property="og:description" content={data.attributes?.seo?.metaSocial[2]?.metaDescription} />
    <meta property="og:image" content={data?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} />
    {/* <meta property="og:url" content={data.seo.canonicalURL} /> */}
    <meta property="og:type" content="website" />
    

    <meta name="twitter:title" content={data?.attributes?.seo?.metaSocial[1]?.title} />
    <meta name="twitter:description" content={data.attributes?.seo?.metaSocial[1]?.metaDescription} />
    <meta name="twitter:image" content={data?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} />
    <meta name="twitter:card" content="summary_large_image" />
    
     <meta property="instgram:title" content={data?.attributes?.seo?.metaSocial[0]?.title} />
    <meta property="instgram:description" content={data.attributes?.seo?.metaSocial[0]?.metaDescription} />
    <meta property="instgram:image" content={data?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} /> 
    
    {/* <script type="application/ld+json">{JSON.stringify(data.seo.structuredData)}</script> */}
    
   
    <meta name="viewport" content={data.seo?.metaViewport} />
    
{/*   
    <link rel="canonical" href={data.seo.canonicalURL} /> */}
</Head>
                  <div className="rbt-card-bottom">
                    <Link
                      className="transparent-button"
                      href={`/londoncollege-mumbai/updates/${data.id}`}
                    >
                      Learn More
                      <i>
                        {" "}
                        <svg
                          width="17"
                          height="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path
                              strokeLinecap="square"
                              d="M.663 5.572h14.594"
                            />
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {isPagination ? (
        <div className="row">
          <div className="col-lg-12 mt--60">
            <Pagination
              totalPages={totalPages}
              pageNumber={page}
              handleClick={handleClick}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BlogGrid;
