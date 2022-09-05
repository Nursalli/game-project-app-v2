import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Profiltron from "../../components/Profiltron";
import GameHistory from "../../components/GameHistory";
import PlayedGames from "../../components/PlayedGames";
import { useSelector } from "react-redux";
import { useProfileEditService } from "../../module/profile/services/service";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useSelector((state) => state.profileEdit);
  const { myGames, histories } = useSelector((state) => state.profile);
  const {
    handleGetBio,
    handleGetMyGames,
    handleGetMyHistories,
    handleGetBagdesPoints,
  } = useProfileEditService();

  useEffect(() => {
    const fetchData = async () => {
      await handleGetBio(id);
      await handleGetMyGames(id);
      await handleGetMyHistories(id);
      await handleGetBagdesPoints(id);
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <Profiltron />

      <div className="md:grid md:grid-cols-2 md:gap-8 px-10 pt-2 pb-12 xl:px-40 2xl:px-80 columns-2 mb-8">
        <p className="text-2xl font-bold mb-2">Played Games</p>
        <p className="text-2xl font-bold mb-2">Games History</p>

        {/* Left Side - Played Games */}
        <div className="bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md max-h-96 pt-2 px-4 -mt-8">
          {myGames.map((games, key) => {
            return (
              <PlayedGames
                key={key}
                gameThumbnail={games.gameThumbnail}
                gameName={games.gameName}
                totalPointsEarned={games.totalPointsEarned}
                gameUrl={games.gameUrl}
              />
            );
          })}
        </div>

        {/* Right Side - Game History */}

        <div className="bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md max-h-96 pt-2 px-4 -mt-8">
          {histories.map((history, key) => {
            return (
              <GameHistory
                key={key}
                result={history.status}
                points={history.pointsEarned}
                gameThumbnail={history.gameThumbnail}
                gameName={history.gameName}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
