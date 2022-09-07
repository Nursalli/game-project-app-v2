import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import GameCard from '../components/GameCard';
import SeeMore from '../components/SeeMore';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {

  const [games, setGame] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "games/landing")
      .then((res) => {
        setGame(res.data?.data);
        })
      .catch((err) => {
      console.log(err);
      });
  })

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="text-3xl font-bold text-center mb-5 mt-8">Most Played Games</div>
      <div className="md:grid md:grid-cols-3 md:gap-8 px-10 py-4 xl:px-40 2xl:px-80">
        {
          games.map((game) => {
            return(
              <div key={game.id}>
                <GameCard
                  id = {game.id} 
                  thumbnail= {game.thumbnail}
                  title= {game.title}
                  description= {game.description}
                  viewCount= {game.viewCount}
                  playCount= {game.playCount}
                 
                />
              </div>
            )
          })
        }  
      </div>
      <SeeMore />
      <Footer />
    </>
  )
}