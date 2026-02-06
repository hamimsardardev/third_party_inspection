"use client";
import React from "react";
import Container from "./common/Container";
import Image from "next/image";

const Productinspection_part = () => {
  return (
    <div>
      <section className="bg-[url('/productinspectionbanner.png')] bg-cover bg-center">
        <Container>
          <div className="py-[220px]">
            <h2 className="text-[36px] text-primary font-semibold leading-[24px]">
              Product Quality Control Inspection
            </h2>
            <div className="mt-12">
              <button className="relative h-[50px] w-40 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:shadow-primary hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Get a Sample Report</span>
              </button>
            </div>
          </div>
        </Container>
      </section>
      {/* ------------------------------------------------------- */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex justify-between items-center">
            <div className="w-[80%]">
              <h3 className="text-primary text-[24px] leading-[24px] font-medium">
                Product Quality Control Inspection
              </h3>
              <p className="text-white mt-5 text-[18px] leading-[18px] font-normal w-[720px]">
                GIS conducts comprehensive product inspection, industrial
                product inspection, full inspection and loading supervision. GIS
                product quality inspection services ensure product quality
                throughout your entire consumer goods and industrial products
                supply chain with our unrivaled experience in managing all types
                of inspection program. Independent inspections of your products,
                at various stages of the product’s life cycle, will ensure that
                the quality of your mass production will match that of samples
                tested and will help you to identify critical defects before
                products hit the market.
              </p>
            </div>
            <div className="w-[20%]"></div>
          </div>
         

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image
                  src="/productinspectionbanner.png"
                  alt="Product Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                r
                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Product Inspection
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image
                  src="/productinspectionbanner.png"
                  alt="Industrial Product Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Industrial Product Inspection
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image
                  src="/productinspectionbanner.png"
                  alt="Full Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Full Inspection
                </div>
              </div>
            </div>

            {/* Card 4 - Loading Supervision */}
            <div className="group bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <Image
                  src="/productinspectionbanner.png"
                  alt="Loading Supervision"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Loading Supervision
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Productinspection_part;
