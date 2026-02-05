"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ButtonWrapper = () => {
  return (
    <div>
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const span = spanRef.current;

    if (!btn || !span) return;

    const handleMouseMove = (e) => {
      const { width } = e.currentTarget.getBoundingClientRect();
      const offset = e.nativeEvent.offsetX;
      const left = `${(offset / width) * 100}%`;

      span.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      span.animate({ left: "50%" }, { duration: 150, fill: "forwards" });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      ref={btnRef}
      className="relative cursor-pointer overflow-hidden rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-gray-800 shadow-md"
    >
      <span className="relative z-10">Contact Us</span>

      <span
        ref={spanRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50"
      />
    </motion.button>
  );
};

export default ButtonWrapper;
