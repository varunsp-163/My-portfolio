import ResumeDock from "@/components/dock";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <HeroSection />
        <ResumeDock />
        <IntroSection />
      </div>
    </div>
  );
}
