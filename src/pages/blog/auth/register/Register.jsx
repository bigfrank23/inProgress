import React, {useState} from 'react'
import FileBase from 'react-file-base64'
import Img3 from '../../../../images/bg2.jpg'
import Img from '../../../../images/bg5.jpg'


import styled from 'styled-components';
import Footer from '../../../../components/Footer/Footer'
import './Register.css'
import { Link } from 'react-router-dom';
import {register} from '../../redux/actions/auth'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { mobile } from '../../../../responsive';

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
    background-size: cover;
    background-position: center;
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
    ${mobile({ height: "40vh", clipPath: "unset"})}
    .page1Header {
      color: #fff;
      text-align: center;
      text-shadow: 0 4px brown;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`

const initialState = {username: '', email: '', password: ''}

const Register = () => {
    const [formData, setFormData] = useState(initialState)
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData, history))
        e.target.reset()
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)
  return (
    <Container>
          <div className="page1Wrapper">
            {/* <Navbar /> */}
            <div className="page1Header">
                <h1>Register</h1>
                {/* <h1>PENTECOSTAL FELLOWSHIP OF NIGERIA</h1> */}
            </div>
        </div>
        <div className="container" id="register_container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 p-4 bg-light shadow">
            <span className="register_title">Register</span>
            <form className="register_form" onSubmit={handleSubmit} autoComplete='off'>
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username..."
                name="username"
                onChange={handleChange}
                autoComplete='off'
              />
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your email..."
                name="email"
                onChange={handleChange}
                autoComplete='off'
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
                  autoComplete='off'
                />
                <i
                  className={
                    showPassword ? "fa fa-eye-slash icon" : "fa fa-eye icon"
                  }
                  aria-hidden="true"
                  onClick={handleShowPassword}
                />
              </div>
              <div className="register_btn d-flex justify-content-between">
                <button className="register_button" type="submit">
                  Register
                </button>
              </div>
            </form>
            Already have an account? &nbsp;
            <Link className="link" to="/login">
              <button className="register_login_button">Login</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Register