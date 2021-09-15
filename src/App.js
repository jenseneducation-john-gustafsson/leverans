import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import { FormProvider } from 'react-advanced-form'
import messages from "./components/Forms/validation-messages"
import rules from "./components/Forms/validation-rules"
import RegisterForm from "./view/RegisterForm"
import LoginForm from "./view/LoginForm"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <FormProvider rules={rules} messages={messages}>
        <RegisterForm />
        <LoginForm />
      </FormProvider>

    </div>
  );
}

export default App;
