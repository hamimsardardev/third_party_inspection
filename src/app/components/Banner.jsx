import React from "react";
import Container from "./common/Container";
import ButtonWrapper from "./common/Button";

const Banner = () => {
  return (
    <div>
      <section className="bg-[url('/banner2.png')] bg-cover bg-center">
        <div className="bg-black/40 min-h-[70vh] md:min-h-[80vh] flex items-center">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div>
                <h1 className="text-white text-[26px] md:text-[36px] font-bold leading-tight">
                  Trusted Global Quality
                  <span className="block text-third">
                    Control & Inspection Solutions Provider
                  </span>
                </h1>

                <p className="text-white text-[14px] md:text-[16px] font-normal leading-relaxed py-4">
                  As a trusted global quality control and inspection service
                  provider, we offer independent third-party inspection and
                  supplier audit services to ensure product quality, reduce
                  supply chain risk, and meet international standards
                </p>

                <ButtonWrapper />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Banner;
