import axios from "axios";
import { useEffect, useState } from "react";

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

  const getProfileDetails = async () => {
    try {
      const res = await axios.get(
        "https://alfa-leetcode-api.onrender.com/spvarun47/"
      );
      setUserDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBadges = async () => {
    try {
      const res = await axios.get(
        "https://alfa-leetcode-api.onrender.com/spvarun47/badges"
      );
      setBadges(res.data.badges);
    } catch (err) {
      console.log(err);
    }
  };

  const getContestDetails = async () => {
    try {
      const res = await axios.get(
        "https://alfa-leetcode-api.onrender.com/spvarun47/contest"
      );
      setContestDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfileDetails();
    getBadges();
    getContestDetails();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-white p-8 rounded-lg shadow-lg w-auto text-center">
        {userDetails.avatar && (
          <img
            src={userDetails.avatar}
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full mx-auto shadow-md"
          />
        )}

        {userDetails.name && (
          <h2 className="text-2xl font-bold  mt-4">{userDetails.name}</h2>
        )}
        {userDetails.birthday && (
          <p className=" mt-2">Birthday: {userDetails.birthday}</p>
        )}
        {userDetails.ranking !== null && (
          <p className=" mt-2">Ranking: {userDetails.ranking}</p>
        )}

        {badges.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold ">Badges</h3>
            <div className="flex justify-center">
              {badges.map((badge) => (
                <div key={badge.id} className="flex flex-col items-center m-2">
                  <img
                    src={badge.icon}
                    alt={badge.displayName}
                    className="w-16 h-16"
                  />
                  <p className=" mt-2 text-sm">{badge.displayName}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
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

          {contestDetails.contestParticipation.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold ">Participation</h3>
              {contestDetails.contestParticipation.map((contest, index) => (
                <div key={index} className="mt-2 p-2 flex gap-2 border-t">
                  <p className="">Contest: {contest.contest.title}</p>
                  <p className="">Rating: {contest.rating}</p>
                  <p className="">Ranking: {contest.ranking}</p>
                  <p className="">
                    Problems Solved: {contest.problemsSolved}/
                    {contest.totalProblems}
                  </p>
                  <p className="">
                    Finish Time: {Math.floor(contest.finishTimeInSeconds / 60)}{" "}
                    mins
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leetcode;
