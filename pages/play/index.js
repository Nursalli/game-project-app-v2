import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Play = () => {

	return (
		<>
			<Navbar />
				<div className="grid grid-rows-12 grid-cols-3 bg-white border-solid border-[2px] border-[#D7] rounded-lg md:mx-24 md:px-14 xl:mx-28 mt-12 mb-14 xl:px-18">
					{/* Title */}
					<div className="row-span-1 col-start-2 text-center">
						<p className='lg:text-xl xl:text-2xl font-semibold'>Rock-Paper-Scissors Random</p>
						<p className='lg:text-xl xl:text-2xl font-semibold'>Round 3</p>
					</div>

					{/* Round Status */}
					<div className="row-start-2 col-start-2 flex justify-center items-center">
						<div className="rounded-full bg-zinc-300 h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2"></div>
						<div className="rounded-full bg-zinc-300 h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2"></div>
						<div className="rounded-full bg-zinc-300 h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2"></div>
					</div>
					
					{/* Player Side */}
					<div className="row-start-3 col-start-1 text-xl lg:text-3xl xl:text-4xl font-bold text-center">
						<p>YOU</p>

					</div>
					<div className="row-start-4 col-start-1 flex justify-center items-center mt-2">
						<div className="cursor-pointer active:bg-slate-200 bg-[length:35px_20px] lg:bg-[length:65px_45px] xl:bg-[length:85px_65px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-red-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-3 mx-2" style={{backgroundImage: "url(/img/batu.png)"}} />
						<div className="cursor-pointer active:bg-slate-200 bg-[length:30px_40px] lg:bg-[length:60px_70px] xl:bg-[length:80px_90px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-green-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-3 mx-2" style={{backgroundImage: "url(/img/gunting.png)"}} />
					</div>

					<div className="row-start-5 col-start-1 flex justify-center content-start pb-10">
						<div className="cursor-pointer active:bg-slate-200 bg-[length:25px_35px] lg:bg-[length:50px_80px] xl:bg-[length:70px_100px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-yellow-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36" style={{backgroundImage: "url(/img/kertas.png)"}} />
					</div>

					{/* Winning Status */}
					<div className="row-start-4 col-start-2 flex justify-center items-end">
						<div className="text-2xl lg:text-5xl xl:text-6xl font-black flex items-center text-center h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-2">YOU WIN</div>
					</div>

					{/* Refresh Button */}
					<div className="row-start-5 col-start-2 flex justify-center items-center">
						<button className="cursor-pointer active:bg-slate-200 h-10 w-10 lg:h-16 lg:w-16 xl:h-20 xl:w-20 bg-[length:35px_35px] lg:bg-[length:60px_60px] xl:bg-[length:70px_70px] bg-cover bg-no-repeat bg-center rounded-full" style={{backgroundImage : "url(/img/refresh.png)"}} />
					</div>

					{/* Opponent Side */}
					<div className="row-start-3 col-start-3 text-xl lg:text-3xl xl:text-4xl font-bold text-center">
						<p>OPPONENT</p>
					</div>
					<div className="row-start-4 col-start-3 flex justify-center items-center mt-2">
						<div className="cursor-pointer active:bg-slate-200 bg-[length:35px_20px] lg:bg-[length:65px_45px] xl:bg-[length:85px_65px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-red-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-3 mx-2" style={{backgroundImage: "url(/img/batu.png)"}} />
						<div className="cursor-pointer active:bg-slate-200 bg-[length:30px_40px] lg:bg-[length:60px_70px] xl:bg-[length:80px_90px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-green-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-3 mx-2" style={{backgroundImage: "url(/img/gunting.png)"}} />
					</div>
					<div className="row-start-5 col-start-3 flex justify-center content-start pb-10">
						<div className="cursor-pointer active:bg-slate-200 bg-[length:25px_35px] lg:bg-[length:50px_80px] xl:bg-[length:70px_100px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-yellow-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36" style={{backgroundImage: "url(/img/kertas.png)"}} />
					</div>

				</div>
			<Footer />
		</>
	)
}

export default Play;