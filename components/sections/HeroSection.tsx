"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { AuroraText } from "@/components/magicui/aurora-text";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col h-[100vh] w-full items-center justify-center">
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
          Hello, I am <br />{" "}
          <AuroraText speed={2} className="mr-1">
            Varun S P
          </AuroraText>{" "}
          👋
        </motion.h1>
        <motion.div
          className="flex gap-4 mt-16 z-30" // Ensure buttons have a higher z-index
          initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "none" }}
          transition={{
            delay: 1,
            duration: 0.8,
            type: "spring",
          }}
        >
          <Link href="mailto:spvarun47@gmail.com">
            <Button size="lg" className="!z-30 cursor-pointer">
              Get In Touch
            </Button>
          </Link>
          <a
            // href="/resume.pdf"
            href="https://drive.google.com/file/d/14oLzwEfAsT_gsyckty_PuqjzV5v8Dwmy/view?usp=sharing"
            download="[Resume] Varun_S_P.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="!z-30 cursor-pointer"
            >
              Download Resume
              <Download className="size-5 ml-2" />
            </Button>
          </a>
        </motion.div>
        <div className="flex gap-4 mt-6 z-30">
          <a
            href="https://coff.ee/spvarun47g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={160}
              height={40}
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
            />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 z-20">
        {" "}
        {/* Ensure BackgroundBeams has a lower z-index */}
        <BackgroundBeams />
      </div>
    </div>
  );
};

export default HeroSection;
