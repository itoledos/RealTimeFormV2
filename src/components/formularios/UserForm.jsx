import React, {useState} from 'react';

const UserForm = (props) => {
    const {inputs, setInputs}= props;
    
    ;
    
    const onChange = (e) => {

        if (e.target.name=="firstName") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
                firstNameAlert: e.target.value.length>1||e.target.value==""
            })
        }
        else if (e.target.name=="lastName") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
                lastNameAlert: e.target.value.length>1||e.target.value==""
            })
        }
        else if(e.target.name=="email") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
                emailAlert: e.target.value.length>4||e.target.value==""
            })
        }
        else if(e.target.name=="password") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
                passAlert1: e.target.value.length>7||e.target.value=="",
                passAlert2: e.target.value==inputs.passwordConfirm
            })
        }
        else if(e.target.name=="passwordConfirm") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
                passAlert2: e.target.value==inputs.password
            })
        }
        else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
                // firstNameAlert: inputs.firstName.length>1
            })
        }

        
    }
    
    const createUser = (e) => {
        e.preventDefault();
            const newUser = {inputs};
            setInputs({
                ...inputs,
                hasBeenSubmitted: true
        })
    }
  
    const formMessage = () => {
      if (inputs.hasBeenSubmitted) {
        return("Gracias por suscribirte!");
      } else {
        return("Bienvenido, por favor completa el formulario");
      }
    }
    
    // ALERTAS
    const firstNameAlert = () => inputs.firstNameAlert?"":
    "El campo debe tener al menos 2 caracteres";

    const lastNameAlert = () => inputs.lastNameAlert?"":
    "El campo debe tener al menos 2 caracteres";

    const emailAlert = () => inputs.emailAlert?"":
    "El campo debe tener al menos 5 caracteres";
    const passAlert = () => inputs.passAlert1&&inputs.passAlert2?"":
    "Las contraseñas deben coincidir y tener al menos 8 caracteres";

    return(
        <div>
            <h3 name="hassBeenSubmitted">{formMessage()}</h3>
            <form onSubmit={createUser}>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name: </label>
                    <input type="text" name="firstName" onChange={onChange} />
                    <p>{firstNameAlert()}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type="text" name="lastName" onChange={onChange} />
                    <p>{lastNameAlert()}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input type="email" name="email" onChange={onChange} />
                    <p>{emailAlert()}</p>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" name="password" onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='passwordConfirm'>Confirm Password: </label>
                    <input type="password" name="passwordConfirm" onChange={onChange} />
                    <p>{passAlert()}</p>
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>

    )
}

export default UserForm;