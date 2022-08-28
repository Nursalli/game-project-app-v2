import React from 'react'
import Link from 'next/link'

export default function GameCard() {
    return (
        <div className="text-center mb-4">
            <Link href="/">
                <button className="bg-white hover:bg-[#247BA0] border-solid border-[#247BA0] border-[1px] font-bold text-xl text-[#247BA0] hover:text-white rounded-lg h-12 w-64">
                    More Games
                </button>
            </Link>
        </div>
    )
}