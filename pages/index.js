import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import GameCard from '../components/GameCard';
import SeeMore from '../components/SeeMore';

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="text-3xl font-bold text-center mb-5 mt-8">Most Played Games</div>
      <div className="md:grid md:grid-cols-3 md:gap-8 px-10 py-4 xl:px-40 2xl:px-80">
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
      <SeeMore />
      <Footer />
    </>
  )
}