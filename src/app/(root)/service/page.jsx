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
      <section className="bg-[url('/servicebanner.jpg')] bg-cover bg-center">
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
      </section>

      <section>
        <Container>
          <div className="bg-gray-500">
            <div className="">
              <ul className="flex justify-between items-center text-[18px] md:text-[16px] font-semibold text-primary">
                <li className="px-4 sm:px-6 lg:px-8 py-4 hover:text-white hover:bg-primary">
                  <a href="#">Quality Inspection & Supplier Services</a>
                </li>
                <li className="px-4 sm:px-6 lg:px-8 py-4 hover:text-white hover:bg-primary">
                  <a href="#">Supplier management&development</a>
                </li>
                <li className="px-4 sm:px-6 lg:px-8 py-4 hover:text-white hover:bg-primary">
                  <a href="#">Acceptance of government procurement</a>
                </li>
                <li className="px-4 sm:px-6 lg:px-8 py-4 hover:text-white hover:bg-primary">
                  <a href="#">Lab Testing</a>
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
                  <h2 className="text-[36px] lg:text-[48px] md:text-[36px] font-semibold text-white leading-[48px]">
                    <Link href="/productinspection">
                      Product Quality Control Inspection
                    </Link>
                  </h2>
                </div>
                <ul className="space-y-1 text-primary text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Product Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Industrial Product Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Full Inspection
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Loading Supervision
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Damage Investigation
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Design, Making And Verification For Gauge
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Process Audit
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Product Audit
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
                <h2 className="text-[36px] lg:text-[48px] md:text-[36px] font-semibold text-white leading-[48px]">
                  <Link href="/supliermanagement">
                    Supplier Management & Development
                  </Link>
                </h2>
                <ul className="space-y-1 text-primary text-[18px] leading-relaxed">
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
                    Diagnosis & Optimization For Management System
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Management Consulting
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Project Engineering Management
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Quality Engineering Consulting
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Social Responsibility Consulting
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
                <h2 className="text-[36px] lg:text-[48px] md:text-[36px] font-semibold text-white leading-[48px]">
                  <Link href="/goverment">
                    Acceptance of Government Procurement
                  </Link>
                </h2>
                <ul className="space-y-1 text-primary text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Material
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Services
                  </li>
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Engineering
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 - Lab Testing */}
            <section className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                <Image
                  src="/servicebanner.jpg"
                  alt="Laboratory testing engineer with equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-[36px] lg:text-[48px] md:text-[36px] font-semibold text-white leading-[48px]">
                  <Link href="/labtestibg">Lab Testing</Link>
                </h2>
                <ul className="space-y-1 text-primary text-[18px] leading-relaxed">
                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Third-party Testing
                  </li>

                  <li className="flex gap-2 items-center text-center cursor-pointer hover:text-white hover:underline">
                    <GoDotFill />
                    Third-party Testing of Classroom Lighting Environment
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
