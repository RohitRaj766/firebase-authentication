import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory, Link} from "react-router-dom"
import "./Register.css"

function Register() {
    const [state, setState] = useState({
        email : "",
        password: "",
        displayName:"",
        passwordConfirm:"",
    })
    const{email, password, displayName, passwordConfirm} = state;
    const handleGoogleSignIn = () => {}
    const handleFBSignIn = () => {}
    const handleSubmit = () => {}
    const handleChange = () => {}
  return (
    <>
    
    <div id="register-form">
        <form className='form-signin' onSubmit={handleSubmit}>
            <h1>
                Sign Up
            </h1>
            <input type="text" 
            id='displayName'
            className='form-control'
            placeholder='Full Name'
            name='displayName'
            onChange={handleChange}
            value = {displayName}
            required
            />
            <input type="email" 
            id='user-email'
            className='form-control'
            placeholder='Email Address'
            name='email'
            onChange={handleChange}
            value = {email}
            required
            />
            <input type="password" 
            id='inputPassword'
            className='form-control'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value = {email}
            required
            />
                      <input type="password" 
            id='passwordConfirm'
            className='form-control'
            placeholder='Confirm Password'
            name='passwordConfirm'
            onChange={handleChange}
            value = {passwordConfirm}
            required
            />
            <button className='btn btn-primary btn-block' type="submit">
              <i className='fas fa-user-plus'></i>  Sign Up
            </button>
            <Link to="/login">
                <i className="fas fa-angle-left"></i> Back
            </Link>
        </form>
    </div>
    
    </>
  )
}

export default Register