"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import skills from "./data/skills";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

const SkillSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sm:px-30 px-8 mt-30 py-10 flex flex-col gap-8 overflow-x-hidden"
    >
      <div className="flex justify-center items-center flex-col gap-4">
        <Badge
          variant="default"
          className="sm:text-4xl text-3xl font-bold tracking-wide bg-[#00FFFF]"
        >
          My Skills
        </Badge>
      </div>
      {Object.keys(skills).map((skill, i) => (
        <React.Fragment key={skill}>
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}
          >
            <h2 className="sm:text-4xl text-3xl font-bold tracking-wide">
              {skill}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            {skills[skill].map((technology) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button variant="outline" size="sm" className="text-md">
                  <Image
                    width={18}
                    height={18}
                    alt={technology.name}
                    src={technology.img}
                    className="rounded-xs"
                  />
                  {technology.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>
          <Separator className="my-1" />
        </React.Fragment>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center"
      >
        <h2 className="sm:text-2xl text-xl font-bold tracking-wide text-[#8D60E0]">
          ...and many more
        </h2>
      </motion.div>
    </motion.div>
  );
};

export default SkillSection;
