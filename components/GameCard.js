import React from 'react'
import Link from 'next/link'

export default function GameCard(props) {    
  return (
    <div className="bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg w-full h-full">
        <div className="w-full h-60 bg-no-repeat bg-center bg-cover rounded-t-lg" style={{backgroundImage: `url(${props.thumbnails || "/img/werewolf.jpg"})`}}></div>
        <div className="mx-4 my-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <div>{props.description}</div>
            <div className="columns-2 my-4">
                <div className="flex flex-row justify-center">
                    <div>👁️</div>
                    <div>{props.viewCount} users</div>
                </div>
                <div className="flex flex-row justify-center">
                    <div>🎮</div>
                    <div>{props.playCount} users</div>
                </div>
            </div>
            <div>
                <Link href={`/games/detail-games/${props.id}`}>
                    <button className="bg-white hover:bg-[#70C1B3] text-[#70C1B3] hover:text-white font-semibold hover:font-bold border-solid border-[1px] border-[#70C1B3] rounded-lg w-full h-10" onClick={() => axios.post("/games/view-count/" + props.id).then((res) => console.log(res)).catch((err) => console.log(err))}>
                        Play This Game
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
