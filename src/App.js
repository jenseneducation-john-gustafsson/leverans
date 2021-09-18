import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

//importerat login & reg moduler
import { FormProvider } from 'react-advanced-form'
import messages from "./components/Forms/validation-messages"
import rules from "./components/Forms/validation-rules"
import RegisterForm from "./view/RegisterForm"
import LoginForm from "./view/LoginForm"

import { BrowserRouter as Router, Route } from "react-router-dom";

import Wishlist from "./view/Wishlist";
import Bundle from "./components/Bundle/Bundle";
import Cart from "./components/Cart/Cart";
import Genre from "./view/CategoryOverview";
import StartPage from "./view/StartPage";


import CategoryDetailsAction from './components/Category-page/Category-details/CategoryDetailsAction';
import CategoryDetailsComedy from './components/Category-page/Category-details/CategoryDetailsComedy';
import CategoryDetailsHorror from './components/Category-page/Category-details/CategoryDetailsHorror';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />

        <FormProvider rules={rules} messages={messages}>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
        </FormProvider>

        <Route path="/" exact>
          <StartPage />
        </Route>
        <Route path="/bundles">
          <Bundle />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/genre">
          <Genre />
        </Route>
        <Route path="/categoryAction">
          <CategoryDetailsAction />
        </Route>
        <Route path="/categoryHorror">
          <CategoryDetailsHorror />
        </Route>
        <Route path="/categoryComedy">
          <CategoryDetailsComedy />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
