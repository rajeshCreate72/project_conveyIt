import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3001/login", {
                email, password
            })

            window.location.href = '/'
        }
        catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='reg-page'>
        <form action="POST" className="reg-form">
            <h3>Registration</h3>
            <br />
            <br />
            <div className='reg-form-ele'>
                <label>MailId: </label>
                <input type='mail' onChange={(e) => {setEmail(e.target.value)}}></input>
                <br />
                <label style={{marginTop: '10px'}}>Password: </label>
                <input type='password' onChange={(e) => {setPassword(e.target.value)}}></input>
                <div className='reg-button'>
                    <button type='submit' onClick={submit}>Log In</button>
                </div>    
            </div>
        </form>
        <div className='reg-login'>
            <p>Not Registered?  <span><Link to='/register' className='reg-link'>Register</Link></span></p>
        </div>
    </div>
  )
}

export default Login