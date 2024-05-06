import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const CourseMenu = () => {
  const [currentSection, setCurrentSection] = useState("overview");

  const sections = [
    { id: "about-course", label: "About course" },
    { id: "delivery-and-benefit", label: "Delivery & Benefit" },
    { id: "about-industry", label: "About Industry" },
    { id: "certificates-and-affiliates", label: "Certificates & Affiliates" },
    { id: "recruitment", label: "Recruitment" },
    { id: "job-role", label: "Job role" },
  ];
  
  useEffect(() => {
  const sectionIds = [
    "about-course",
    "delivery-and-benefit",
    "about-industry",
    "certificates-and-affiliates",
    "recruitment",
    "job-role",
 ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      // console.log("Scroll position:", scrollPosition);
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element) {
          // console.log(`Section ${sectionId} offsetTop:`, element.offsetTop);
          if (scrollPosition >= element.offsetTop) {
            setCurrentSection(sectionId);
            // console.log("Current section:", sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  return (
    <>
      <nav className="mainmenu-nav onepagenav">
        <ul className="mainmenu">
          {sections.map((sec, i) => (
            <li className={currentSection === sec.id ? "current" : ""} key={i}>
              <ScrollLink
                to={sec.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-90}
                style={{ cursor: "pointer" }}
              >
                {sec.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default CourseMenu;
