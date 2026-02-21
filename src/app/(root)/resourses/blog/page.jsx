import Container from "@/app/components/common/Container";
import Image from "next/image";
import React from "react";

const Blog_part = () => {
  return (
    <div>
      <section className="bg-[url('/blogbannerimage.png')] bg-cover bg-center">
        <div className="bg-gray-900/80">
          <Container>
            <div className="space-y-4 py-32 md:py-56 text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-4">
                Latest Insights & Articles
              </h2>
              <p className="max-w-2xl mx-auto text-white">
                Stay updated with industry trends, inspection tips, quality
                control guidelines, and global compliance standards.
              </p>
              <div>
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
          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog 1 */}
            <div>
              <Image
                src="/blogimage.jpg"
                alt="blogimage.jpg"
                height={226}
                width={312}
                className="w-full rounded-tl-xl rounded-tr-xl"
              />

              <div className="p-6 bg-gray-700 rounded-b-xl">
                <p className="text-sm text-white mb-2">Quality Control</p>
                <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                  Complete Guide to Pre-Shipment Inspection
                </h3>
                <p className="text-white text-sm mb-4">
                  Learn why PSI is essential before export and how it protects
                  your business from costly defects.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:text-white hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog 2 */}
            <div>
              <Image
                src="/blogimage_v2.jpg"
                alt="blogimage.jpg"
                height={226}
                width={312}
                className="w-full rounded-tl-xl rounded-tr-xl"
              />
              <div className="p-6 bg-gray-700 rounded-b-xl">
                <p className="text-sm text-white mb-2">Food & Fruits</p>
                <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                  Food Safety Inspection Standards for Export
                </h3>
                <p className="text-white text-sm mb-4">
                  Discover the key quality and safety checks required for
                  exporting fresh produce globally.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:text-white hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>

            {/* Blog 3 */}
            <div>
              <Image
                src="/blogimagethree.jpg"
                alt="blogimage3"
                height={226}
                width={312}
                className="w-full rounded-tl-xl rounded-tr-xl "
              />
              <div className="p-6 bg-gray-700 rounded-b-xl">
                <p className="text-sm text-white mb-2">Footwear Inspection</p>
                <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                  Footwear Quality Control Checklist
                </h3>
                <p className="text-white text-sm mb-4">
                  Essential inspection points to ensure durability, safety, and
                  compliance in footwear production.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:text-white hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
            {/* Blog 4 */}
            <div>
              <Image
                src="/blogimagefour.jpg"
                alt="blogimage4"
                height={226}
                width={312}
                className="w-full rounded-tl-xl rounded-tr-xl"
              />
              <div className="p-6 bg-gray-700 rounded-b-xl">
                <p className="text-sm text-white mb-2">Soft Goods/Textile</p>
                <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                  Soft Goods/Textile Checklist
                </h3>
                <p className="text-white text-sm mb-4">
                  Essential inspection points to ensure durability, safety, and
                  compliance in footwear production.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:text-white hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
            {/* Blog 5 */}
            <div>
              <Image
                src="/blogimage5.jpg"
                alt="blogimage5"
                height={226}
                width={312}
                className="w-full rounded-tl-xl rounded-tr-xl"
              />
              <div className="p-6 bg-gray-700 rounded-b-xl">
                <p className="text-sm text-white mb-2">
                  Electronics Products Inspection
                </p>
                <h3 className="text-primary text-lg font-semibold mb-3 hover:text-white transition">
                  Electronics Products Checklist
                </h3>
                <p className="text-white text-sm mb-4">
                  Essential inspection points to ensure durability, safety, and
                  compliance in footwear production.
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:text-white hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-full bg-primary text-black font-medium hover:bg-transparent hover:text-primary border border-primary transition">
              View All Articles
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog_part;
