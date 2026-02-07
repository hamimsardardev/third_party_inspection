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

            <div className="w-auto lg:w-[770px] mx-auto text-white text-[16px] md:text-xl leading-relaxed space-y-3 lg:space-y-6 text-center md:text-left">
              <p className="text-center">
                GTPI is a leading 3rd party inspection company in China, which
                is fully accredited by ISO9001, ISO 27001, CNAS17020 and AQSIQ.
                We provide a comprehensive QC service such as product inspection
                service（IPC, DUPRO and FRI), loading supervision, sample
                picking, supplier audit, certification, and testing.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Whatwedo;
