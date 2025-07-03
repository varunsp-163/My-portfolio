"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";
import Image from "next/image";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dynamically import LineChart only (you don't need to import Chart.js again)
const LineChart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Line),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[300px] w-full" />,
  }
);

interface Badge {
  id: string;
  icon: string;
  displayName: string;
}

interface Contest {
  contest: {
    title: string;
  };
  rating: number;
}

interface ContestDetails {
  contestAttend: number;
  contestRating: number;
  contestGlobalRanking: number;
  totalParticipants: number;
  contestTopPercentage: number;
  contestParticipation: Contest[];
}

interface UserDetails {
  avatar: string;
  birthday: string;
  name: string;
  ranking: number | null;
}

const LeetcodeSection = () => {
  const url =
    process.env.NEXT_PUBLIC_LEETCODE_API_URL ||
    "https://alfa-leetcode-api.onrender.com";
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    avatar: "",
    birthday: "",
    name: "",
    ranking: null,
  });
  const [badges, setBadges] = useState<Badge[]>([]);
  const [contestDetails, setContestDetails] = useState<ContestDetails>({
    contestAttend: 0,
    contestRating: 0,
    contestGlobalRanking: 0,
    totalParticipants: 0,
    contestTopPercentage: 0,
    contestParticipation: [],
  });
  const [loading, setLoading] = useState({
    profile: true,
    badges: true,
    contest: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchData = async () => {
      try {
        const [profileRes, badgesRes, contestRes] = await Promise.all([
          axios.get(url + "/spvarun47/"),
          axios.get(url + "/spvarun47/badges"),
          axios.get(url + "/spvarun47/contest"),
        ]);

        const badgesData = badgesRes.data.badges.map((badge: Badge) => {
          if (badge.icon.startsWith("/static")) {
            badge.icon = `https://assets.leetcode.com/static_assets/public/images/badges/${badge.icon
              .split("/")
              .pop()}`;
          }
          return badge;
        });

        setUserDetails(profileRes.data);
        setBadges(badgesData);
        setContestDetails(contestRes.data);
        setLoading({ profile: false, badges: false, contest: false });
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading({ profile: false, badges: false, contest: false });
      }
    };

    fetchData();
  }, [url, mounted]);

  const contestTitles = contestDetails.contestParticipation.map(
    (contest) => contest.contest.title
  );
  const contestRatings = contestDetails.contestParticipation.map(
    (contest) => contest.rating
  );

  const chartData = mounted
    ? {
        labels: contestTitles,
        datasets: [
          {
            label: "Contest Ratings",
            data: contestRatings,
            borderColor: resolvedTheme === "dark" ? "#3b82f6" : "#2563eb",
            backgroundColor:
              resolvedTheme === "dark"
                ? "rgba(59, 130, 246, 0.2)"
                : "rgba(37, 99, 235, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      }
    : { labels: [], datasets: [] };

  const chartOptions = mounted
    ? {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top" as const,
            labels: {
              color: resolvedTheme === "dark" ? "#e5e7eb" : "#374151",
            },
          },
        },
        scales: {
          x: {
            type: "category" as const, // ✅ Fix: force literal type
            ticks: {
              color: resolvedTheme === "dark" ? "#9ca3af" : "#6b7280",
            },
            grid: {
              color:
                resolvedTheme === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
            },
          },
          y: {
            type: "linear" as const, // ✅ Fix: force literal type
            ticks: {
              color: resolvedTheme === "dark" ? "#9ca3af" : "#6b7280",
            },
            grid: {
              color:
                resolvedTheme === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.1)",
            },
          },
        },
      }
    : {};

  const isLoading = loading.profile || loading.contest || loading.badges;

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl">
          <Card className="mb-8 w-full">
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                LeetCode Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 justify-center">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <div className="w-full max-w-6xl">
        {/* Profile Card */}
        <Card className="mb-8 w-full">
          <CardHeader>
            <CardTitle className="text-center text-3xl">
              LeetCode Profile
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Your competitive programming stats
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center space-x-4 justify-center">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userDetails.avatar} />
                  <AvatarFallback>LC</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold">{userDetails.name}</h2>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {/* {userDetails.birthday && (
                      <Badge variant="outline" className="text-lg">
                        🎂 {userDetails.birthday}
                      </Badge>
                    )} */}
                    {userDetails.ranking !== null && (
                      <Badge variant="secondary" className="text-lg">
                        🏆 Rank #{userDetails.ranking}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contest Performance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Contest Stats Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Contest Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading.contest ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Contests Attended
                    </p>
                    <p className="text-2xl font-semibold">
                      {contestDetails.contestAttend}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Current Rating
                    </p>
                    <p className="text-2xl font-semibold">
                      {contestDetails.contestRating.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Global Ranking
                    </p>
                    <p className="text-2xl font-semibold">
                      #{contestDetails.contestGlobalRanking}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Top Percentage
                    </p>
                    <div className="flex items-center gap-2">
                      <Progress
                        value={contestDetails.contestTopPercentage}
                        className="h-2"
                      />
                      <span className="text-sm font-medium">
                        {contestDetails.contestTopPercentage.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contest Graph Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Rating Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading.contest ? (
                <Skeleton className="h-[300px] w-full" />
              ) : contestDetails.contestParticipation.length > 0 ? (
                <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full mb-4">
                  <LineChart data={chartData} options={chartOptions} />
                </div>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  No contest data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Badges Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Earned Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading.badges ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-32 rounded-lg" />
                ))}
              </div>
            ) : badges.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {badges.map((badge) => (
                  <Card
                    key={badge.id}
                    className="flex flex-col items-center p-4 hover:bg-accent transition-colors"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-2">
                      <Image
                        width={64}
                        height={64}
                        src={badge.icon}
                        alt={badge.displayName}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                    <p className="text-sm font-medium text-center line-clamp-2">
                      {badge.displayName}
                    </p>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No badges earned yet
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeetcodeSection;
