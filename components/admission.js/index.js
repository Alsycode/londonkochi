import Image from "next/image";

import img from "../../public/images/about/contact.jpg";

const Admissionform = ({ gap }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData(e.target);
        const name = formData.get("contact-name");
        const dob = formData.get("dob");
        const phone = formData.get("contact-phone");
        const email = formData.get("email");
        const address = formData.get("address");
        const qualification = formData.get("qualification");
        // const course = formData.get("course");
        const pgDiploma = formData.get("pgDiploma");
        const parentName = formData.get("parentName");
        const parentPhone = formData.get("parentPhone");
        const message = formData.get("message");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
      
        try {
          const response = await fetch("/api/apifour", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, dob, phone, email, address, qualification, pgDiploma, parentName, parentPhone, message }),
          });
      
          if (response.ok) {
            console.log("Email sent successfully!");
            // Optionally, redirect the user or show a success message
          } else {
            console.error("Failed to send email");
            // Handle the failure scenario
          }
        } catch (error) {
          console.error("Error sending email:", error);
          // Handle the error scenario
        }
      };
      
  return (
    <>
      <div className={`rbt-contact-address ${gap}`}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail">
                <Image
                  className="w-100 radius-6"
                  src={img}
                  alt="Contact Images"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    Admission Form
                  </span>
                </div>
                {/* <h3 className="title">
                  Get a Free Course You Can Contact With Me
                </h3> */}
                <form
                  id="contact-form"
                 onSubmit={handleSubmit}
                  className="rainbow-dynamic-form max-width-auto"
                >
                  <div className="form-group">
                    <input
                      name="contact-name"
                      id="contact-name"
                      type="text"
                      placeholder="Name"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="dob"
                      id="dob"
                      type="date"
                      placeholder="Date of Birth"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="contact-phone"
                      type="tel"
                      placeholder="Phone Number"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="parentPhone"
                      id="parent-phone"
                      placeholder="Parent Phone Number"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="qualification"
                      id="qualification"
                      placeholder="Qualification"
                    />
                    <span className="focus-border"></span>
                  </div>
                  {/* <div className="form-group">
                    <input
                      type="text"
                      name="course"
                      id="course"
                      placeholder="Course"
                    />
                    <span className="focus-border"></span>
                  </div> */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="pgDiploma"
                      id="pg-diploma"
                      placeholder="Your course"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="parentName"
                      id="parent-name"
                      placeholder="Parent Name"
                    />
                    <span className="focus-border"></span>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-submit-group">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Apply Now</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissionform;
