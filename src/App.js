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
import  { Redirect } from 'react-router-dom'

import Wishlist from "./view/Wishlist";
import Bundle from "./components/Bundle/BundleOverview";
import Cart from "./components/Cart/Cart";
import Genre from "./view/CategoryOverview";
import StartPage from "./view/StartPage";

import databundle from './components/Cart/dataBundle';
import ElectronWishList from './ElectronWishList';

import NotFound from "./view/NotFound";

import CategoryDetailsAction from './components/Category-page/Category-details/CategoryDetailsAction';
import CategoryDetailsComedy from './components/Category-page/Category-details/CategoryDetailsComedy';
import CategoryDetailsHorror from './components/Category-page/Category-details/CategoryDetailsHorror';

import {useState} from 'react';


function App() {
  const {bundles} = databundle;
  const [cartItems,setCartItems] = useState([]);
  const onAdd =(bundles) =>{
    const exist = cartItems.find(x=> x.id === bundles.id )
    if (exist){
    setCartItems(cartItems.map(x => x.id === bundles.id ? {...exist , qty: exist.qty + 1} : x));

  }else{
    setCartItems([...cartItems,{...bundles, qty : 1 }])
  }

}

let wishlist = document.querySelector('.wishlist');
console.log(wishlist);

const isElectron = navigator.userAgent.includes('Electron');



const android = navigator.userAgent.includes('Android');
const iphone = navigator.userAgent.includes('iPhone');


  return (
    <div className="App">
        {isElectron && <ElectronWishList/>}
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
          {android || iphone ? <Redirect to="/login" /> : <StartPage />}

        </Route>
        <Route path="/bundles">
          <Bundle />
        </Route>
        <Route path="/cart">
          <Cart/>
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
