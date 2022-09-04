import React from 'react'
import Link from 'next/link'


export default function Profiltron() {

    return (
        <>
            
            <div className="grid grid-rows-4 grid-flow-col gap-x-3 items-center bg-white max-h-120 my-8 mx-5">

                <div className="col-start-5 row-start-1 row-span-4 col-span-2 w-full h-full rounded-full bg-cover bg-no-repeat bg-center bg-white bg-[url(../assets/profile-image.jpg)] my-2 -ml-4" />
			    <div className='col-start-7 col-end-12 row-start-1 row-span-1 align-text-bottom text-2xl font-bold pt-2 ml-3 xl:ml-0'>Nama Nami</div>
			    <div className='col-start-7 col-end-12 row-start-2 row-span-1 text-l ml-3 xl:ml-0 -mt-5' >Aku adalah anak gembala</div>
                

                <div className='col-start-7 col-end-8 my-1 row-start-3 row-span-1 columns-2 -mt-4'>
                    <div className="flex flex-row justify-left">
                        <svg className="h-4 w-4 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg>
                        <div>AUS</div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <svg className="h-4 w-4 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg>
                        <div>21/08/1997</div>
                    </div>
                </div>

                <div className='col-start-7 col-end-8 row-start-4 row-span-2 ml-3 xl:ml-0'>
                <Link href="/edit-profile">
                        <button className="bg-white hover:bg-[#70C1B3] text-[#70C1B3] hover:text-white font-semibold hover:font-bold border-solid border-[1px] border-[#70C1B3] rounded-lg w-full h-10 mb-2">
                        Edit Profile
                        </button>
                    </Link>
                </div>

		    </div>
           
            <div className="mt-5 mx-40 mb-2">
                <hr></hr>
            </div>


        </>
    )
}

