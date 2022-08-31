import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Navbar() {
  let token = useSelector((state) => (state.user.token));
  let userId = useSelector((state) => (state.user.id));
  let email = useSelector((state) => (state.user.email));
  let firstName = useSelector((state) => (state.user.name));
  let profilePic = useSelector((state) => (state.user.profilePic));

  const [totalScore, setTotalScore] = useState(0);

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    if (token) {
      axios
        .get(process.env.NEXT_PUBLIC_BASE_URL + "users/badges-points/" + userId, config)
        .then((res) => {
          setTotalScore(res.data?.data?.points);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  

  return (
    <div className="flex bg-[#FFC100] w-full h-full py-2 justify-center lg:justify-between items-center text-center lg:px-48">
      <div className="hidden lg:block ">
        <Link href="/">
          <a>
            <Image src="/img/arrow-logo.svg" alt="Game Project Logo" width={300} height={50}/>
          </a>
        </Link>
      </div>
      {
        !token ? (
          <div className="flex items-center text-center">
            <Link href="/register">
              <button className="hover:text-white font-bold mx-6">  
                <a>Register</a>
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-[#FF8200] hover:text-[white] px-6 py-2 rounded-lg font-bold">  
                <a>Login</a>
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="font-bold hidden lg:block">
              <div className="text-lg">Total Score</div>
              <div className="text-4xl">{totalScore}</div>
            </div>
            <div className="flex justify-center text-left dropdown" style={{width: "300px"}}>
              <button className="bg-[#FF8200] hover:text-[white] px-3 py-1 rounded-xl grid grid-rows-2 grid-flow-col gap-x-3 items-center">
                <div className="bg-white h-10 w-10 rounded-full row-span-3 bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url(${profilePic})`}}></div>
                <div className="col-span-2 flex justify-start font-bold">{firstName}</div>
                <div className="col-span-2 flex justify-start font-normal">{email}</div>
                <div className="h-full w-full row-span-3 hover:fill-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                </div>
              </button>
              <ul className="dropdown-menu absolute hidden pt-16 w-56 z-10">
                <li className=""><button className="rounded-t bg-gray-200 hover:bg-gray-400 hover:font-bold hover:text-white py-5 px-4 w-full block whitespace-no-wrap">Profile</button></li>
                <li className=""><button className="rounded-b bg-gray-200 hover:bg-rose-700 hover:font-bold hover:text-white py-5 px-4 w-full block whitespace-no-wrap">Sign Out</button></li>
              </ul>
            </div>
          </>
        )
      }
    </div>
  )
}
