"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// disable SSR for GitHubCalendar
const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});
import RepoCard from "./RepoCard";
import { useTheme } from "next-themes";
import { SparklesCore } from "../ui/sparkles";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { BorderBeam } from "../magicui/border-beam";
import { NumberTicker } from "../magicui/number-ticker";
import { FlipText } from "../magicui/flip-text";
import { FadeLoader } from "react-spinners";

const GithubSection = () => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const pageTheme = useTheme();
  console.log("Current theme:", pageTheme);
  // Correct theme structure for react-github-calendar
  const theme = {
    dark: [
      "#161B22", // level 0
      "#0e4429", // level 1
      "#006d32", // level 2
      "#26a641", // level 3
      "#39d353", // level 4
    ],
    light: [
      "#ebedf0", // level 0
      "#9be9a8", // level 1
      "#40c463", // level 2
      "#30a14e", // level 3
      "#216e39", // level 4
    ],
  } as any;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
        const token = process.env.NEXT_PUBLIC_GITHUB_API_KEY;

        const headers = {
          Authorization: `token ${token}`,
        };

        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { headers }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            headers,
          }),
        ]);

        console.log("Repo Res:", repoRes);
        console.log("User Res:", userRes);
        if (!userRes.ok || !repoRes.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const userData = await userRes.json();
        let reposData = await repoRes.json();

        reposData = reposData
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setUser(userData);
        setRepos(reposData);
      } catch (err: any) {
        console.error("GitHub fetch error:", err.message);
        setError("Failed to load GitHub data.");
      }
    };

    fetchGitHubData();
  }, []);

  if (error)
    return (
      <div className="w-full items-center justify-center flex felx-col">
        <p>{error}</p>;
      </div>
    );
  if (!user)
    return (
      <div className="w-full items-center justify-center flex felx-col">
        <FadeLoader color={"#36D7B7"} loading={true} />
      </div>
    );
  const words = [
    {
      text: "Checkout",
    },
    {
      text: "my",
    },
    {
      text: "github",
    },
    {
      text: user.login,
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const resolvedTheme =
    pageTheme.theme === "system"
      ? pageTheme.systemTheme
      : pageTheme.theme === "dark"
      ? "dark"
      : "light";

  return (
    <div className="p-4 flex flex-col items-center justify-center my-6 w-[100%]">
      <div className="mb-4 flex flex-col items-center justify-center">
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={90}
          height={90}
          style={{ borderRadius: "50%" }}
        />

        <TypewriterEffectSmooth words={words} />

        <p className="text-xl sm:text-2xl font-bold tracking-tighter text-black dark:text-white flex">
          <NumberTicker
            value={user.public_repos}
            className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white mr-1"
          />
          Repositories
        </p>
        <p className="text-xl sm:text-2xl font-bold tracking-tighter text-black dark:text-white flex">
          <NumberTicker
            value={user.followers}
            className="whitespace-pre-wrap font-medium tracking-tighter text-black dark:text-white mr-1"
          />
          Followers
        </p>
      </div>

      <div className="mb-4 relative max-w-[86vw]">
        <div className="w-full">
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME || ""}
            theme={theme}
            hideColorLegend
            hideMonthLabels
            colorScheme={resolvedTheme}
          />
        </div>
        <BorderBeam duration={8} size={100} />
      </div>

      {/* <div className="flex flex-wrap gap-4 justify-center w-full">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div> */}
    </div>
  );
};

export default GithubSection;
