import React from "react";
import Container from "./common/Container";
import Image from "next/image";

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
                  <span className="text-third">SERVICE</span>
                </h2>
                <div className="w-20 h-1 bg-third mx-auto mt-4 rounded-full"></div>
              </div>

              {/* Services Grid - explicit cards, no map */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Card 1 - Product Quality Control Inspection */}
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src="/productimagefour.jpg"
                      alt="productimagefour"
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF6200] transition-colors">
                      Product Quality Control Inspection
                    </h3>
                    <ul className="space-y-2.5 text-gray-600 text-sm md:text-base flex-grow">
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Product Inspection
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Industrial Product Inspection
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Full Inspection
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Loading Supervision
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Diagnosis & Optimization
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Damage Investigation
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Design, Making And Verification For Gauge
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Process Audit
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Social Responsibility Audit
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
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
                      src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1200"
                      alt="Supplier Management"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-500 opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                      FACTORY EVALUATION
                    </div>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF6200] transition-colors">
                      Supplier Management & Development
                    </h3>
                    <ul className="space-y-2.5 text-gray-600 text-sm md:text-base flex-grow">
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Factory Audit
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Supplier Audit
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Management Consulting
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Diagnosis & Optimization For Management System
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Project Quality Management
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Quality Engineering Consulting
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
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
                      src="https://images.unsplash.com/photo-1581092160607-798c0a6a5924?auto=format&fit=crop&q=80&w=1200"
                      alt="Government Procurement Acceptance"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-400 opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF6200] transition-colors">
                      Acceptance of Government Procurement
                    </h3>
                    <ul className="space-y-2.5 text-gray-600 text-sm md:text-base flex-grow">
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Material
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Services
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
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
                      src="https://images.unsplash.com/photo-1581092160560-1c1e428e9d65?auto=format&fit=crop&q=80&w=1200"
                      alt="Lab Testing"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-400 opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF6200] transition-colors">
                      Lab Testing
                    </h3>
                    <ul className="space-y-2.5 text-gray-600 text-sm md:text-base flex-grow">
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Third-party Testing of Classroom Lighting
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FF6200] mr-2 text-lg leading-none">
                          •
                        </span>
                        Environment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 md:mt-16 text-center">
                <button
                  type="button"
                  className="inline-flex items-center px-10 py-4 bg-[#FF6200] hover:bg-orange-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  Get a Quote
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
