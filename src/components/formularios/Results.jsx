import React, {useState} from 'react';

const Results = (props) => {
    const {firstName, lastName, email, password, passwordConfirm} = props.data;

    return(
        <div>
            <p>Your Form Data</p>
            <table>
                <tr>
                    <td>First Name: </td>
                    <td> {firstName} </td>
                </tr>
                <tr>
                    <td>Last Name: </td>
                    <td> {lastName} </td>
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
                    <td> {passwordConfirm} </td>
                </tr>
            </table>
        </div>
    )
}

export default Results