import React from "react";
import Container from "./common/Container";
import { FaArrowRightLong } from "react-icons/fa6";

const Ourstory = () => {
  return (
    <div>
      <section className="py-16 md:py-20 lg:py-24">
        <Container>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className=" md:space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                  Our <span className="text-white">Story</span>
                </h2>

                <p className="text-lg sm:text-xl text-white leading-relaxed">
                  We deploy the most qualified quality engineers and auditors to
                  deliver efficient, reliable, and customized quality assurance
                  solutions. Our diverse portfolio of solutions protects
                  companies' interests and improves quality performance.
                </p>

                <div className="pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 text-primary font-semibold text-lg hover:text-secondery transition-colors group"
                  >
                    Know More
                    <span className="flex items-center transition-transform group-hover:translate-x-1">
                      <FaArrowRightLong className="text-current" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Right - Image / Video Placeholder */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                    alt="Quality inspector checking products in factory"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark overlay for better text/icon visibility */}
                  <div className="absolute inset-0 bg-black/25"></div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <button
                    type="button"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-700 hover:bg-gray-900 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    aria-label="Play video"
                  >
                    <svg
                      className="w-10 h-10 md:w-12 md:h-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Optional subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Ourstory;
