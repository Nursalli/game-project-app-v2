import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setRunningGame } from '../../reducer/game.reducer';
import { useRouter } from 'next/router';
import axios from 'axios';
import calculateSuit from '../../utils/suitScript'

const Play = () => {
  const dispatch = useDispatch();
	const router = useRouter();
  
  const { id } = router.query;
  const [game, setGame] = useState({});
	const [readyInput, setReadyInput] = useState(true);
	const [gameFinished, setGameFinished] = useState(false);

  const [thisGameState, setThisGameState] = useState(useSelector((state) => state.game.runningGame));

	useEffect(() => {
    console.log(thisGameState);
		if(!thisGameState && id) {			
        axios
          .get(process.env.NEXT_PUBLIC_BASE_URL + "games/" + id, "", "")
          .then((res) => {
            setGame(res.data?.data);
            setThisGameState(
              {
                gameId: id,
                requiredRound: res.data?.data?.numberOfRounds,
                runningRound: []
              }
            )
            dispatch(setRunningGame(
              {
                gameId: id,
                requiredRound: res.data?.data?.numberOfRounds,
                runningRound: []
              }
            ))
            setReadyInput(true);
            setGameFinished(false);
          })
          .catch((err) => {
            console.log(err);
          });
		} else {
      console.log("initiated")
    }
	}, [id, dispatch, thisGameState])
	
	const handleSuitClick = (e) => {
    if(readyInput === true && gameFinished === false) {
      const userInput = e.currentTarget.value;
  
      const availableSuit = ["rock", "scissors", "paper"]
      const computerInput = availableSuit[Math.floor(Math.random()*availableSuit.length)];
  
      const result = calculateSuit(userInput, computerInput);
  
      const pushedResult = {
        round: thisGameState.runningRound.length + 1,
        playerChoice: userInput,
        computerChoice: computerInput,
        result: result
      }
      
      const newGameState = JSON.parse(JSON.stringify(thisGameState));
      newGameState.runningRound.push(pushedResult);
  
      setThisGameState(newGameState);
      dispatch(setRunningGame(newGameState));
  
      setReadyInput(false);
  
      if(Number(newGameState.runningRound.length) === Number(game.numberOfRounds)) {
        setGameFinished(true);
      };
    }
	};

  const handleRefreshClick = (e) => {
    if(gameFinished === true) {
      setThisGameState(
        {
          gameId: id,
          requiredRound: game.numberOfRounds,
          runningRound: []
        }
      )
      dispatch(setRunningGame(
        {
          gameId: id,
          requiredRound: game.numberOfRounds,
          runningRound: []
        }
      ))
      setGameFinished(false);
    }
    console.log("refresh clicked")
    setReadyInput(true);
	};

	return (
		<>
			<Navbar />
				<div className="grid grid-rows-12 grid-cols-3 bg-white border-solid border-[2px] border-[#D7] rounded-lg md:mx-24 md:px-14 xl:mx-28 mt-12 mb-14 xl:px-18">
					{/* Title */}
					<div className="row-span-1 col-start-2 text-center">
						<p className='lg:text-xl xl:text-2xl font-semibold'>Rock-Paper-Scissors Random</p>
						<p className='lg:text-xl xl:text-2xl font-semibold'>Round 3</p>
					</div>

					{/* Round Status */}
					<div className="row-start-2 col-start-2 flex justify-center items-center">
						<div className="rounded-full bg-zinc-300 h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2"></div>
						<div className="rounded-full bg-zinc-300 h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2"></div>
						<div className="rounded-full bg-zinc-300 h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2"></div>
					</div>
					
					{/* Player Side */}
					<div className="row-start-3 col-start-1 text-xl lg:text-3xl xl:text-4xl font-bold text-center">
						<p>YOU</p>

					</div>
					<div className="row-start-4 col-start-1 flex justify-center items-center mt-2">
            <button className="focus:bg-slate-200 bg-[length:35px_20px] lg:bg-[length:65px_45px] xl:bg-[length:85px_65px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-red-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-3 mx-2" style={{backgroundImage: "url(/img/batu.png)"}} disabled={!readyInput} onClick={handleSuitClick} value="rock" />
						<button className="focus:bg-slate-200 bg-[length:30px_40px] lg:bg-[length:60px_70px] xl:bg-[length:80px_90px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-green-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-3 mx-2" style={{backgroundImage: "url(/img/gunting.png)"}} disabled={!readyInput} onClick={handleSuitClick} value="scissors" />
					</div>

					<div className="row-start-5 col-start-1 flex justify-center content-start pb-10">
						<button className="focus:bg-slate-200 bg-[length:25px_35px] lg:bg-[length:50px_80px] xl:bg-[length:70px_100px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-yellow-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36" style={{backgroundImage: "url(/img/kertas.png)"}} disabled={!readyInput} onClick={handleSuitClick} value="paper" />
					</div>

					{/* Winning Status */}
					<div className="row-start-4 col-start-2 flex justify-center items-end">
						<div className="text-2xl lg:text-5xl xl:text-6xl font-black flex items-center text-center h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-2">YOU WIN</div>
					</div>

					{/* Refresh Button */}
					<div className="row-start-5 col-start-2 flex justify-center items-center">
						<button className="cursor-pointer active:bg-slate-200 h-10 w-10 lg:h-16 lg:w-16 xl:h-20 xl:w-20 lg:bg-[length:60px_60px] xl:bg-[length:70px_70px] bg-cover bg-no-repeat bg-center rounded-full" style={{backgroundImage : "url(/img/refresh.png)"}} onClick={handleRefreshClick} />
					</div>

					{/* Opponent Side */}
					<div className="row-start-3 col-start-3 text-xl lg:text-3xl xl:text-4xl font-bold text-center">
						<p>OPPONENT</p>
					</div>
					<div className="row-start-4 col-start-3 flex justify-center items-center mt-2">
						<button className="focus:bg-slate-200 bg-[length:35px_20px] lg:bg-[length:65px_45px] xl:bg-[length:85px_65px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-red-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-3 mx-2" style={{backgroundImage: "url(/img/batu.png)"}} disabled={true} />
						<button className="focus:bg-slate-200 bg-[length:30px_40px] lg:bg-[length:60px_70px] xl:bg-[length:80px_90px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-green-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36 mt-3 mx-2" style={{backgroundImage: "url(/img/gunting.png)"}} disabled={true} />
					</div>
					<div className="row-start-5 col-start-3 flex justify-center content-start pb-10">
						<button className="focus:bg-slate-200 bg-[length:25px_35px] lg:bg-[length:50px_80px] xl:bg-[length:70px_100px] bg-no-repeat bg-center border-solid border-[4px] lg:border-[8px] border-yellow-500 rounded-full h-16 w-16 lg:h-28 lg:w-28 xl:h-36 xl:w-36" style={{backgroundImage: "url(/img/kertas.png)"}} disabled={true} />
					</div>

				</div>
			<Footer />
		</>
	)
}

export default Play;