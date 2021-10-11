import logo from './logo.svg';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import HomeAbout from './Components/HomeAbout/HomeAbout';
import HomeServices from './Components/HomeServices/HomeServices';
import Universities from './Components/Universities/Universities';
import Services from './Components/Services/Services';


function App() {
  return (
    <div>
      <Navbar>

      </Navbar>
      <Header> </Header>
      <HomeAbout>
      </HomeAbout>
      <Universities></Universities>
      {/* <Services></Services> */}
      <HomeServices></HomeServices>

    </div>
);
}

export default App;
