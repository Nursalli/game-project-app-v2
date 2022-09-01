import React from 'react';


export default function PlayedGames () {
	return (
		<div className="grid grid-rows-3 grid-cols-12 bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg max-h-18 my-3 mx-5">
			<div className="col-span-2 row-span-2 w-full h-full bg-cover bg-no-repeat bg-center border-solid border-[1px] border-[#D7D7D7] rounded-full my-2 ml-4" style={{backgroundImage: "url(/img/werewolf.jpg)"}}></div>
			<div className="col-start-4 col-end-10 row-span-1 align-text-bottom text-sm font-bold pt-2 ml-3 xl:ml-0">Rock-Paper-Scissors Random</div>
			<div className="col-start-4 col-end-10 row-start-2 row-span-1 text-xs ml-3 xl:ml-0 text-gray-400">Total Score</div>
			<div className="col-start-4 col-end-10 row-start-3 row-span-1 text-xl ml-3 xl:ml-0">50</div>
			<div className="col-start-8 col-span-5 row-span-2 py-3">
				<Link href="/">
                    <button className="bg-white hover:bg-[#70C1B3] text-[#70C1B3] hover:text-white font-semibold hover:font-bold border-solid border-[1px] border-[#70C1B3] rounded-lg w-full h-10">
                        Play This Game
                    </button>
                </Link>
			</div>
		</div>
	)
}

