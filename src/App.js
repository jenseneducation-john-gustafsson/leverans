import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import CategoryDetailsAction from './components/Category-page/Category-details/CategoryDetailsAction'; // test purpose

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <CategoryDetailsAction /> 
    </div>
  );
}

export default App;
