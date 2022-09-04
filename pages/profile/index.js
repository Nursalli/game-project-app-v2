import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Profiltron from '../../components/Profiltron';
import GameHistory from '../../components/GameHistory';
import PlayedGames from '../../components/PlayedGames';

function Index() {
  return (
    <>
      <Navbar />
      <Profiltron />

        <div className="md:grid md:grid-cols-2 md:gap-8 px-10 pt-2 pb-12 xl:px-40 2xl:px-80 columns-2 mb-8">
             
            <p className='text-2xl font-bold mb-2'>Played Games</p>
            <p className='text-2xl font-bold mb-2'>Games History</p>

            {/* Left Side - Played Games */}
            <div className='bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md max-h-96 pt-2 px-4 -mt-8'>
                <PlayedGames />

            </div>

            {/* Right Side - Game History */}

            <div className='bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md max-h-96 pt-2 px-4 -mt-8'>
					<GameHistory result="      WIN" points="5" />
                    <GameHistory result="      LOSE" points="0" />
                    <GameHistory result="      DRAW" points="0" />
                    <GameHistory result="      WIN" points="5" />
			</div>
        </div>

      <Footer />
    </>
  )
}



export default Index