
export default function ProfileCounter (props) {
	return (
		<div className='bg-white border-solid border-[1px] border-[#D7D7D7] rounded-lg shadow-md text-xs font-semibold text-center xl:text-sm flex-initial h-20 w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 pt-3'>
			{props.category}
			<div className="text-lg text-center font-bold md:text-xl lg:text-3xl xl:text-6xl pt-2">
				{props.counted}
			</div>
		</div>
	)
}