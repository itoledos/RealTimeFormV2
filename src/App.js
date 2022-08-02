import './App.css';
import React, {useState} from 'react';
import UserForm from './components/formularios/UserForm';
import Results from './components/formularios/Results';

function App() {
  const [state,setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    hasBeenSubmitted: false,
    firstNameAlert: true,
    lastNameAlert: true,
    emailAlert: true,
    passAlert1: true,
    passAlert2: true
  })

  

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <Results data={state}/>
    
    </div>
  );
}

export default App;
