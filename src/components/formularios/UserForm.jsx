import React, {useState} from 'react';

const UserForm = (props) => {
    const {inputs, setInputs}= props;
    
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    
    const createUser = (e) => {
        e.preventDefault();

    }

    return(
        <div>
            <form onSubmit={createUser}>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name: </label>
                    <input type="text" name="firstName" onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type="text" name="lastName" onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input type="email" name="email" onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" name="password" onChange={onChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='passwordConfirm'>Confirm Password: </label>
                    <input type="password" name="passwordConfirm" onChange={onChange} />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>

    )
}

export default UserForm;