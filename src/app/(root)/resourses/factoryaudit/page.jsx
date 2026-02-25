import Image from "next/image";
import Link from "next/link";

const FactoryAudit = () => {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/vr-audit.jpg" // replace with your image
              alt="VR Factory Audit"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              VR Factory Audit
            </h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Visualize the inspection scene and make the entire audit process
              digitalized, transparent, and immersive.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-sm mb-8">
              <ul className="space-y-3">
                <li>✔ 400+ Full-time Inspectors</li>
                <li>✔ 30+ Countries Coverage</li>
                <li>✔ Panorama Camera Technology</li>
                <li>✔ 3D Online Report Processing</li>
              </ul>

              <ul className="space-y-3">
                <li>✔ Order Scheduled Within 24h</li>
                <li>✔ 3D Real Scene Report</li>
                <li>✔ 99% Procurement Risk Avoidance</li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
            >
              Get Quotation →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY VR AUDIT ================= */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Why VR <span className="text-orange-500">Audit?</span>
            </h2>

            <ul className="space-y-6 text-gray-300">
              <li>
                <strong>Visualized Experience:</strong> Real-time immersive
                factory environment.
              </li>
              <li>
                <strong>Risk Mitigation:</strong> Reduce supply chain and
                procurement risks efficiently.
              </li>
              <li>
                <strong>Cost Saving:</strong> No travel required, saving time
                and operational costs.
              </li>
              <li>
                <strong>Anti-Bribery:</strong> Transparent online reporting and
                supervision.
              </li>
              <li>
                <strong>Professional Team:</strong> Experienced technical audit
                specialists.
              </li>
              <li>
                <strong>Fast Delivery:</strong> Reports generated within 48h.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/factory-interior.jpg" // replace image
              alt="Factory Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICE COVERAGE ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Our Service <span className="text-orange-500">Coverage</span>
          </h2>

          <p className="text-gray-600 mb-12">
            Our inspectors and auditors cover more than 30 countries worldwide.
          </p>

          <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/world-map.png" // replace with world map image
              alt="Service Coverage Map"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactoryAudit;
