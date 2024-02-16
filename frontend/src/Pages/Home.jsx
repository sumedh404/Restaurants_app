
import HeroSection from "../Components/HoreSection";
import About from "../Components/About";
import Qualities from "../Components/Qualities";
import Menu from "../Components/Menu";
import Who_we_are from '../Components/WhoAreWe';
import Team from "../Components/Team";
import Reservation from "../Components/Reservation";
import Footer from "../Components/Footer";

function Home(){
    return(
        <div>
          <HeroSection/>
          <About/>
          <Qualities/>
          <Menu/>
          <Who_we_are/>
          <Team/>
          <Reservation/>
          <Footer/>
        </div>
    )
}

export default Home;