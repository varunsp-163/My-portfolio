import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { FadeLoader } from "react-spinners";
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

const Leetcode = () => {
  const [userDetails, setUserDetails] = useState({
    avatar: "",
    birthday: "",
    name: "",
    ranking: null,
  });
  const [badges, setBadges] = useState([]);
  const [contestDetails, setContestDetails] = useState({
    contestAttend: 0,
    contestRating: 0,
    contestGlobalRanking: 0,
    totalParticipants: 0,
    contestTopPercentage: 0,
    contestParticipation: [],
  });
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingBadges, setLoadingBadges] = useState(true);
  const [loadingContest, setLoadingContest] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, badgesRes, contestRes] = await Promise.all([
          axios.get("https://alfa-leetcode-api.onrender.com/spvarun47/"),
          axios.get("https://alfa-leetcode-api.onrender.com/spvarun47/badges"),
          axios.get("https://alfa-leetcode-api.onrender.com/spvarun47/contest"),
        ]);
        setUserDetails(profileRes.data);
        setBadges(badgesRes.data.badges);
        setContestDetails(contestRes.data);
        setLoadingProfile(false);
        setLoadingBadges(false);
        setLoadingContest(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const contestTitles = contestDetails.contestParticipation.map(
    (contest) => contest.contest.title
  );
  const contestRankings = contestDetails.contestParticipation.map(
    (contest) => contest.ranking
  );

  const chartData = {
    labels: contestTitles,
    datasets: [
      {
        label: "Contest Rankings",
        data: contestRankings,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex text-white flex-col items-center p-4">
      <div className="w-full max-w-2xl">
        <div className="p-6 rounded-lg  mb-6 flex items-center">
          {loadingProfile ? (
            <FadeLoader color={"#36D7B7"} loading={loadingProfile} />
          ) : (
            <img
              src={userDetails.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mx-auto md:mx-0 shadow-md"
            />
          )}
          <div className="md:ml-6 text-center md:text-left">
            {userDetails.name && (
              <h2 className="text-2xl font-bold ">{userDetails.name}</h2>
            )}
            {userDetails.birthday && (
              <p className="">Birthday: {userDetails.birthday}</p>
            )}
            {userDetails.ranking !== null && (
              <p className="">Ranking: {userDetails.ranking}</p>
            )}
          </div>
        </div>

        {loadingContest ? (
          <FadeLoader color={"#36D7B7"} loading={loadingContest} />
        ) : (
          contestDetails.contestParticipation.length > 0 && (
            <div className=" p-6 rounded-lg  mb-6">
              <h3 className="text-xl font-semibold ">Contest Rankings Graph</h3>
              <Line data={chartData} />
            </div>
          )
        )}

        <div className=" p-6 rounded-lg  mb-6">
          <h3 className="text-xl font-semibold ">Contest Details</h3>
          <p className=" mt-2">Attended: {contestDetails.contestAttend}</p>
          <p className=" mt-2">
            Rating: {contestDetails.contestRating.toFixed(2)}
          </p>
          <p className=" mt-2">
            Global Ranking: {contestDetails.contestGlobalRanking}
          </p>
          <p className=" mt-2">
            Total Participants: {contestDetails.totalParticipants}
          </p>
          <p className=" mt-2">
            Top Percentage: {contestDetails.contestTopPercentage.toFixed(2)}%
          </p>
        </div>

        {loadingBadges ? (
          <FadeLoader color={"#36D7B7"} loading={loadingBadges} />
        ) : (
          badges.length > 0 && (
            <div className=" p-6 rounded-lg  mb-6">
              <h3 className="text-xl font-semibold ">Badges</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {badges.map((badge) => (
                  <div key={badge.id} className="flex flex-col">
                    {badge.id == 4183371 ? (
                      <img
                        src={
                          "https://leetcode.com/static/images/badges/dcc-2024-6.png"
                        }
                        alt={badge.displayName}
                        className="w-16 h-16"
                      />
                    ) : (
                      <img
                        src={badge.icon}
                        alt={badge.displayName}
                        className="w-16 h-16"
                      />
                    )}

                    <p className=" mt-2 text-sm">{badge.displayName}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Leetcode;
