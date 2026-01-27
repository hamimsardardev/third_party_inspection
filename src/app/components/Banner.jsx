import React from "react";
import Container from "./common/Container";
import ButtonWrapper from "./common/Button";

const Banner = () => {
  return (
    <div>
      <section className=" bg-[url('/banner2.png')] bg-cover bg-center ">
        <div className="bg-black/30 py-[180px]">
          <Container>
            <div className="grid grid-cols-2">
              <div>
                <h1 className="text-white text-[36px] font-bold leading-tight">
                  Trusted Global Quality{" "}
                  <span className="block text-[#FF6600]">
                    Control & Inspection Solutions Provider
                  </span>
                </h1>
                <p className="text-white text-[16px] font-normal leading-tight py-3">
                  As a trusted global quality control and inspection service
                  provider, we offer independent third-party inspection and
                  supplier audit services to ensure product quality, reduce
                  supply chain risk, and meet international standards
                </p>
                <div>
                  <ButtonWrapper />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Banner;
