import React, {useState, useEffect} from 'react'
import UserImg from '../../../images/profile.png'
import {useDispatch} from 'react-redux'
import FileBase from 'react-file-base64';
import axios from 'axios'
import {UPDATE} from '../redux/constants/actionTypes'

import { useParams } from 'react-router-dom'

import './Settings.css'

import Img3 from "../../../images/bg2.jpg";
import Img5 from "../../../images/pro9.jpg";
import styled from "styled-components";
import Footer from '../../../components/Footer/Footer';

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    -webkit-clip-path: polygon(
      50% 0%,
      100% 0,
      100% 43%,
      94% 78%,
      68% 100%,
      32% 100%,
      6% 78%,
      0% 43%,
      0 0
    );
    clip-path: polygon(
      50% 0%,
      100% 0,
      100% 43%,
      94% 78%,
      68% 100%,
      32% 100%,
      6% 78%,
      0% 43%,
      0 0
    );
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${Img5});
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
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
      .giveNowBtn {
        margin-top: 2rem;
      }
    }
  }
`;

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"))
  const [profilePic, setProfilePic] = useState([])
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const {id} = useParams()

  const dispatch = useDispatch()

  const handlePhoto = async(e) => {
    e.preventDefault()

    try {
      const {data} = await axios.put("https://pfn-lagos.herokuapp.com/api/auth/" + user.user._id, profilePic);
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 5000);
      dispatch({ type: UPDATE, payload: data });
    //   window.location.replace('/settings')
    } catch (error) {
      console.log(error);
      setError(true)
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }

  return (
    <Container>
    <div className="page1Wrapper">
      <div className="page1Header">
        <h1>Settings</h1>
      </div>
    </div>
    <div className='container' id='settings_container'>
        <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 p-4 bg-light shadow">
          <div className="settings_title">
            <span className="settings_update_title">Update Your Profile Picture</span>
          </div>
          <form onSubmit={handlePhoto}>
            <label>Profile Picture</label>
            <div className="settings_PP">
              <img src={!profilePic.profilePic ? UserImg : profilePic.profilePic} alt="SPPImg" />
              <label htmlFor="fileInput">
                <i
                  className="settings-PP-icon fa fa-user-circle-o"
                  aria-hidden="true"
                />
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
              />
              <FileBase
                type="file"
                multiple={false}
                onDone = {({base64})=> setProfilePic({...profilePic, profilePic: base64})}
                />
            </div>
            <button type="submit" className="btn btn-primary">Update Profile Photo</button>
            { success && (<p className='text text-success ml-2'>Success!</p>)}
            { error && (<p className='text text-danger ml-2'>Failed!</p>)}
          </form>
        </div>
        </div>
    </div>
    <Footer />
    </Container>
  )
}

export default Settings