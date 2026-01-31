import React from "react";
import Container from "./common/Container";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
const Service = () => {
  return (
    <div>
      <section>
        <Container>
          <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
            <div>
              {/* Header */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  <span className="text-third">OUR SERVICE</span>
                </h2>
                <div className="w-20 h-1 bg-third mx-auto mt-4 rounded-full"></div>
              </div>

              {/* Services Grid - explicit cards, no map */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Card 1 - Product Quality Control Inspection */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden bg-red-500">
                    <div className="relative h-48 md:h-56 w-full overflow-hidden bg-red-500">
                      <Image
                        src="/serviceimageone.jpg"
                        alt="Product image four"
                        fill
                        className=" object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-[24px] md:text-2xl font-bold text-primary mb-4 group-hover:text-third transition-colors">
                      Product Quality Control Inspection
                    </h3>
                    <ul className="space-y-2 text-primarytext-sm md:text-base flex-grow">
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        <span>Product Inspection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Industrial Product Inspection
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Full Inspection
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Loading Supervision
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Diagnosis & Optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Damage Investigation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Design, Making And Verification For Gauge
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Process Audit
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Social Responsibility Audit
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Product Audit
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 2 - Supplier Management */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src="/serviceimagetwo.jpg"
                      alt="serviceimagetwo.jpg"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className=" top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-primary shadow-sm">
                      FACTORY EVALUATION
                    </div>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-[24px] md:text-2xl font-bold text-primary mb-4 group-hover:text-third transition-colors">
                      Supplier Management & Development
                    </h3>
                    <ul className="space-y-2 text-primary text-sm md:text-base flex-grow">
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Factory Audit
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Supplier Audit
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Management Consulting
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Diagnosis & Optimization For Management System
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Project Quality Management
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Quality Engineering Consulting
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Social Responsibility Consulting
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 3 - Government Procurement */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src="/serviceimagethree.jpg"
                      alt="serviceimagethree.jpg"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-[24px] md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-third transition-colors">
                      Acceptance of Government Procurement
                    </h3>
                    <ul className="space-y-2 text-primarytext-sm md:text-base flex-grow">
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Material
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Services
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Engineering
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card 4 - Lab Testing */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src="/serviceimagefour.jpg"
                      alt="serviceimagefour.jpg"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-[24px] md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-third transition-colors">
                      Lab Testing
                    </h3>
                    <ul className="space-y-2 text-primarytext-sm md:text-base flex-grow">
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Third-party Testing of Classroom Lighting
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-third text-lg flex items-center">
                          <GoDotFill />
                        </span>
                        Environment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 md:mt-16 text-center">
                {/* <button
                  type="button"
                  className="inline-flex items-center px-10 py-4 bg-third hover:bg-orange-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  Get a Quote
                </button> */}
                <button className="relative h-[50px] w-40 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:shadow-primary hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10">Get a Quote</span>
                </button>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default Service;
