import TestimonialData from "../../data/elements/testimonial.json";
import Scroll from "./Testimonial-Scroll/Scroll";

const TestimonialSix = ({ testimonial }) => {
  const six = testimonial;
  console.log("sixxx",six) 
  return (
    <>
      <div className="col-xl-9">
        <div className="overflow-hidden">
          <Scroll
            // testimonial={TestimonialData}
            // testimonialData={TestimonialData.testimonialTwo}
            testimonial={testimonial ? testimonial : null}
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialSix;
