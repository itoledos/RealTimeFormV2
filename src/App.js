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
    passwordConfirm: ""
  })

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <Results data={state}/>
    
    </div>
  );
}

export default App;
