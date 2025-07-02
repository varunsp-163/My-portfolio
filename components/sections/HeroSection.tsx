"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="h-screen w-full rounded-md dark:bg-neutral-950 bg-white relative flex flex-col items-center justify-center antialiased"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
        animate={{ opacity: 1, y: 0, filter: "none" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 py-4 text-center text-5xl font-bold tracking-tighter md:text-6xl lg:text-8xl"
      >
        Hello, I am <br /> <AuroraText speed={2}>Varun S P</AuroraText> 👋
      </motion.h1>

      <BackgroundBeams />
    </div>
  );
};

export default HeroSection;
