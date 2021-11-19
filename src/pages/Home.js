import Header from '../components/Header'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import IMX from '../components/IMX';
import Sneakpeak from '../components/Sneakpeak';
import Team from '../components/Team';
import Roadmap from '../components/Roadmap';
import Lotk from '../components/Lotk';
import Rarity from '../components/Rarity';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sneakpeak />
      <IMX />

      <Roadmap />

      <Lotk />
      <Team />
      <Rarity />
      <Footer />
    </>
  );
}

export default Home;