"use client";

import React, { useState } from "react";
import Container from "./common/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import Qutation_form from "./Qutation_form";

const Chooseme = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }
  return (
    <div>
      <section className="py-16 md:py-20">
        <Container>
          <div className="border-t-2 border-gray-300">
            <div className="py-14 md:mb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-primary text-center md:text-left">
                WHY CHOOSE <span className="text-white">PGI</span>?
              </h2>

              <div className="flex justify-center md:justify-end">
                <button
                  onClick={handleQutationOpen}
                  className="group text-base font-semibold relative rounded-full min-h-[50px] w-40 overflow-hidden border-2 border-primary bg-white text-gray-700 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-primary before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-primary after:duration-500 hover:text-primary hover:before:h-full hover:after:h-full cursor-pointer"
                >
                  <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-primary before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-primary after:duration-500 hover:text-gray-700 group-hover:before:h-full group-hover:after:h-full"></span>
                  <span className="absolute text-base bottom-0 left-0 right-0 top-0 z-10 flex h-full  w-full items-center justify-center group-hover:text-white gap-2">
                    Get Quotation
                    <FaArrowRightLong />
                  </span>
                </button>
                <Qutation_form
                  isOpen={getQuotation}
                  onClose={handleQutationClose}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
              <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
                    5
                  </h2>
                  <span className="absolute text-[16px] md:text-[14px] font-normal text-primary right-[35px] bottom-[42px]">
                    {" "}
                    minutes
                  </span>
                  <p className="text-white text-base leading-relaxed">
                    5 minutes instant online order
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
                    $219
                  </h2>
                  <span className="absolute text-[16px] md:text-[14px] font-normal text-primary right-[40px] bottom-[43px]">
                    {" "}
                    MD
                  </span>
                  <p className="text-white text-base leading-relaxed">
                    $219/MD for Inspection in Bangladesh & South Asia
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
                    24
                  </h2>
                  <span className="absolute text-[16px] md:text-[14px] font-normal text-primary right-[60px] bottom-[70px]">
                    {" "}
                    hours
                  </span>
                  <p className="text-white text-base leading-relaxed">
                    24 hours to schedule order and get report
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-primary mb-4">
                    50+
                  </h2>
                  <span className="absolute text-[16px] md:text-[14px] font-normal text-primary right-[60px] bottom-[95px]">
                    {" "}
                    QC
                  </span>
                  <p className="text-white text-base leading-relaxed">
                    50+ full-time senior inspectors in Bangladesh and Southeast
                    Asian countries, as well as Europe countries
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Chooseme;
