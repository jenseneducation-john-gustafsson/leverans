import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"

import { BrowserRouter as Router, Route } from "react-router-dom";

import Wishlist from "./view/Wishlist";
import Bundle from "./components/Bundle/Bundle";
import Genre from "./view/CategoryOverview"
import StartPage from "./view/StartPage"

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Navbar />

      <Route path="/" exact>
        <StartPage />
      </Route>
      <Route path="/bundles">
        <Bundle />
      </Route>
      <Route path="/genre">
        <Genre />
      </Route>
      <Route path="/wishlist">
        <Wishlist />
      </Route>
        </Router>
    </div>
  );
}

export default App;
