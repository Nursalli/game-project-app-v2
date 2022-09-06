import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GameCard from '../../components/GameCard';
import axios from 'axios';

function Index() {
  const [games, setGame] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "games/listing")
      .then((res) => {
        setGame(res.data?.data);
        })
      .catch((err) => {
      console.log(err);
      });
  })

  const handlePlay = () => {
		axios
		.post(process.env.NEXT_PUBLIC_BASE_URL + "games/view-count/" + id)
		.then((res) => {
			router.push("/games/detail-games/" + id);
		})
		.catch((err) => {
			router.push("/games");
			console.log(err);
		});
	};  
  return (
    <>
      <Navbar />
      <div className="text-3xl font-bold text-center mb-5 mt-8">List of Our Games</div>
      <div className='md:grid md:grid-cols-3 md:gap-8 px-10 pt-4 pb-16 xl:px-40 2xl:px-80"'>
        {
          games.map((game) => {
            return(
              <div key={game.id}>
                <GameCard 
                  thumbnails= {game.thumbnails}
                  title= {game.title}
                  description= {game.description}
                  viewCount= {game.viewCount}
                  playCount= {game.playCount}
                  handlePlay= {handlePlay} 
                />
              </div>
            )
          })
        }  
      </div>
      <Footer />
    </>
  )
}

export default Index