import React, {useState} from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordConf,setPasswordConf] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {username, email, password};
        // console.log("Welcome", newUser);
    }

    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email Adress: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>ConfirmPassword: </label>
                    <input type="password" onChange={(e) => setPasswordConf(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <p>Your Form Data</p>
            <table>
                <tr>
                    <td>First Name: </td>
                    <td> {username} </td>
                </tr>
                <tr>
                    <td>Email adress: </td>
                    <td> {email} </td>
                </tr>
                <tr>
                    <td>Password: </td>
                    <td> {password} </td>
                </tr>
                <tr>
                    <td>Confirm Password: </td>
                    <td> {passwordConf} </td>
                </tr>
            </table>
        </div>

    )
}

export default UserForm;