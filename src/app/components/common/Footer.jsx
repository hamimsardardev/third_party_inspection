import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        {/* Newsletter */}
        <div className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <h3 className="text-xl font-semibold text-white whitespace-nowrap">
                Subscribe to our Newsletter
              </h3>

              <form className="flex flex-1 flex-col sm:flex-row gap-4 w-full max-w-3xl">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  required
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  required
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="text-white font-semibold mb-5">Learn More</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/why-hqts"
                    className="hover:text-white transition-colors"
                  >
                    Why use HQTS?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/inspections"
                    className="hover:text-white transition-colors"
                  >
                    Which Inspections to choose?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audits"
                    className="hover:text-white transition-colors"
                  >
                    Which Audits to choose?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service-locations"
                    className="hover:text-white transition-colors"
                  >
                    Service Locations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white font-semibold mb-5">
                Quality Control Management
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/aql"
                    className="hover:text-white transition-colors"
                  >
                    Acceptable Quality Limit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/qc-india"
                    className="hover:text-white transition-colors"
                  >
                    Quality Control in India
                  </Link>
                </li>
                <li>
                  <Link
                    href="/qc-china"
                    className="hover:text-white transition-colors"
                  >
                    Quality Control in China
                  </Link>
                </li>
                <li>
                  <Link
                    href="/qc-bangladesh"
                    className="hover:text-white transition-colors"
                  >
                    Quality Control in Bangladesh
                  </Link>
                </li>
                <li>
                  <Link
                    href="/qc-vietnam"
                    className="hover:text-white transition-colors"
                  >
                    Quality Control in Vietnam
                  </Link>
                </li>
                <li>
                  <Link
                    href="/inspection-services"
                    className="hover:text-white transition-colors"
                  >
                    Inspection Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white font-semibold mb-5">Audits</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/manufacturing-audit"
                    className="hover:text-white transition-colors"
                  >
                    Manufacturing Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/social-compliance"
                    className="hover:text-white transition-colors"
                  >
                    Social Compliance Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/building-safety"
                    className="hover:text-white transition-colors"
                  >
                    Building Safety Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/environmental-audit"
                    className="hover:text-white transition-colors"
                  >
                    Environmental Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/energy-audit"
                    className="hover:text-white transition-colors"
                  >
                    Energy Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/food-safety-audit"
                    className="hover:text-white transition-colors"
                  >
                    Food Safety Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/c-tpat"
                    className="hover:text-white transition-colors"
                  >
                    C-TPAT Audit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-white font-semibold mb-5">
                Compliance Testing
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/product-compliance"
                    className="hover:text-white transition-colors"
                  >
                    Product Compliance Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chemical-testing"
                    className="hover:text-white transition-colors"
                  >
                    Chemical Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reach-testing"
                    className="hover:text-white transition-colors"
                  >
                    REACH Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rohs-testing"
                    className="hover:text-white transition-colors"
                  >
                    Rohs Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cpsa-testing"
                    className="hover:text-white transition-colors"
                  >
                    CPSIA Testing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ista-testing"
                    className="hover:text-white transition-colors"
                  >
                    ISTA Package Testing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="text-white font-semibold mb-5">Corporate</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/company"
                    className="hover:text-white transition-colors"
                  >
                    Our Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compliance-integrity"
                    className="hover:text-white transition-colors"
                  >
                    Compliance and Integrity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accreditations"
                    className="hover:text-white transition-colors"
                  >
                    Accreditations and Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-10 border-t border-gray-800 text-center text-sm">
            <p>© Prime Global Inspection.</p>

            <div className="flex justify-center gap-6 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.992 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  className="h-6 w-6 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l7 4-7 4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
