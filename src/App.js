import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import CategoryOveriew from './view/CategoryOverview'; // test purpose

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <CategoryOveriew /> 
    </div>
  );
}

export default App;
