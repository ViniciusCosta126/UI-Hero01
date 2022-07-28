import ButtonHero from "../atoms/ButtonHero";
import FrontEnd from "../templates/FrontEnd";
import HeroImage from '../assets/HeroImage.png'
import * as C from "./style";
import CardActivity from "../molecules/CardActivity";
import CardGraphic from "../molecules/CardGraphic";

function App() {
  return (
    <FrontEnd>
      <C.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immesive user
            experience.
          </h6>
          <ButtonHero/>
        </div>
        <C.ColumnImage>
          <CardActivity/>
          <CardGraphic/>
          <img src={HeroImage} alt="Mulher mexendo no computador" />
        </C.ColumnImage>
      </C.Container>
    </FrontEnd>
  );
}

export default App;
