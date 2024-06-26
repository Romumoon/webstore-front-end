
import React, { useState } from 'react';
import './Login.css'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const onButtonClick = () => {

    }

  return (
    <div className={'mainContainer'}>
        <div className={'titleContainer'}>
            <div>Login</div>
        </div>

        <div className={'inputContainer'}>
            <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={'inputBox'}
            />
            <label className="errorLabel">{emailError}</label>
        </div>

        <div className={'inputContainer'}>
            <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
            />
            <label className="errorLabel">{passwordError}</label>
        </div>

        <div className={'inputContainer'}>
            <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
        </div>   
    </div>
  )

}

export default Login;