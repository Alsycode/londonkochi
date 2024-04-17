import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const CourseMenu = () => {
  const [currentSection, setCurrentSection] = useState("overview");

  const sections = [
    {id: "About course", label: "About course" },
    {id: "Delivery & Benefit", label: "Delivery & Benefit "},
    {id: "About Industry", label: "About Industry"},
    {id: "Certificates & Affiliates", label: "Certificates & Affiliates" },
    {id: "Recruitment", label: "Recruitment"},
    {id: "Job role",label: "Job role"},
    ]

  useEffect(() => {
    const sectionIds = [
       "About course",
       "Delivery & Benefit",
       "About Industry",
       "Certificates & Affiliates",
       "Recruitment",
       "Job role",
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
