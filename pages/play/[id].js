import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setRunningGame, setInitGame } from '../../reducer/game.reducer';
import { useRouter } from 'next/router';
import axios from 'axios';
import { calculateSuit, calculateRounds } from '../../utils/suitScript'

const Play = () => {
  const dispatch = useDispatch();
	const router = useRouter();
  const { id } = router.query;
  const userName = useSelector((state) => state.user.name).toUpperCase();
  const token = useSelector((state) => state.user.token);
  const [game, setGame] = useState({});
	const [readyInput, setReadyInput] = useState(true);
	const [gameFinished, setGameFinished] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameRoundColor, setGameRoundColor] = useState(["bg-white", "bg-white", "bg-white"]);
  const [lastRoundResult, setLastRoundResult] = useState("Ready");
  const [thisGameState, setThisGameState] = useState(useSelector((state) => state.game.runningGame));
  const [initGameState, setInitGameState] = useState(useSelector((state) => state.game.initGame));

  useEffect(() => {
    if (id) {
      axios
        .get(process.env.NEXT_PUBLIC_BASE_URL + "games/" + id, "", "")
        .then((res) => {
          setGame(res.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

	useEffect(() => {
		if(!thisGameState && id) {
        axios({
          method: 'post',
          url: process.env.NEXT_PUBLIC_BASE_URL + "games/play/init",
          headers: {
            Authorization: "Bearer " + token,
          }, 
          data: {
            id: Number(id),
            playedAt: new Date().toISOString()
          }
        })
        .then((res) => {
          setInitGameState(res.data?.data?.id);
          dispatch(setInitGame(res.data?.data?.id));
        })
        .catch((err) => {
          console.log(err);
        });
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
        setReadyInput(true);
        setGameFinished(false);
		} else if (thisGameState && id) {
        setCurrentRound(thisGameState.runningRound.length);
        if(thisGameState.runningRound.length === Number(game.numberOfRounds)) {
          const gameResult = calculateRounds(thisGameState.runningRound[0].result, thisGameState.runningRound[1].result, thisGameState.runningRound[2].result);
          if(gameResult === "win" || gameResult === "lose") {
            setLastRoundResult(`You ${gameResult.toUpperCase()} the Game!`)
          } else {
            setLastRoundResult(`Game ${gameResult.toUpperCase()}!`)
          }
          setGameFinished(true);
        }
    }
	}, [id, dispatch, thisGameState, game, token, initGameState])
	
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

      const newGameRoundColor = gameRoundColor.slice();
      if (result === "win") {
        newGameRoundColor[thisGameState.runningRound.length] = "bg-green-500"
      } else if (result === "lose") {
        newGameRoundColor[thisGameState.runningRound.length] = "bg-red-500"
      } else {
        newGameRoundColor[thisGameState.runningRound.length] = "bg-zinc-300"
      }
      setGameRoundColor(newGameRoundColor);

      setLastRoundResult(result.toUpperCase())
      
      const newGameState = JSON.parse(JSON.stringify(thisGameState));
      newGameState.runningRound.push(pushedResult);
  
      setThisGameState(newGameState);
      dispatch(setRunningGame(newGameState));
  
      setReadyInput(false);
  
      if(Number(newGameState.runningRound.length) === Number(game.numberOfRounds)) {
        const gameResult = calculateRounds(newGameState.runningRound[0].result, newGameState.runningRound[1].result, newGameState.runningRound[2].result);
        if(gameResult === "win" || gameResult === "lose") {
          setLastRoundResult(`You ${gameResult.toUpperCase()} the Game!`)
        } else {
          setLastRoundResult(`Game ${gameResult.toUpperCase()}!`)
        }

        const metaData = [];
        newGameState.runningRound.map((round) => {
          metaData.push({
            playerChoice: round.playerChoice,
            comChoice: round.computerChoice
          })
        })

        axios({
          method: 'post',
          url: process.env.NEXT_PUBLIC_BASE_URL + "games/play/com",
          headers: {
            Authorization: "Bearer " + token,
          }, 
          data: {
            id: Number(id),
            idHistory: Number(initGameState),
            status: gameResult.toUpperCase(),
            metaData: metaData
          }
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        setGameFinished(true);
      };
    }
	};

  const handleRefreshClick = (e) => {
    if(gameFinished === true) {
      axios({
        method: 'post',
        url: process.env.NEXT_PUBLIC_BASE_URL + "games/play/init",
        headers: {
          Authorization: "Bearer " + token,
        }, 
        data: {
          id: Number(id),
          playedAt: new Date().toISOString()
        }
      })
      .then((res) => {
        setInitGameState(res.data?.data?.id);
        dispatch(setInitGame(res.data?.data?.id));
      })
      .catch((err) => {
        console.log(err);
      });
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
      
      setLastRoundResult("Ready");
      setGameRoundColor(["bg-white", "bg-white", "bg-white"])
      setGameFinished(false);
      setReadyInput(true);
      setCurrentRound(1);
    } else {
      setLastRoundResult("Ready");
      setReadyInput(true);
      setCurrentRound(thisGameState.runningRound.length + 1);
    }
	};

	return (
		<>
			<Navbar />
				<div className="grid grid-rows-12 grid-cols-3 bg-white border-solid border-[2px] border-[#D7] rounded-lg md:mx-24 md:px-14 xl:mx-28 mt-12 mb-14 xl:px-18">
					{/* Title */}
					<div className="row-span-1 col-start-2 text-center">
						<p className='lg:text-xl xl:text-2xl font-semibold'>Rock-Paper-Scissors Random</p>
						<p className='lg:text-xl xl:text-2xl font-semibold'>Round {currentRound}</p>
					</div>

					{/* Round Status */}
					<div className="row-start-2 col-start-2 flex justify-center items-center">
						<div className={`rounded-full ${gameRoundColor[0]} border-solid border-[1px] border-[#D7D7D7] h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2`}></div>
						<div className={`rounded-full ${gameRoundColor[1]} border-solid border-[1px] border-[#D7D7D7] h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2`}></div>
						<div className={`rounded-full ${gameRoundColor[2]} border-solid border-[1px] border-[#D7D7D7] h-4 w-4 lg:h-5 lg:w-5 xl:h-7 xl:w-7 mt-3 mb-1 mx-2`}></div>
					</div>
					
					{/* Player Side */}
					<div className="row-start-3 col-start-1 text-xl lg:text-3xl xl:text-4xl font-bold text-center">
						<p>{userName}</p>

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
						<div className="text-2xl lg:text-5xl xl:text-6xl font-black flex items-center text-center mb-8">{lastRoundResult}</div>
					</div>

					{/* Refresh Button */}
					<div className="row-start-5 col-start-2 flex justify-center items-center">
						<button className="cursor-pointer active:bg-slate-200 h-10 w-10 lg:h-16 lg:w-16 xl:h-20 xl:w-20 lg:bg-[length:60px_60px] xl:bg-[length:70px_70px] bg-cover bg-no-repeat bg-center rounded-full" style={{backgroundImage : "url(/img/refresh.png)"}} onClick={handleRefreshClick} />
					</div>

					{/* Opponent Side */}
					<div className="row-start-3 col-start-3 text-xl lg:text-3xl xl:text-4xl font-bold text-center">
						<p>COMPUTER</p>
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