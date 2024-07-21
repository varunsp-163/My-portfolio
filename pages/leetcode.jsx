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
    <div className="flex text-white flex-col items-center w-full">
      <div className=" rounded-lg  mb-6 flex items-center">
        {!loadingProfile && !loadingContest && !loadingBadges && (
          <img
            src={userDetails.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto md:mx-0 shadow-md"
          />
        )}
        {!loadingProfile && !loadingContest && !loadingBadges && (
          <div className="md:ml-6 text-center md:text-left">
            {userDetails.name && (
              <h2 className="text-2xl font-bold text-white">
                {userDetails.name}
              </h2>
            )}
            {userDetails.birthday && (
              <p className="text-gray-300">Birthday: {userDetails.birthday}</p>
            )}
            {userDetails.ranking !== null && (
              <p className="text-gray-300">Ranking: {userDetails.ranking}</p>
            )}
          </div>
        )}
      </div>
      {loadingProfile && loadingContest && loadingBadges && (
        <FadeLoader color={"#36D7B7"} loading={loadingContest} />
      )}
      {!loadingProfile &&
        !loadingContest &&
        !loadingBadges &&
        contestDetails.contestParticipation.length > 0 && (
          <div className="  rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-white">
              Contest Rankings Graph
            </h3>
            <Line data={chartData} />
          </div>
        )}
      {!loadingProfile && !loadingContest && !loadingBadges && (
        <div className="  rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-white">Contest Details</h3>
          <p className="text-gray-300 mt-2">
            Attended: {contestDetails.contestAttend}
          </p>
          <p className="text-gray-300 mt-2">
            Rating: {contestDetails.contestRating.toFixed(2)}
          </p>
          <p className="text-gray-300 mt-2">
            Global Ranking: {contestDetails.contestGlobalRanking}
          </p>
          <p className="text-gray-300 mt-2">
            Total Participants: {contestDetails.totalParticipants}
          </p>
          <p className="text-gray-300 mt-2">
            Top Percentage: {contestDetails.contestTopPercentage.toFixed(2)}%
          </p>
        </div>
      )}

      {!loadingProfile &&
        !loadingContest &&
        !loadingBadges &&
        badges.length > 0 && (
          <div className="  rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-white">Badges</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 mt-4">
              {badges.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center">
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
                  <p className="text-gray-300 mt-2 text-sm">
                    {badge.displayName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Leetcode" },
  };
}

export default Leetcode;
