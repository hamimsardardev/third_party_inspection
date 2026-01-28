import React from "react";
import Container from "./common/Container";
import { FaArrowRightLong } from "react-icons/fa6";

const Chooseme = () => {
  return (
    <div>
      <section className="py-16 md:py-20">
        <Container>
          <div>
            <div className="mb-14 md:mb-16 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4.5xl font-bold text-primary text-center md:text-left">
                WHY CHOOSE <span className="text-third">PRIME GUARD</span>?
              </h2>

              <div className="flex justify-center md:justify-end">
                {/* <button
                  type="button"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-third hover:bg-third/50 text-white font-semibold text-base md:text-lg rounded-full shadow-lg transition-all duration-300 transform "
                >
                  Get Quotation
                  
                </button> */}
                <button class="group text-base font-semibold relative rounded-full min-h-[50px] w-40 overflow-hidden border-2 border-third bg-white text-third shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-third before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-third after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                  <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-third before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-third after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                  <span class="absolute text-base bottom-0 left-0 right-0 top-0 z-10 flex h-full  w-full items-center justify-center group-hover:text-white  gap-2">
                    Get Quotation
                    <FaArrowRightLong />
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
              <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-[#FF6200] mb-4">
                    5
                  </h2>
                  <span className="absolute text-[16px] md:text-[14px] font-normal text-third right-[40px] bottom-[40px]">
                    {" "}
                    minutes
                  </span>
                  <p className="text-primary text-base leading-relaxed">
                    5 minutes instant online order
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-[#FF6200] mb-4">
                    $249
                  </h2>
                  <span className="absolute text-[16px] md:text-[14px] font-normal text-third right-[30px] bottom-[70px]">
                    {" "}
                    MD
                  </span>
                  <p className="text-primary text-base leading-relaxed">
                    $249/MD for Inspection everywhere in China
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-[#FF6200] mb-4">
                    24
                  </h2>
                  <span className="absolute text-[16px] md:text-[14px] font-normal text-third right-[45px] bottom-[70px]">
                    {" "}
                    hours
                  </span>
                  <p className="text-primary text-base leading-relaxed">
                    24 hours to schedule order and get report
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center px-4 py-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors duration-300 hover:shadow-md">
                <div className="relative">
                  <h2 className="text-5xl md:text-6xl font-extrabold text-[#FF6200] mb-4">
                    400+
                  </h2>
                  <span className="absolute text-[16px] md:text-[14px] font-normal text-third right-[30px] bottom-[120px]">
                    {" "}
                    QC
                  </span>
                  <p className="text-primary text-base leading-relaxed">
                    400+ full-time senior inspectors in China and Southeast
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
