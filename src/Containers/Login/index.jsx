import React, { useContext } from 'react'
import { AppContext } from '../../context'
import LoginForm from '../../Components/LoginForm'
import SignupForm from '../../Components/SignupForm'
import './login.css'

const Login = () => {
  const {
    showSignup
  } = useContext(AppContext)
  
  return (
    <div className="login-box">
      { !showSignup && <LoginForm />}
      { showSignup && <SignupForm />}
    </div>
  )
}

export default Login