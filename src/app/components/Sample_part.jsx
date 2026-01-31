import React from "react";
import Container from "./common/Container";

const Sample_part = () => {
  return (
    <div>
      <section className=" bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Header / Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-[38px] font-bold tracking-tight text-primary sm:text-[24px]">
                SAMPLE REPORT
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                GIS performs third party inspection, plant evaluation as well as
                project quality management, product testing and inspection and
                quality engineering consultation. Check out some examples of the
                reports we provide below.
              </p>
            </div>

            {/* Form Card */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
              <div className="px-8 py-10 sm:px-12">
                <form className="space-y-6">
                  {/* Grid for form fields */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone<span className="text-red-500">*</span>
                      </label>
                      <div className="flex mt-1">
                        <select
                          id="country-code"
                          defaultValue="+1"
                          className="rounded-l-lg border-r-0 border-gray-300 bg-gray-50 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2.5"
                        >
                          <option>+1</option>
                          <option>+880</option>
                          <option>+44</option>
                          <option>+91</option>
                          {/* Add more as needed */}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="block w-full rounded-r-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Select */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service
                    </label>
                    <select
                      id="service"
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                    >
                      <option>Please select a service</option>
                      <option>Third Party Inspection</option>
                      <option>Plant Evaluation</option>
                      <option>Project Quality Management</option>
                      <option>Product Testing & Inspection</option>
                      <option>Quality Engineering Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 px-4 border"
                      placeholder="Tell us more about your request..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-3 bg-transparent text-primary font-medium rounded-lg shadow-md hover:bg-third focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                      Get a Sample Report
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Footer note */}
            <p className="mt-8 text-center text-sm text-gray-500">
              We will get back to you shortly with a sample report.
            </p>
          </div>
        </Container>
      </section>    
    </div>
  );
};

export default Sample_part;

