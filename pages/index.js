import HomePage from "./13-university-classic";
import BackToTop from "./backToTop";
import { useEffect } from "react";
 export default function Home({ videoDatas, testimonialDatas, updateDatas, courseDetailsDatas, kochiSeosDatas}) {
  const videoData = videoDatas;
  const testimonialData = testimonialDatas;
  console.log("dataset", testimonialData);
  const update = updateDatas;
  const detailData = courseDetailsDatas;
  console.log("update22222222222222222",kochiSeosDatas)

  return ( 
    <>
      <main className="">
      <HomePage videoData={videoData} detailData={detailData} kochiSeosDatas={kochiSeosDatas} testimonialData={testimonialData} update={update} />

   
        <BackToTop />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const token = process.env.STRAPI_API_TOKEN;
  const videoUrl = process.env.LONDONKOCHI_VIDEO;
  const testimonyUrl = process.env.LONDONKOCHI_TESTIMONY;
  const seoUrl = process.env.LONDONKOCHI_SEOS;
  const updatesUrl = process.env.LONDONKOCHI_UPDATES;
  const courseUrl = process.env.LONDONKOCHI_COURSE
  try {
    // Fetch video data
    const videoRes = await fetch(
      videoUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const videoDatas = await videoRes.json();

    // Fetch testimonials data
    const testimonialRes = await fetch(
      testimonyUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const testimonialDatas = await testimonialRes.json();

    // Fetch updates data
    const updateRes = await fetch(
      updatesUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const updateDatas = await updateRes.json();

    // Fetch course details data
    const courseDetailsRes = await fetch(
      courseUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const courseDetailsDatas = await courseDetailsRes.json();

    const kochiSeosRes = await fetch(
      seoUrl,
      {
        headers: {
          Authorization:
          `Bearer ${token}`,
        },
      }
    );
    const kochiSeosDatas = await kochiSeosRes.json();

    return {
      props: {
        videoDatas,
        testimonialDatas,
        updateDatas,
        courseDetailsDatas,
        kochiSeosDatas,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Error fetching data",
      },
    };
  }
}

