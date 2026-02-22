"use client";
import { useState } from "react";
import Container from "@/app/components/common/Container";
import Contact from "../../contact/page";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Pre-Shipment Inspection (PGI)?",
      answer:
        "Pre-Shipment Inspection is a quality control process conducted before goods are shipped. It ensures that products meet buyer specifications, quality standards, and regulatory requirements.",
    },
    {
      question: "What types of products do you inspect?",
      answer:
        "We inspect a wide range of products including Footwear, Food & Fruits, Craft & Paper Goods, Packaging Materials, Consumer Products, and Industrial Items.",
    },
    {
      question: "How long does an inspection take?",
      answer:
        "Inspection duration depends on order quantity and product type. Typically, inspections are completed within one working day.",
    },
    {
      question: "When will I receive the inspection report?",
      answer:
        "The final inspection report is usually delivered within 24 hours after inspection completion.",
    },
    {
      question: "Do you provide sample reports?",
      answer:
        "Yes, we provide sample inspection reports upon request to help clients understand our reporting format.",
    },
    {
      question: "Can you perform inspections during production?",
      answer:
        "Yes, we offer During Production Inspection (DUPRO) to monitor product quality and reduce production risks.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-semibold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl mx-auto text-white">
            Find answers to common questions about our inspection services,
            reporting process, and quality control procedures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-primary text-primary rounded-xl shadow transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center font-medium text-lg"
              >
                {faq.question}
                <span className="text-primary text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <Contact/>
      </Container>
    </section>
  );
}