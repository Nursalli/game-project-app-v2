import React, { useEffect } from "react";
import Link from "next/link";


export default function PlayedGames(props) {
  return (
    <div className="grid grid-rows-4 grid-cols-12 bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg max-h-21 my-3 mx-5">
      <div
        className="col-span-4 row-span-4 w-full h-full bg-cover bg-no-repeat bg-center border-solid border-[1px] border-[#D7D7D7] rounded-l-lg"
        style={{ backgroundImage: `url(${props.gameThumbnail})` }}
      ></div>
      <div className="col-start-5 col-end-11 row-span-2 text-sm font-bold pt-3 ml-3 xl:ml-0 pl-3">
        {props.gameName}
      </div>
      <div className="col-start-5 col-end-11 row-start-3 row-span-1 text-xs ml-3 xl:ml-0 pl-3 text-gray-400">
        Total Score
      </div>
      <div className="col-start-5 col-end-11 row-start-4 row-span-1 text-2xl ml-3 xl:ml-0 pl-3 font-bold -mt-2">
        {props.totalPointsEarned ? props.totalPointsEarned : 0}
      </div>
      <div className="col-start-9 col-span-4 row-start-3 row-span-2 pr-3">
        <Link href={props.gameUrl ? props.gameUrl : "#"}>
          <button className="bg-white hover:bg-[#70C1B3] text-[#70C1B3] hover:text-white font-semibold hover:font-bold border-solid border-[1px] border-[#70C1B3] rounded-lg w-full h-10 mb-2">
            Play This Game
          </button>
        </Link>
      </div>
    </div>
  );
}
