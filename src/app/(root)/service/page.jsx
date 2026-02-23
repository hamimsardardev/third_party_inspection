"use client";
import React from "react";
import Image from "next/image";
import Sample_part from "@/app/components/Sample_part";
import Container from "@/app/components/common/Container";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const Service_part = () => {
  return (
    <div>
      <section className="bg-[url('/servicebanner.png')] bg-cover bg-center">
      <div className="bg-black/50">

        <Container>
          <div className="py-32 md:py-56">
            <h2 className="text-3xl md:text-4xl text-primary font-semibold leading-tight">
              SERVICE
            </h2>

            <div className="mt-12">
              <button className="relative h-[50px] w-44 inline-flex items-center justify-center overflow-hidden bg-primary text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-third before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Get a Sample Report</span>
              </button>
            </div>
          </div>
        </Container>
      </div>
      </section>

      <section>
        <Container>
          <div className="bg-third">
            <div className="">
              <ul className="flex flex-col sm:flex-row flex-wrap sm:justify-between items-start sm:items-center text-[16px] md:text-[18px] font-semibold text-primary">
                <li className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:text-third hover:bg-primary transition-all duration-300">
                  <a href="#">Product Quality Inspection</a>
                </li>
                <li className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:text-third hover:bg-primary transition-all duration-300">
                  <a href="#">Audit & Survey</a>
                </li>
                <li className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:text-third hover:bg-primary transition-all duration-300">
                  <a href="#">Supplier Management & Development</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16 md:space-y-20">
            {/* Section 1 - Product Quality Control Inspection */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/servicebanner.jpg"
                  alt="Engineer inspecting product in factory"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-white leading-[24px] md:leading-[36px] lg:leading-[48px]">
                    <Link className="hover:underline" href="/service/productinspection">
                      Product Quality Inspection
                    </Link>
                  </h2>
                </div>
                <ul className="space-y-1 text-primary text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Pre-production Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    During Production Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Pre-Shipment Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Sample pick inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Packaging Inspection
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 - Supplier management & development */}
            <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/servicebanner.jpg"
                  alt="Factory evaluation team"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-white leading-[24px] md:leading-[36px] lg:leading-[48px]">
                  <Link className="hover:underline" href="/service/auditservey">Audit & Survey</Link>
                </h2>
                <ul className="space-y-1 text-primary text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Factory Audit
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Supplier Audit
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Optimization For Management System
                  </li>

                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Loading Supervision
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Survey & Verification
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 - Acceptance of government procurement */}
            <section className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/servicebanner.jpg"
                  alt="Government acceptance testing team with equipment"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-white leading-[24px] md:leading-[36px] lg:leading-[48px]">
                  <Link className="hover:underline" href="/service/supliermanagement">
                    Supplier Management & Development
                  </Link>
                </h2>
                <ul className="space-y-1 text-primary text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Management Consulting
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <Sample_part />
        </Container>
      </section>
    </div>
  );
};

export default Service_part;
