import HomePage from "./13-university-classic";
import BackToTop from "./backToTop";
import { useEffect } from "react";
export default function Home({ videoDatas }) {
  const videoData = videoDatas;
  console.log("data", videoData);

  
  return (
    <>
      <main className="">
        {videoData &&  <HomePage videoData={videoData} /> }
   
        <BackToTop />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await fetch(
      "http://139.59.78.49:1337/api/london-college-videos?populate=*",
      {
        headers: {
          Authorization:
            "Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c",
        },
      }
    );
    const videoDatas = await res.json();
    return {
      props: {
        videoDatas,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Error fetching video data",
      },
    };
  }
}
