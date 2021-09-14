import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
// import CategoryDetailsAction from './components/Category-page/Category-details/CategoryDetailsAction'; // test purpose
// import CategoryDetailsComedy from './components/Category-page/Category-details/CategoryDetailsComedy'; // test purpose
import CategoryDetailsHorror from './components/Category-page/Category-details/CategoryDetailsHorror'; // test purpose

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <CategoryDetailsHorror />
    </div>
  );
}

export default App;
