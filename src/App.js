import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";



import { greenTheme, whiteTheme } from "./theme.js";

export default function App() {

const [theme, setTheme] = useState(greenTheme)

function toggleTheme() {
    setTheme(theme.name === "green" ? whiteTheme : greenTheme);
    console.log(theme)
  }

  return (
 <Router>
       <Navbar />
       <a onClick={toggleTheme} className="btn bg-white text-success btn-lg" href="#" role="button">
        Change Theme
      </a>  

        <Switch>
         <Route path="/" exact>
               <Home theme={theme}/>

          </Route>
              <Route path="/contact" exact>
               <Contact theme={theme}/>

          </Route>


  </Switch>
      <Footer />
 </Router> 
 
 
  );
}
