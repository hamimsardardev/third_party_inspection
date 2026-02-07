import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";
import Container from "./common/Container";
import Image from "next/image";

const Products_part = () => {
  return (
    <div>
      <section className=" py-16 md:py-24">
        <Container>
          <div>
            <div className="text-center mb-[30px]">
              <h1 className="text-[38px] md:text-[24px] font-bold text-primary tracking-tight">
                PRODUCTS
              </h1>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg text-primary">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Electronics Products Inspection
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Soft Goods
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Hard Goods
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Mechanical Products
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Chemical Products
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Food
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Agriculture Products
                </li>
              </ul>
            </div>

            <div
              className=" flex flex-col lg:flex-row items-start lg:items-center justify-between
              bg-white/10 px-3 rounded-[12px] backdrop-blur-md shadow-md lg:flex items-center justify-between gap-2 py-8
              "
            >
              <div className="w-auto lg:w-[30%] space-y-3">
                <ul className="space-y-1 text-primary text-[16px] md:text-[16px] font-normal">
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-xl" />
                    Household Electric & Electronic Products
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-xl" />
                    Lights and Lighting
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-xl" />
                    Components
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-xl" />
                    Computer Device
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-xl" />
                    Power Tools
                  </li>
                  <li className="flex items-center gap-2">
                    <GoDotFill className="text-xl" />
                    Electronic Equipment
                  </li>
                </ul>
                <div className="pt-3">
                  <Link
                    href="/services/electronics-inspection"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[18px] font-medium text-third shadow-lg hover:bg-secondery hover:text-white transition-all duration-300 hover:shadow-xl active:scale-95"
                  >
                    LEARN MORE
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-[65%] relative h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                <Image
                  src="/productimage1.jpeg"
                  alt="Electronics products background"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Products_part;
