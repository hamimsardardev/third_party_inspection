"use client";

import Link from "next/link";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Container from "./common/Container";
import Image from "next/image";

const Products_part = () => {
  let [activenumber, setActive] = useState(1);
  const handleActive = (number) => {
    setActive(number);
  };

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
                <li>
                  <button
                    onClick={() => handleActive(1)}
                    className={`${activenumber == 1 ? "hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:bg-white after:w-full after:h-1" : "hover:text-white transition-colors cursor-pointer"}`}
                  >
                    Electronics Products Inspection
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleActive(2)}
                    className={`${activenumber == 2 ? "hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:bg-white after:w-full after:h-1" : "hover:text-white transition-colors cursor-pointer"}`}
                  >
                    Soft Goods/Textile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleActive(3)}
                    className={`${activenumber == 3 ? "hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:bg-white after:w-full after:h-1" : "hover:text-white transition-colors cursor-pointer"}`}
                  >
                    Hard Goods
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleActive(4)}
                    className={`${activenumber == 4 ? "hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:bg-white after:w-full after:h-1" : "hover:text-white transition-colors cursor-pointer"}`}
                  >
                    Mechanical Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleActive(5)}
                    className={`${activenumber == 5 ? "hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:bg-white after:w-full after:h-1" : "hover:text-white transition-colors cursor-pointer"}`}
                  >
                    Craft & Paper Goods
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleActive(6)}
                    className={`${activenumber == 6 ? "hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:bg-white after:w-full after:h-1" : "hover:text-white transition-colors cursor-pointer"}`}
                  >
                    Footwear
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleActive(7)}
                    className={`${activenumber == 7 ? "hover:text-white transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:bg-white after:w-full after:h-1" : "hover:text-white transition-colors cursor-pointer"}`}
                  >
                    Food & Fruits
                  </button>
                </li>
              </ul>
            </div>
            {/* ---------------------card part--------------------- */}
            {activenumber == 1 ? (
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
                      href="/product/electronisproduct"
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
                    src="/electronisbanner.jpg"
                    alt="electronisbanner.jpg"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            ) : activenumber == 2 ? (
              <div
                className=" flex flex-col lg:flex-row items-start lg:items-center justify-between
              bg-white/10 px-3 rounded-[12px] backdrop-blur-md shadow-md lg:flex items-center justify-between gap-2 py-8
              "
              >
                <div className="w-auto lg:w-[30%] space-y-3">
                  <ul className="space-y-1 text-primary text-[16px] md:text-[16px] font-normal">
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Garments and Apparel Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Footwear Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Luggage and Bags Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Fashion Accessories Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Home Textile Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Outdoor Textile Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Fabric Inspection
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/product/softgoods"
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
                    src="/softgoodsbanner.png"
                    alt="softgoodsbanner.png"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            ) : activenumber == 3 ? (
              <div
                className=" flex flex-col lg:flex-row items-start lg:items-center justify-between
              bg-white/10 px-3 rounded-[12px] backdrop-blur-md shadow-md lg:flex items-center justify-between gap-2 py-8
              "
              >
                <div className="w-auto lg:w-[30%] space-y-3">
                  <ul className="space-y-1 text-primary text-[16px] md:text-[16px] font-normal">
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Fitness Equipment Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Baby Products Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Furniture Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Garden Tools Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Hardware and Building Material Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Home Decoration Products Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Kitchenware and Tableware Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Stationery and Office Supply Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Toys Quality Control Inspection
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/product/hardgoods"
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
                    src="/hardgoodsbanner.png"
                    alt="hardgoodsbanner.png"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            ) : activenumber == 4 ? (
              <div
                className=" flex flex-col lg:flex-row items-start lg:items-center justify-between
              bg-white/10 px-3 rounded-[12px] backdrop-blur-md shadow-md lg:flex items-center justify-between gap-2 py-8
              "
              >
                <div className="w-auto lg:w-[30%] space-y-3">
                  <ul className="space-y-1 text-primary text-[16px] md:text-[16px] font-normal">
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Electromechanical device
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Machine parts
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Auto Parts
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Pump
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Mold
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Machining parts
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Die casting
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Stamping parts
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/product/hardgoods"
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
                    src="/mechanicalproductbanner.png"
                    alt="mechanicalproductbanner.png"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            ) : activenumber == 5 ? (
              <div
                className=" flex flex-col lg:flex-row items-start lg:items-center justify-between
              bg-white/10 px-3 rounded-[12px] backdrop-blur-md shadow-md lg:flex items-center justify-between gap-2 py-8
              "
              >
                <div className="w-auto lg:w-[30%] space-y-3">
                  <ul className="space-y-1 text-primary text-[16px] md:text-[16px] font-normal">
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Stationery & Office Paper Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Gift & Packaging Products Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Corrugated & Carton Products Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Printed Materials Inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Specialty Paper Products Inspection
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/product/craftpaper"
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
                    src="/craftpaperbannerimage.png"
                    alt="craftpaperbannerimage.png"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            ) : activenumber == 6 ? (
              <div
                className=" flex flex-col lg:flex-row items-start lg:items-center justify-between
              bg-white/10 px-3 rounded-[12px] backdrop-blur-md shadow-md lg:flex items-center justify-between gap-2 py-8
              "
              >
                <div className="w-auto lg:w-[30%] space-y-3">
                  <ul className="space-y-1 text-primary text-[16px] md:text-[16px] font-normal">
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Casual Footwear
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Formal Footwear
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Women’s Footwear
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Sandals & Slippers
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Boots
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Safety Footwear
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Sports Footwear
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Kids & Baby Footwear
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/product/footwear"
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
                    src="/footwearbanner.png"
                    alt="footwearbanner.png"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            ) : (
              <div
                className=" flex flex-col lg:flex-row items-start lg:items-center justify-between
              bg-white/10 px-3 rounded-[12px] backdrop-blur-md shadow-md lg:flex items-center justify-between gap-2 py-8
              "
              >
                <div className="w-auto lg:w-[30%] space-y-3">
                  <ul className="space-y-1 text-primary text-[16px] md:text-[16px] font-normal">
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Fresh Fruits
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Fresh Vegetables
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Processed & Packed Food
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Dairy & Beverage Products
                    </li>
                    <li className="flex items-center gap-2">
                      <GoDotFill className="text-xl" />
                      Grains & Agricultural Products
                    </li>
                  </ul>
                  <div className="pt-3">
                    <Link
                      href="/product/foodfruits"
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
                    src="/foodfruitsbanner.png"
                    alt="foodfruitsbanner.png"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Products_part;
