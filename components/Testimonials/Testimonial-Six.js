import TestimonialData from "../../data/elements/testimonial.json";
import Scroll from "./Testimonial-Scroll/Scroll";

const TestimonialSix = ({ dataset }) => {
  const six = dataset;
  console.log("sixxx",dataset) 
  return (
    <>
      <div className="col-xl-9">
        <div className="overflow-hidden">
          <Scroll
            // testimonial={TestimonialData}
            // testimonialData={TestimonialData.testimonialTwo}
           dataset={dataset}
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialSix;
