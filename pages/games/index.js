import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GameCard from '../../components/GameCard';

function Index() {
  return (
    <>
      <Navbar />
      <div className="text-3xl font-bold text-center mb-5 mt-8">List of Our Games</div>
      <div className="md:grid md:grid-cols-3 md:gap-8 px-10 pt-4 pb-16 xl:px-40 2xl:px-80">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
      <Footer />
    </>
  )
}

export default Index