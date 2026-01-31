"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./common/Container";
import { CarouselSize } from "./CarouselSize";

const Blog = () => {
  return (
    <>
      <section>
        <Container>
          <div className="border-b-1 border-seconerycolor py-[112px]">
            <motion.div
              className="text-center mb-[70px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h5
                className="font-dmSans text-[48px] font-semibold leading-[66px] text-primary"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Blog
              </motion.h5>

              <motion.p
                className="font-dmSans text-[18px] font-regular leading-[26px] text-primarytwo w-[740px] mx-auto mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our blog shares expert insights on quality control, third-party inspections, factory audits, and global supply chain best practices. We publish practical guides, industry updates, and real-world inspection knowledge to help importers, exporters, and manufacturers reduce risk, ensure compliance, and maintain product quality. Whether you’re sourcing globally or managing production locally, our articles are designed to support informed decision-making.
              </motion.p>
            </motion.div>
            <CarouselSize />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
