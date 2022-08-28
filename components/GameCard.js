import React from 'react'
import Link from 'next/link'

export default function GameCard() {
  return (
    <div className="bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg w-full h-full">
        <div className="w-full h-60 bg-no-repeat bg-center bg-cover rounded-t-lg" style={{backgroundImage: "url(/img/werewolf.jpg)"}}></div>
        <div className="mx-4 my-4">
            <div className="font-bold text-xl mb-2">Rock-Paper-Scissors Random</div>
            <div>Play Rock-Paper-Scissors with Computer (Organic Random)</div>
            <div className="columns-2 my-4">
                <div className="flex flex-row justify-center">
                    <div>👁️</div>
                    <div>5 users</div>
                </div>
                <div className="flex flex-row justify-center">
                    <div>🎮</div>
                    <div>3 users</div>
                </div>
            </div>
            <div>
                <Link href="/">
                    <button className="bg-white hover:bg-[#70C1B3] text-[#70C1B3] hover:text-white font-semibold hover:font-bold border-solid border-[1px] border-[#70C1B3] rounded-lg w-full h-10">
                        Play This Game
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
