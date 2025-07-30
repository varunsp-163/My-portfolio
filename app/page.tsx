import ResumeDock from "@/components/dock";
import ExperienceSection from "@/components/sections/ExperienceSection";
import GithubSection from "@/components/sections/GithubSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import LeetcodeSection from "@/components/sections/LeetcodeSection";
import SkillSection from "@/components/sections/SkillSection";
import ThankSection from "@/components/sections/ThanksSection";
import { Analytics } from "@vercel/analytics/react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
export default function Home() {
  return (
    <div className="relative">
      <SmoothCursor />
      <Analytics />
      <HeroSection />
      <IntroSection />
      <SkillSection />
      <ExperienceSection />
      <GithubSection />
      <LeetcodeSection />
      <ThankSection />
      <ResumeDock />
    </div>
  );
}
