import React from "react";
import Image from 'next/image'

export default function Jumbotron() {
    return (
        <>
            <div className="flex flex-col justify-center text-center w-80 m-auto mt-5">
                <Image src="/img/arrow-logo.svg" alt="Game Project Logo" width={300} height={150}/>
                <div className="font-bold text-lg">Welcome to</div>
                <div className="font-black text-4xl text-[#247BA0]">GAME PROJECT</div>
                <div>Welcome! Here you can play many kind of games created by people around the world. Support us by clicking share buttons below!</div>
                <div className="mt-3 flex flex-row justify-center">
                    <button className="bg-slate-100 hover:bg-[#70C1B3] h-10 w-10 rounded-lg mx-1 flex items-center justify-center bg-center bg-no-repeat bg-[length:25px_25px]" style={{backgroundImage: "url(/img/facebook-logo.svg)"}} href="https://www.facebook.com/binaracademy/">
                    </button>
                    <button className="bg-slate-100 hover:bg-[#70C1B3] h-10 w-10 rounded-lg mx-1 flex items-center justify-center bg-center bg-no-repeat bg-[length:25px_25px]" style={{backgroundImage: "url(/img/instagram-logo.svg)"}} href="https://www.instagram.com/academybinar/">
                    </button>
                    <button className="bg-slate-100 hover:bg-[#70C1B3] h-10 w-10 rounded-lg mx-1 flex items-center justify-center bg-center bg-no-repeat bg-[length:25px_25px]" style={{backgroundImage: "url(/img/twitter-logo.svg)"}} href="https://twitter.com/academybinar">
                    </button>
                    <button className="bg-slate-100 hover:bg-[#70C1B3] h-10 w-10 rounded-lg mx-1 flex items-center justify-center bg-center bg-no-repeat bg-[length:25px_25px]" style={{backgroundImage: "url(/img/gmail-logo.svg)"}} href="https://www.youtube.com/c/BinarAcademy">
                    </button>
                </div>
            </div>
            <div className="mt-5 mx-40 mb-2">
                <hr></hr>
            </div>
        </>
    )
}