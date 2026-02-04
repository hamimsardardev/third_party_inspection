"use client"

import React from "react";
import Container from "./Container";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="fixed w-full z-[9999]">
        <motion.nav
          className="absolute w-full"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Container>
            <div className="flex items-center justify-between px-2 backdrop-blur-md shadow-md rounded-xl">
              <div>
                <Link href="/">
                  <Image src="/Logo.jpg" alt="Logo" height={100} width={200} />
                </Link>
              </div>

              {/* NAV ITEMS (Desktop only) */}
              <ul className="flex items-center gap-8 font-semibold text-primary tracking-wide">
                <li className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  SERVICES <FiChevronDown size={16} />
                </li>

                <li className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  PRODUCTS <FiChevronDown size={16} />
                </li>

                <li className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  RESOURCES <FiChevronDown size={16} />
                </li>

                <li className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors duration-300">
                  ABOUT US <FiChevronDown size={16} />
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="cursor-pointer hover:text-primarytwo transition-colors duration-300"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-6">
                <FiSearch
                  size={22}
                  className="cursor-pointer text-primary hover:text-white transition"
                />

                <div className="flex items-center text-primary gap-1 cursor-pointer hover:text-white transition">
                  English <FiChevronDown size={16} />
                </div>
                <button className=" hover:before:bg-primary rounded-full relative h-[40px] w-24 overflow-hidden border-2 border-white bg-gray-900 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:shadow-gray-300 hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10 "> LOG IN</span>
                </button>
                <button className=" hover:before:bg-primary rounded-full relative h-[40px] w-24 overflow-hidden border-2 border-white bg-gray-900 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-white hover:shadow-gray-300 hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10 "> SIGN UP</span>
                </button>
              </div>
            </div>
          </Container>
        </motion.nav>
      </header>
    </>
  );
};

export default Header;
