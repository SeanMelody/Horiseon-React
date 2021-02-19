import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Aside from './Components/Nav/Aside/Aside';
import Body from './Components/Nav/Body/Body';
import CardOne from './Components/Nav/Cards/CardOne';
import CardThree from './Components/Nav/Cards/CardThree';
import CardTwo from './Components/Nav/Cards/CardTwo';
import Footer from './Components/Nav/Footer/Footer';
import Nav from './Components/Nav/Nav';

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
          <CardOne />
          <CardTwo />
          <CardThree />
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
