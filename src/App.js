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

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom'

import Wishlist from "./view/Wishlist";
import Bundle from "./components/Bundle/BundleOverview";
import Cart from "./components/Cart/Cart";
import Genre from "./view/CategoryOverview";
import StartPage from "./view/StartPage";

import ElectronWishList from './components/ElectronWishList';

import NotFound from "./view/NotFound";

import CategoryDetailsAction from './components/Category-page/Category-details/CategoryDetailsAction';
import CategoryDetailsComedy from './components/Category-page/Category-details/CategoryDetailsComedy';
import CategoryDetailsHorror from './components/Category-page/Category-details/CategoryDetailsHorror';

import { useSelector } from "react-redux";


function App() {
  
  const isElectron = navigator.userAgent.includes('Electron');

  const isLoggedIn = useSelector(state => state.authenticated.loggedIn);

  const android = navigator.userAgent.includes('Android');
  const iphone = navigator.userAgent.includes('iPhone');

  const navigationStart = () => {
    if(!isLoggedIn && android) {
      return <Redirect to="/login" />
    } else if(!isLoggedIn && iphone) {
      return <Redirect to="/login" />
    } else {
      return <StartPage />
    }
  }

  const navigationBundles = () => {
    if(!isLoggedIn && android) {
      return <Redirect to="/login" />
    } else if(!isLoggedIn && iphone) {
      return <Redirect to="/login" />
    } else {
      return <Bundle />
    }
  }

  const navigationGenre = () => {
    if(!isLoggedIn && android) {
      return <Redirect to="/login" />
    } else if(!isLoggedIn && iphone) {
      return <Redirect to="/login" />
    } else {
      return <Genre />
    }
  }

  const navigationCart = () => {
    if(!isLoggedIn && android) {
      return <Redirect to="/login" />
    } else if(!isLoggedIn && iphone) {
      return <Redirect to="/login" />
    } else {
      return <Cart />
    }
  }

  const navigationWishlist = () => {
    if(!isLoggedIn && android) {
      return <Redirect to="/login" />
    } else if(!isLoggedIn && iphone) {
      return <Redirect to="/login" />
    } else {
      return <Wishlist />
    }
  }


  return (
    <div className="App">
      {isElectron && <ElectronWishList />}
      <Router>
        <Header />
        <Navbar />

        <Switch>
          <Route path="/login">
            <FormProvider rules={rules} messages={messages}>
              <LoginForm />
            </FormProvider>
          </Route>
          <Route path="/register">
            <FormProvider rules={rules} messages={messages}>
              <RegisterForm />
            </FormProvider>
          </Route>


          <Route path="/" exact>
            {navigationStart()}
          </Route>
          <Route path="/bundles">
            {navigationBundles()}
          </Route>
          <Route path="/cart">
            {navigationCart()}
          </Route>
          <Route path="/genre">
            {navigationGenre()}
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
            {navigationWishlist()}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
