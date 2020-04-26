import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../../context'

const LoginForm = () => {
  const {
    authenticateUser,
    setSignupFlag,
    signinError,
    loggedInUser
  } = useContext(AppContext)
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [mailError, setMailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const authenticate = () => {
    setMailError(false)
    setPasswordError(false)
    if (!mail) {
      setMailError(true)
    }
    if (!password) {
      setPasswordError(true)
    }
    authenticateUser({
      mail,
      password
    })
  }

  const toggleSignup = () => {
    setSignupFlag(true)
  }

  let template = (
    <div>
      <div className="title">
        Sign in
      </div>
      <div className="sub-title">
        Continue to your account
      </div>
      <div className="form-input">
        <input type="text" className={mail ? 'value-input' : ''}  onChange={e => setMail(e.currentTarget.value)} />
        <span>Email</span>
        {
          mailError && <div>
            Invalid email
          </div>
        }
      </div>

      <div className="form-input">
        <input type="password" className={password ? 'value-input' : ''} onChange={e => setPassword(e.currentTarget.value)} />
        <span>password</span>
        {
          passwordError && <div>
            Invalid password
          </div>
        }
      </div>

      <div>
        <button onClick={authenticate}>Login</button>
        <div onClick={toggleSignup} className="sub-msg">Don't have an account yet? - Create new account</div>
      </div>

      {
        signinError && <div>
          Your username and password don't match. Please verify your credentials
        </div>
      }
    </div>
  )
  
  if (loggedInUser) {
    template = (
      <>
        <Redirect to='/mailbox' />
      </>
    )
  }
  return (
    <>{template}</>
  )
}

export default LoginForm