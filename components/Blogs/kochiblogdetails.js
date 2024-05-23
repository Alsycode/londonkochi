import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import BlogAuthor from "./Blog-Sections/Blog-Author";
import ComntForm from "./Blog-Sections/ComntForm";
import Comment from "./Blog-Sections/Comment";

const BlogDetails = ({ matchedBlog,updateData }) => {
  console.log("%%%%%%%%%%%%%%%%%%",matchedBlog)
  console.log("-----------------",updateData)
  const relatedupdates = updateData?.data?.filter((item) => item?.id !== matchedBlog?.id);
 console.log("relatedupdates",relatedupdates)
 const seoco = matchedBlog?.attributes?.seo;
console.log("seoco11111111111",matchedBlog)
  return (
    <>
      <div className="content">
        <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
          <figure>
            {matchedBlog && (
              <Image
                src={matchedBlog?.attributes?.Bannerimg1?.data?.attributes?.formats?.small?.url}
                width={1085}
                height={645}
                priority
                alt="Blog Images"
              />
            )}
             <figcaption>{matchedBlog?.caption}</figcaption> 
          </figure>
          <Head>
    <title>{matchedBlog?.attributes?.seo?.metaTitle}</title>
    <meta name="description" content={matchedBlog?.attributes?.seo?.metaDescription} />
    <meta name="keywords" content={matchedBlog?.attributes?.seo?.keywords} />
    <meta name="robots" content={matchedBlog?.attributes?.seo?.metaRobots} />
    
    <meta property="og:title" content={matchedBlog?.attributes?.seo?.metaSocial[2]?.title} />
    <meta property="og:description" content={matchedBlog?.attributes?.seo?.metaSocial[2]?.metaDescription} />
    <meta property="og:image" content={matchedBlog?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} />
    <meta property="og:url" content={matchedBlog?.attributes?.seo.canonicalURL} />
    <meta property="og:type" content="website" />
    
    <meta name="twitter:title" content={matchedBlog?.attributes?.seo?.metaSocial[1]?.title} />
    <meta name="twitter:description" content={matchedBlog?.attributes?.seo?.metaSocial[1]?.metaDescription} />
    <meta name="twitter:image" content={matchedBlog?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} />
    <meta name="twitter:card" content="summary_large_image" />
    
    <meta property="instgram:title" content={matchedBlog?.attributes?.seo?.metaSocial[0]?.title} />
    <meta property="instgram:description" content={matchedBlog?.attributes?.seo?.metaSocial[0]?.metaDescription} />
    <meta property="instgram:image" content={matchedBlog?.attributes?.seo?.metaImage?.data?.attaributes?.formats?.small?.url} /> 
    
    <script type="application/ld+json">{JSON.stringify(matchedBlog?.attributes?.seo?.structuredData)}</script>
    
    <meta name="viewport" content={matchedBlog?.attributes?.seo?.metaViewport} />
    
    {/* <link rel="canonical" href={matchedBlog?.attributes?.seo?.canonicalURL} /> */}
</Head>
        </div>
        {matchedBlog?.attributes?.para ? (
         <p>{matchedBlog?.attributes?.para[0]?.text}</p> ) : null }

         <blockquote className="wp-block-quote">
          <p>{matchedBlog.attributes?.blockquote?.quote}</p>
          {/* <cite>
            <Link href="https://themeforest.net/user/rainbow-themes/portfolio">
              {matchedBlog.city}
            </Link>
          </cite> */}
        </blockquote> 

        {/* <div className="wp-block-gallery columns-3 is-cropped">
          <ul className="blocks-gallery-grid">
            {matchedBlog &&
              matchedBlog?.gallery?.map((item, innerIndex) => (
                <li className="blocks-gallery-item" key={innerIndex}>
                  <figure>
                    {item?.galleryImg && (
                      <Image
                        className="radius-4"
                        src={item.galleryImg}
                        width={255}
                        height={143}
                        priority
                        alt="Blog Images"
                      />
                    )}
                  </figure>
                </li>
              ))}
          </ul>
        </div> */}
                  {matchedBlog?.attributes?.para ? (
         <h4>{matchedBlog?.attributes?.para[1]?.heading}</h4>) : null}

        <p>
          <Link href="#">{matchedBlog?.linkOne}</Link> {matchedBlog.descTwo}
        </p>

        {matchedBlog?.attributes?.para ? (
    <p>{matchedBlog?.attributes?.para[0]?.text}</p>
  ) : null}

{matchedBlog?.attributes?.para ? (
    <p>{matchedBlog?.attributes?.para[2]?.text}</p>
  ) : null}

        {/* <p>
          <Link href="#">{matchedBlog?.linkTwo}</Link> {matchedBlog.descSaven}
        </p>  */}
{matchedBlog?.attributes?.Bannerimage2?.data?.attributes?.formats?.large?.url ? (
   <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
   <figure>
     {matchedBlog && (
       <Image
         src={matchedBlog?.attributes?.Bannerimage2?.data?.attributes?.formats?.large?.url}
         width={1085}
         height={645}
         priority
         alt="Blog Images"
       />
     )}

     {/* <figcaption>{matchedBlog?.caption}</figcaption> */}
   </figure>
 </div> 
) : null}
       

        {/* <p>{matchedBlog?.descFive}</p>
        <h4>{matchedBlog?.titleTwo}</h4> */}

        {/* <p>
          {matchedBlog?.descSix}
          <Link href="#">{matchedBlog?.linkThree}</Link>.
        </p>

        <p>
          <Link href="#">{matchedBlog?.linkTwo}</Link> {matchedBlog.descFive}
        </p> */}

<div className="tagcloud">
  {matchedBlog?.attributes?.tags?.map((item, index) => (
    <Link key={index} href="/londoncollege-kochi/relatedUpdates/[item.tagtext]" as={`/londoncollege-kochi/relatedUpdates/${encodeURIComponent(item.tagtext)}`}>
      {item.tagtext}
    </Link>
  ))}
  </div>

        {/* <div className="social-share-block">
          <div className="post-like">
            <Link href="#">
              <i className="feather feather-thumbs-up"></i>
              <span>2.2k Like</span>
            </Link>
          </div>
          <ul className="social-icon social-default transparent-with-border">
            {matchedBlog &&
              matchedBlog.social.map((socialItem, innerIndex) => (
                <li key={innerIndex}>
                  <Link href={socialItem.url}>
                    <i className={socialItem.icon}></i>
                  </Link>
                </li>
              ))}
          </ul>
        </div> */}

        {/* <div className="about-author">
          {matchedBlog &&
            matchedBlog.author.map((author, innerIndex) => (
              <BlogAuthor {...author} author={author} key={innerIndex} />
            ))}
        </div> */}

        {/* <div className="rbt-comment-area">
          <div className="rbt-total-comment-post">
            <div className="title">
              <h4 className="mb--0">30+ Comments</h4>
            </div>
            <div className="add-comment-button">
              <a
                className="rbt-btn btn-gradient icon-hover radius-round btn-md"
                href="#"
              >
                <span className="btn-text">Add Your Comment</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
          <ComntForm />
        </div> */}
        {/* <div className="rbt-comment-area">
          <h4 className="title">2 comments</h4>
          <ul className="comment-list">
            {matchedBlog &&
              matchedBlog.comment.map((comnt, innerIndex) => (
                <Comment {...comnt} comnt={comnt} key={innerIndex} />
              ))}
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default BlogDetails;
