import React from "react";

export default function GameHistory(props) {
  return (
    <div className="grid grid-rows-2 grid-cols-12 bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg max-h-20 my-3 mx-5">
      <div
        className="col-span-2 row-span-2 w-full h-full bg-cover bg-no-repeat bg-center border-solid border-[1px] border-[#D7D7D7] rounded-l-lg"
        style={{ backgroundImage: `url(${props.gameThumbnail})` }}
      ></div>
      <div className="col-start-3 col-end-10 row-span-1 align-text-bottom text-sm font-bold pt-2 ml-3 xl:ml-0 pl-3">
        {props.gameName}
      </div>
      <div className="col-start-3 col-end-10 row-start-2 row-span-1 text-xs ml-3 xl:ml-0 pl-3">
        Result:{props.result}
      </div>
      <div className="col-start-11 col-span-2 row-span-2 text-center text-3xl font-bold py-3">
        {props.points}
      </div>
    </div>
  );
}
