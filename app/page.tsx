import ResumeDock from "@/components/dock";
import GithubSection from "@/components/sections/GithubSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <GithubSection />
      <ResumeDock />
    </div>
  );
}
