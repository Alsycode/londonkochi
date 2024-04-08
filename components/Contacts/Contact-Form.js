import Image from "next/image";
import Link from "next/link";
import img from "../../public/images/about/contact.jpg";
import SectionHead from "../../components/Button/ButtonProps/SectionHead"; // Import the SectionHead component
const ContactForm = ({ gap }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");
  
    try {
      const response = await fetch("/api/apifive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, subject, message }),
      });
  
      if (response.ok) {
        console.log("Email sent successfully!");
  
        // Clear form fields
        e.target.reset();
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
                    EDUCATION FOR EVERYONE
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
                      name="name"
                      id="contact-name"
                      type="text"
                      placeholder="Name"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="phone"
                      type="phone"
                      placeholder="Phone"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Your Subject"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="contact-message"
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
                        <span className="btn-text">Submit</span>
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

export default ContactForm;
