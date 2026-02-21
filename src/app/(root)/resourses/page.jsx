import Container from "@/app/components/common/Container";
import Image from "next/image";
import React from "react";

const Resourse_part = () => {
  return (
    <div>
      <section className="py-16 md:py-24">
        <Container>
          {/* Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="relative h-[350px] md:h-[450px]">
              <Image
                src="/resourse.png"
                alt="Quality Inspection Resources"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
                  Resources & Industry Knowledge
                </h2>
                <p className="max-w-2xl text-gray-200 mb-8">
                  Access valuable guides, inspection checklists, compliance
                  standards, and industry updates to support your quality
                  assurance process.
                </p>
                <button className="px-8 py-3 rounded-full bg-primary text-black font-medium hover:bg-transparent hover:text-white border border-primary transition">
                  Explore Resources
                </button>
              </div>
            </div>
          </div>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Inspection Checklists
              </h3>
              <p className="text-gray-600 mb-4">
                Download ready-to-use quality control checklists for different
                product categories.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Download Now →
              </a>
            </div>

            {/* Resource 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Sample Inspection Reports
              </h3>
              <p className="text-gray-600 mb-4">
                View real inspection report samples to understand our reporting
                structure.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                View Samples →
              </a>
            </div>

            {/* Resource 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Compliance & Standards Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about international safety standards and compliance
                requirements.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Resourse_part;
