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
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 150, fill: "forwards" },
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      ref={btnRef}
      className="relative overflow-hidden rounded-lg bg-[#FF6600] px-8 py-3 text-lg font-semibold text-white shadow-md"
    >
      <span className="relative z-10">Contact Us</span>

      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-28 w-28 -translate-x-[50%] -translate-y-[50%] rounded-full bg-white/30"
      />
    </motion.button>
  );
};

export default ButtonWrapper;
