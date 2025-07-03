"use client";

import { useTheme } from "next-themes";
import WatchIcon from "../icons/WatchIcon";
import ForkIcon from "../icons/ForkIcon";
import StarIcon from "../icons/StarIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkIcon from "../icons/LinkIcon";
import { Meteors } from "../ui/meteors";

const RepoCard = ({ repo }: { repo: any }) => {
  const { theme } = useTheme();
  console.log("Current theme:", theme);

  return (
    <div className="border p-4 rounded-xl w-full max-w-md shadow-md transition hover:shadow-lg dark:bg-[#0d1117] dark:border-[#30363d] dark:text-white bg-white border-gray-300 text-gray-800">
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-1">{repo.name}</h3>
        <p className="text-sm dark:text-gray-400 text-gray-600">
          {repo.description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-4 text-sm dark:text-gray-300 text-gray-700">
          <div className="flex items-center gap-1">
            <WatchIcon className="h-4 w-4" />
            {repo.watchers}
          </div>
          <div className="flex items-center gap-1">
            <ForkIcon className="h-4 w-4" />
            {repo.forks}
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4" />
            {repo.stargazers_count}
          </div>
        </div>

        <div className="flex space-x-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 dark:text-white text-black"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 dark:text-white text-black"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <Meteors number={20} />
    </div>
  );
};

export default RepoCard;
