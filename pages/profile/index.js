import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GameCard from '../../components/GameCard';
import Profiltron from '../../components/Profiltron';
import GameHistory from '../../components/GameHistory';
import PlayedGames from '../../components/PlayedGames';

function Index() {
  return (
    <>
      <Navbar />
      <Profiltron />

        <div className='grid grid-rows-2 grid-cols-2 gap-x-7 md:mx-28 md:mb-16 md:mt-16'>

            {/* Left Side - Played Games */}

            <p className='text-2xl font-bold mb-2'>Played Games</p>
            <div className='bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md max-h-96 pt-4 px-4 overflow-auto '>
                <PlayedGames />

            </div>


        

            {/* Right Side - Game History */}
            
            <p className='text-2xl font-bold mb-2'>Games History</p>
            <div className='bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md max-h-96 pt-4 px-4 overflow-auto '>
					<GameHistory result="WIN" points="5" />
                    <GameHistory result="LOSE" points="0" />
                    <GameHistory result="DRAW" points="0" />
                    <GameHistory result="WIN" points="5" />
			</div>

          

        </div>
        
      <Footer />
    </>
  )
}



export default Index