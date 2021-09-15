import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import RegisterForm from "./view/RegisterForm"
import messages from "./components/Forms/validation-messages"
import rules from "./components/Forms/validation-rules"


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <FormProvider rules={rules} messages={messages}>
        <RegisterForm />
      </FormProvider>

    </div>
  );
}

export default App;
