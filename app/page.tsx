import ResumeDock from "@/components/dock";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import ExperienceSection from "@/components/sections/ExperienceSection";
import GithubSection from "@/components/sections/GithubSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ThankSection from "@/components/sections/ThanksSection";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <IntroSection />

      <ExperienceSection />
      <GithubSection />

      <ThankSection />
      <ResumeDock />
    </div>
  );
}
