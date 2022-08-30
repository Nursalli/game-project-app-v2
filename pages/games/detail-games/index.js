import React from 'react';
import Navbar from '../../../components/Navbar';
import ProfileCounter from './components/ProfileCounter';
import LeaderboardList from '../../../components/LeaderboardList';
import Footer from '../../../components/Footer';

function Index () {
	return (
		<>
			<Navbar />
				<a href='#' className='inline-block absolute top-24 left-28 text-lg text-blue-500 hover:text-blue-800 tracking-wide'>back to all games
				</a>

				{/* Container */}
				<div className='grid grid-rows-4 grid-cols-2 gap-x-7 md:mx-28 md:mb-16 md:mt-16 h-full'>

					{/* Left Side - Game's Card */}
					<div className='row-span-full bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md'>
						<p className='text-3xl font-bold tracking-wider px-8 pt-8 '>Rock-Paper-Scissors Random</p>
						<div className="bg-contain bg-no-repeat text-center max-h-80 px-8 py-3">
							<img src="/img/werewolf.jpg" />
						</div>
						<p className='text-xl font-semibold tracking-wider px-8 py-3'>Play Rock-Paper-Scissors with Computer (Organic Random)</p>
						<div className='text-center px-2'>
							<button className='bg-white hover:bg-[#70C1B3] text-[#70C1B3] hover:text-white font-semibold hover:font-bold border-solid border-[1px] border-[#70C1B3] rounded-lg py-2 px-4 mx-6 mb-6 w-10/12 xl:w-11/12' >
								Play Now
							</button>
						</div>
					</div>

					{/* Right Side - Top - Counter Card */}
					<div className='row-span-1 grid grid-cols-4 gap-4 justify-items-center'>
						<ProfileCounter category="Viewed By" counted="5" />
						<ProfileCounter category="Played By" counted="3" />
						<ProfileCounter 
							category="Played" 
							counted={
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 fill-red-500 ml-5 lg:ml-6 xl:ml-8">
  								<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
								</svg>
								// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 fill-green-500 ml-5 lg:ml-6 xl:ml-8">
								// 	<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
								// </svg>							
							}/>
						<ProfileCounter category="My Total Score" counted="0"/>
					</div>
					
					{/* Right Side - Bottom - Leaderboards Card */}
					<div className='row-start-2 row-span-3'>
						<p className='text-2xl font-bold mb-2'>Leaderboards</p>
						<div className='bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md max-h-96 pt-4 px-4 overflow-auto '>
							<LeaderboardList name="First Last" email="firstlast@email.com" points="1000" />
							<LeaderboardList name="First Last" email="firstlast2@email.com" points="900" />
							<LeaderboardList name="First Last" email="firstlast3@email.com" points="800" />
							<LeaderboardList name="First Last" email="firstlast4@email.com" points="700" />
							<LeaderboardList name="First Last" email="firstlast5@email.com" points="600" />
							<LeaderboardList name="First Last" email="firstlast6@email.com" points="500" />
							<LeaderboardList name="First Last" email="firstlast7@email.com" points="400" />
						</div>
					</div>
				</div>
			<Footer />
		</>
	)
}

export default Index;