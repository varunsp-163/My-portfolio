"use client";

import React from "react";
import { motion } from "motion/react";
import { AuroraText } from "../magicui/aurora-text";
import { Badge } from "../ui/badge";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { PointerHighlight } from "../ui/pointer-highlight";

const IntroSection = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="sm:px-30 px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sm:text-4xl text-3xl font-bold tracking-wide"
        >
          I am a
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:text-7xl sm:text-5xl text-4xl font-bold"
        >
          <PointerHighlight>
            {" "}
            <AuroraText>
              Master&apos;s student at Macquarie University
            </AuroraText>
          </PointerHighlight>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 50, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:text-7xl sm:text-5xl text-4xl font-bold"
        >
          <AuroraText speed={2}>Passionate full-stack developer</AuroraText>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="md:text-7xl sm:text-5xl text-4xl font-bold"
        >
          <AuroraText>Learner</AuroraText>
        </motion.h1>
      </motion.div>
      <div className="flex w-full mt-30 flex-col items-center justify-center">
        <div className="sm:px-30 px-8 mb-10">
          <Badge
            variant="secondary"
            className="sm:text-4xl text-3xl font-bold tracking-wide bg-[#8D60E0] dark:text-white"
          >
            I develop
          </Badge>
        </div>
        <div className="relative w-full overflow-hidden">
          <VelocityScroll defaultVelocity={2}>
            Frontend • Backend • Distributed Systems • SaaS Platforms • Scalable
            Systems •
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
