import React from "react";
import Container from "./common/Container";

const Whatwedo = () => {
  return (
    <div>
      <section>
        <Container>
          <div className="p-8 md:p-12 lg:p-16 backdrop-blur-md shadow-md rounded-xl ">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-10 tracking-wide">
              What We Do
            </h1>

            <div className="w-auto lg:w-[950px] mx-auto text-white text-[14px] lg:text-[18px] leading-relaxed space-y-3 lg:space-y-6 text-center md:text-left">
              <p className="text-center">
                Prime Guard Inspection International (PGI INT'I) is an independent quality control and inspection service provider based in Bangladesh, supporting global clients with professional inspection, auditing, and quality assurance solutions. We are committed to reliability, transparency, and precision, ensuring that every shipment, production line, and facility meets required quality expectations and international standards. Our inspections are performed by experienced professionals who deliver detailed reports, high-resolution visuals, and real-time updates from the field. Global coverage – Local expertise Comprehensive inspection & audit services Clear reports, fast delivery, trusted results Trust PGI INT'L to be your eyes on the ground.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Whatwedo;
