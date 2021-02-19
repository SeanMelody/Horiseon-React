import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Aside from './Components/Nav/Aside/Aside';
import Body from './Components/Nav/Body/Body';
import CardLeft from './Components/Nav/Cards/CardLeft';
import CardOne from './Components/Nav/Cards/CardOne';
import CardThree from './Components/Nav/Cards/CardThree';
import CardTwo from './Components/Nav/Cards/CardTwo';
import Footer from './Components/Nav/Footer/Footer';
import Nav from './Components/Nav/Nav';
import cardsList from "./Components/Nav/Cards/cardsList"

const midStyles = {
  backgroundColor: "#d9dcd6",
  margin: "0"
}

function App() {
  return (
    <div className="App" style={midStyles}>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <Body />
      <div className="row">
        <div className="col-md-8">
          <CardLeft title={cardsList[0].title} image={cardsList[0].image} description={cardsList[0].description} />
          <CardTwo />
          <CardLeft title={cardsList[1].title} image={cardsList[1].image} description={cardsList[1].description} />
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
