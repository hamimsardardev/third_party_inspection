"use client";
import React from "react";
import Container from "./Container";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <section>
        <nav className="w-full bg-white shadow-sm">
          <Container>
            <div className="px-6 py-4 flex items-center justify-between">
              <div>
                <Image src="/Logo.jpg" alt="Logo" height={100} width={200} />
              </div>

              {/* NAV ITEMS (Desktop only) */}
              <ul className="flex items-center gap-8 font-semibold text-primary tracking-wide">
                <li className="flex items-center gap-1 cursor-pointer hover:text-primarytwo transition-colors duration-300">
                  SERVICES <FiChevronDown size={16} />
                </li>

                <li className="flex items-center gap-1 cursor-pointer hover:text-primarytwo transition-colors duration-300">
                  PRODUCTS <FiChevronDown size={16} />
                </li>

                <li className="flex items-center gap-1 cursor-pointer hover:text-primarytwo transition-colors duration-300">
                  RESOURCES <FiChevronDown size={16} />
                </li>

                <li className="flex items-center gap-1 cursor-pointer hover:text-primarytwo transition-colors duration-300">
                  ABOUT US <FiChevronDown size={16} />
                </li>

                <li className="cursor-pointer hover:text-primarytwo transition-colors duration-300">
                  CONTACT
                </li>
              </ul>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-6">
                <FiSearch
                  size={22}
                  className="cursor-pointer hover:text-primarytwo transition"
                />

                <div className="flex items-center text-primary gap-1 cursor-pointer hover:text-[#F1CB78] transition">
                  English <FiChevronDown size={16} />
                </div>

                <button className=" border-2 border-dashed border-primarytwo bg-white px-5 py-2 font-semibold uppercase text-primary hover:text-[#99805C] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#99805C] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none">
                  LOG IN
                </button>
                <button className=" border-2 border-dashed border-primarytwo bg-white px-5 py-2 font-semibold uppercase text-primary hover:text-[#99805C] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#99805C] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none">
                  SIGN UP
                </button>
              </div>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
};

export default Header;
