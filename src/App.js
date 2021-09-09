import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Startpage from "./view/startpage"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Startpage />
    </div>
  );
}

export default App;
