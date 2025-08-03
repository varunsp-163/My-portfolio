import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import ext from "./ext_img.png";
const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <PinContainer
        title="MQ TimeTable Extractor"
        href="https://chromewebstore.google.com/detail/timetable-extractor/ecjmlljhojhhljmpmnkaiepmecmdifpc?authuser=0&hl=en"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            TimeTable Extractor
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Check out this extension that extracts timetable data from the
              estudent time table and helps you sync it to your calender
            </span>
          </div>
          <Image
            src={ext}
            alt="Timetable Extractor"
            className="mt-4 rounded-lg shadow-lg"
          />
        </div>
      </PinContainer>
    </div>
  );
};

export default Project;
