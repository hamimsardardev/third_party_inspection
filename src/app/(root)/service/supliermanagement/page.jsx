"use client";
import React, { useState } from "react";
import Image from "next/image";
import Sample_part from "@/app/components/Sample_part";
import Container from "@/app/components/common/Container";
import Qutation_form from "@/app/components/Qutation_form";
import BookNow_form from "@/app/components/BookNow_form";

const Goverment_part = () => {
  const [getQuotation, setgetQuotation] = useState(false);

  function handleQutationOpen() {
    setgetQuotation(true);
  }

  function handleQutationClose() {
    setgetQuotation(false);
  }
  // Book Now //
  const [getBooknow, setgetBooknow] = useState(false);

  function handleBookOpen() {
    setgetBooknow(true);
  }

  function handleBookClose() {
    setgetBooknow(false);
  }
  return (
    <div>
      {/* ================= Banner Section ================= */}
      <section className="bg-[url('/productinspectionbanner.png')] bg-cover bg-center">
        <Container>
          <div className="py-32 md:py-56 space-y-4">
            <h2 className="text-[24px] md:text-[30px] md:text-[36px] text-primary font-semibold leading-[36px]">
              Supplier Management & Development
            </h2>
            <p className="text-white text-[18px] leading-relaxed max-w-[720px]">
              We help businesses identify, evaluate, and develop reliable
              suppliers to ensure consistent quality, performance, and
              compliance.
            </p>
            <div>
              <button
                onClick={handleBookOpen}
                className="relative h-[50px] w-44 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 cursor-pointer"
              >
                <span className="relative z-10">Book Now</span>
              </button>
              <BookNow_form isOpen={getBooknow} onClose={handleBookClose} />
            </div>
          </div>
        </Container>
      </section>

      {/* ================= Content Section ================= */}
      <section className="pt-12 md:pt-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 mb-16">
            <div className="lg:w-4/5">
              <h3 className="text-primary text-3xl md:text-5xl font-medium mb-2">
                Supplier Management & Development
              </h3>

              <p className="text-white text-base leading-relaxed max-w-[720px]">
                Building Stronger, Smarter, and More Reliable Supply Chains
                <span className="block text-white text-base leading-relaxed mt-3">
                  We help businesses evaluate, develop, and monitor suppliers to
                  ensure consistent quality, operational efficiency, and
                  long-term partnership success.
                </span>
              </p>
            </div>
            <div className="lg:w-1/5">
              <div className="flex justify-center items-center">
                <div className="text-center space-y-6">
                  {/* Title */}
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-1.5 h-5 bg-primary"></span>
                    <h2 className="text-xl font-semibold tracking-wide text-primary">
                      CONTACT US
                    </h2>
                  </div>

                  {/* Button 1 */}
                  <button
                    onClick={handleQutationOpen}
                    className="w-48 py-3 rounded-full bg-primary border border-primary text-black font-medium hover:bg-transparent hover:text-primary transition"
                  >
                    GET A QUOTE
                  </button>
                  <Qutation_form
                    isOpen={getQuotation}
                    onClose={handleQutationClose}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= Cards ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {/* Card 1 */}
            <div className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <div className="relative h-64">
                <Image
                  src="/productinspectionbanner.png"
                  alt="Product Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4 text-primary font-semibold text-lg">
                  <a className="hover:text-white hover:underline" href="#">
                    Management Consulting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Sample_part />
      </section>
    </div>
  );
};

export default Goverment_part;
