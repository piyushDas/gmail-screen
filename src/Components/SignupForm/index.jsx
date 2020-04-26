import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../../context'

const SignupForm = () => {
  const {
    signupUser,
    setSignupFlag,
    signupError,
    loggedInUser
  } = useContext(AppContext)
  
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [mailError, setMailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const addNewUser = () => {
    setMailError(false)
    setPasswordError(false)
    if (!mail) {
      setMailError(true)
    }
    if (!password && password.length < 8) {
      setPasswordError(true)
    }
    if (repassword !== password) {
      setRepassword(true)
    }
    signupUser({
      mail,
      password
    })
  }

  const toggleSignup = () => {
    setSignupFlag(false)
  }
  
  return (
    <div>
      <div className="title">
        Sign up
      </div>
      <div className="sub-title">
        Create a new account
      </div>
      <div className="form-input">
        <input type="text" onChange={e => setMail(e.currentTarget.value)} />
        <span>Email</span>
        {
          mailError && <div>
            Invalid email
          </div>
        }
      </div>

      <div className="form-input">
        <input type="password" onChange={e => setPassword(e.currentTarget.value)} />
        <span>password</span>
        {
          passwordError && <div>
            Invalid password
          </div>
        }
      </div>

      <div className="form-input">
        <input type="password" onChange={e => setRepassword(e.currentTarget.value)} />
        <span>Confirm password</span>
        {
          repassword && <div>
            Password doesn't match
          </div>
        }
      </div>

      <div className="sub-msg">
        <button onClick={addNewUser}>Signup</button>
        <div onClick={toggleSignup}>Already have an account - Signin</div>
      </div>

      {
        signupError && <div>
          Account already exists, please verify the credentials
        </div>
      }
      
      { loggedInUser &&
        <>
          <Redirect to='/mailbox' />
        </>
      }
    </div>
  )
}

export default SignupForm