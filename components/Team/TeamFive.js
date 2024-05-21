import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import Img from "../../public/images/team/logodesign.png"
import TeamHead from "./TeamHead";
import { useAppContext } from "@/context/Context";
import TeamData from "../../data/elements/team.json";

const TeamFive = () => {
  // const { setCollege, college } = useAppContext();
  // console("collegesatte222222222222222222222", college)
  const handleRedirect = (location) => {
    if (location === 'mumbai') {
      window.location.href = 'https://mumbai.londoncollege.in';
    } else if (location === 'kochi') {
      window.location.href = 'https://kochi.londoncollege.in';
    }
  };
  return (
    <>
      <div className="container">
        <TeamHead title="Team (Card Box)." desc="Card Box Style." />
        <div className="row row-- mt_dec--30">
      
              <div className="col-lg-4 col-md-6 col-12 mt--30" >
             
                  <div
                    className="rbt-team team-style-default style-two rbt-hover"
                    
                  >
                  
                    {/* <Link href={`/londoncollege-kochi`} passHref> */}
                     
                        <div className="inner" style={{ height: "400px" }}  onClick={() => handleRedirect('kochi')}>
                          <div className="thumbnail">
                            <Image
                              src={Img}
                              width={415}
                              height={555}
                              priority
                              alt="Corporate Template"
                            />
                          </div>
                          <div className="content">
                            <h2 className="title">London College Kochi Campus</h2>
                            {/* <ul className="social-icon social-default icon-naked mt--20">
                              <li>
                                <Link href="https://www.facebook.com/">
                                  <i className="feather-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.twitter.com">
                                  <i className="feather-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.instagram.com/">
                                  <i className="feather-instagram"></i>
                                </Link>
                              </li>
                            </ul> */}
                          </div>
                        </div>
                      
                    {/* </Link> */}
                  </div>
                  
     

              </div>
              <div className="col-lg-4 col-md-6 col-12 mt--30" >
          
                  <div
                    className="rbt-team team-style-default style-two rbt-hover"
                   
                  >
                  
                    {/* <Link href={`/londoncollege-mumbai`} passHref> */}
                     
                        <div className="inner" style={{ height: "400px" }}  onClick={() => handleRedirect('mumbai')}>
                          <div className="thumbnail">
                            <Image
                              src={Img}
                              width={415}
                              height={555}
                              priority
                              alt="Corporate Template"
                            />
                          </div>
                          <div className="content">
                            <h2 className="title">London College Mumbai Campus</h2>
                            {/* <ul className="social-icon social-default icon-naked mt--20">
                              <li>
                                <Link href="https://www.facebook.com/">
                                  <i className="feather-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.twitter.com">
                                  <i className="feather-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.instagram.com/">
                                  <i className="feather-instagram"></i>
                                </Link>
                              </li>
                            </ul> */}
                          </div>
                        </div>
                      
                    {/* </Link> */}
                  </div>
                  
      

              </div>
              <div className="col-lg-4 col-md-6 col-12 mt--30" >
            
                  <div
                    className="rbt-team team-style-default style-two rbt-hover"

                  >
                  
                    {/* <Link href="#" passHref> */}
                     
                        <div className="inner" style={{ height: "400px" }}>
                          <div className="thumbnail">
                            <Image
                              src={Img}
                              width={415}
                              height={555}
                              priority
                              alt="Corporate Template"
                            />
                          </div>
                          <div className="content">
                            <h2 className="title">London College Chennai Campus</h2>
                            {/* <ul className="social-icon social-default icon-naked mt--20">
                              <li>
                                <Link href="https://www.facebook.com/">
                                  <i className="feather-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.twitter.com">
                                  <i className="feather-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.instagram.com/">
                                  <i className="feather-instagram"></i>
                                </Link>
                              </li>
                            </ul> */}
                          </div>
                        </div>
                      
                    {/* </Link> */}
                  </div>
                  


              </div>
           
          
        </div>
      </div>
    </>
  );
};

export default TeamFive;
