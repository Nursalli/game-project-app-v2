import React from 'react'
import Image from 'next/image'

export default function Profiltron() {
    return (
        <>
            <div className="flex flex-col justify-center text-center w-80 m-auto mt-5">
            <div className="grid grid-rows-4 grid-cols-12 bg-white rounded-lg my-3 mx-5">

                       
                <div className="bg-white rounded-full row-span-4 bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url(${profilePic})`}}></div>
                <div className="col-span-2 flex justify-start font-bold">{firstName}</div>
                <div className="col-span-2 flex justify-start">Aku adalah anak gembala</div>
                <div className="columns-2 my-4">
                    <div className="flex flex-row justify-center">
                        <svg class="h-4 w-4 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg>
                        <div>AUS</div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <svg class="h-4 w-4 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg>
                        <div>21/08/1997</div>
                    </div>
                </div>

                <div className="col-span-2 flex justify-start">
                    <Link href="/">
                        <button className="bg-white hover:bg-[#70C1B3] text-[#70C1B3] hover:text-white font-semibold hover:font-bold border-solid border-[1px] border-[#70C1B3] rounded-lg w-full h-10">
                            Edit Profile
                        </button>
                    </Link>
                </div>
                
		    </div>

            </div>
            <div className="mt-5 mx-40 mb-2">
                <hr></hr>
            </div>
        </>
    )
}