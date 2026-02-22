"use client";
import React from "react";
import Container from "./common/Container";
import ButtonWrapper from "./common/Button";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div>
      <section className="bg-[url('/banner2.png')] bg-cover bg-center">
        <div className="bg-black/70 flex items-center">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 py-sm-4 py-[80px] md:py-[120px] lg:py-[220px] items-center">
              <div>
                <h1 className="text-primary text-[26px] md:text-[36px] font-bold leading-tight">
                  <span className="block text-primary">
                    <TypeAnimation
                      sequence={[
                        "Prime Guard Inspection International ",
                        2000,
                        "",
                      ]}
                      wrapper="span"
                      speed={50}
                      deletionSpeed={30}
                      style={{ display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </span>
                </h1>

                <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed py-4">
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
