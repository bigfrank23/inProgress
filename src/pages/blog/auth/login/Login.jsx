import React, {useState} from 'react'
import FileBase from 'react-file-base64'
import Img3 from '../../../../images/bg2.jpg'
import Img from '../../../../images/dark1.jpeg'


import styled from 'styled-components';
import Footer from '../../../../components/Footer/Footer'
import { Link } from 'react-router-dom';
import {register} from '../../redux/actions/auth'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'

import { login } from '../../redux/actions/auth';

import './Login.css'

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    /* clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(100% 0, 100% 92%, 50% 100%, 0 92%, 0 0);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), black
      url(${Img});
    background-size: contain;
    background-position: 0 125px;
    background-repeat: no-repeat;
    /* background-position-x: 7%; */
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    .page1Header {
      color: #fff;
      text-align: center;
      text-shadow: 0 4px brown;
    }
  }
`
const initialState = {email: '', password: ''}
const Login = () => {
    const [loginData, setLoginData] = useState(initialState)
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(login(loginData, history));
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

  return (
    <Container>
          <div className="page1Wrapper">
            {/* <Navbar /> */}
            <div className="page1Header">
                <h1>Login</h1>
                {/* <h1>PENTECOSTAL FELLOWSHIP OF NIGERIA</h1> */}
            </div>
        </div>
        <div className="container" id="login_container">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12 p-4 bg-light shadow">
          <span className="login_title">Login</span>
          <form className="login_form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email..."
              name="email"
              onChange={handleChange}
            />
            <label>Password</label>
            <div className="wrap">
              <input
                // type="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password..."
                name="password"
                onChange={handleChange}
                className="field"
              />
              <i
                className={
                  showPassword ? "fa fa-eye-slash icon" : "fa fa-eye icon"
                }
                aria-hidden="true"
                onClick={handleShowPassword}
              />
            </div>
            <div className="login_btn d-flex justify-content-between">
              <button className="login_button" type="submit">
                Login
              </button>
            </div>
          </form>
          <Link className="link" to="/register">
            <button className="login_register_button">Register</button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </Container>
  )
}

export default Login