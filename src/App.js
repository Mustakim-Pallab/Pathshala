import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import HomeAbout from './Components/HomeAbout/HomeAbout';
import HomeServices from './Components/HomeServices/HomeServices';
import Universities from './Components/Universities/Universities';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/About Us/AboutUs';
import Gallery from './Components/Gallery/Gallery';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>
  

      <Router>
        <Switch>
          <Route path="/Home">
            <Navbar>

            </Navbar>

            <Header>

            </Header>
            <HomeAbout>

            </HomeAbout>
            <Universities>

            </Universities>
            <HomeServices>

            </HomeServices>
            <Footer>

            </Footer>
          </Route>

          <Route exact path="/">
            <Navbar>
              
            </Navbar>
            <Header>

            </Header>
            <HomeAbout>

            </HomeAbout>
            <Universities>

            </Universities>
            <HomeServices>

            </HomeServices>
            <Footer></Footer>
          </Route>

          <Route path="/services">
            <Navbar>
              
            </Navbar>

            <Services>

            </Services>
            <Footer></Footer>

          </Route>

          <Route path="/aboutUs">
            <Navbar>
              
            </Navbar>
            <AboutUs>

            </AboutUs>
            <Footer></Footer>
          </Route>
          
          <Route path="/gallery">
            <Navbar>
              
            </Navbar>
            <Gallery></Gallery>
            <Footer></Footer>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      


    </div>
);
}

export default App;
