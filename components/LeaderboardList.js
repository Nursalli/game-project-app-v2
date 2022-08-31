import React from 'react';

export default function LeaderboardList (props) {
	return (
		<div className="grid grid-rows-2 grid-cols-12 bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg max-h-18 my-3 mx-5">
			<div className="col-span-2 row-span-2 w-10 h-10 bg-cover bg-no-repeat bg-[url(../assets/profile-image.jpg)] bg-center border-solid border-[1px] border-[#000] rounded-full my-2 ml-4" />
			<div className='col-start-3 col-end-10 row-span-1 align-text-bottom text-sm font-bold pt-2 ml-3 xl:ml-0'>{props.name}</div>
			<div className='col-start-3 col-end-10 row-start-2 row-span-1 text-xs ml-3 xl:ml-0'>{props.email}</div>
			<div className='col-start-10 col-span-3 row-span-2 text-center text-2xl font-bold py-3'>{props.points}</div>
		</div>
	)
}