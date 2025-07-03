import React from "react";
import { SparklesText } from "../magicui/sparkles-text";
import { BackgroundLines } from "../ui/background-lines";

const ThankSection = () => {
	return (
    <div className="h-screen flex justify-center items-center px-4 relative">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <SparklesText className="text-6xl md:text-7xl text-center ">
          Thank you for visiting!
        </SparklesText>
      </BackgroundLines>
    </div>
  );
};

export default ThankSection;
