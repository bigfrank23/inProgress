import React, { useEffect, useState } from 'react'
import Img from "../../images/chairmanBg.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import H3 from '../../components/Text/H3';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import '../allEvents/AllEvents.css'
import H2 from '../../components/Text/H2';
import Footer from '../../components/Footer/Footer';
import Upcomin from '../../components/Upcoming/Upcomin';
import { landscapeTab, mobile, tab } from '../../responsive';
import { Grid } from '@mui/material';
import './Messages.css'
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img});
    background-size: 100% 60%;
    /* background-position: bottom; */
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 62vh;
    ${mobile({ height: "40vh", clipPath: "unset", backgroundSize: "100% 40%", backgroundPosition: "unset"})}
    ${tab({ height: "42vh", backgroundSize: "100% 40%", backgroundPosition: "unset" })}
    ${landscapeTab({ height: "62vh", backgroundSize: "100% 60%"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`

const Messages = () => {
    const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
    const [pastEventData, setPastEventData] = useState([])

  useEffect(()=> {
    const getPastEvents = async() => {
      const res = await axios.get('https://pfn-lagos.herokuapp.com/chairmanMsg')
      setPastEventData(res.data)
    }
    getPastEvents()
  }, [])

  const handleDelete = async(id) => {
    try {
      const res = await axios.delete(`https://pfn-lagos.herokuapp.com/chairmanMsg/${id}`)
      
        const updated = pastEventData.filter((r)=> r._id !== id)
        setPastEventData(updated)
        console.log(res.data);
        alert("Removed!")
        // window.location.replace("/past-events")
      
    } catch (error) {
      alert(error);
    }
  }
  return (
    <Container>
      <Helmet>
        <title>Chairman Messages</title>
        <meta name="description" content="Chairman's Messages" />
        <link rel="canonical" href="/chairman-messages" />
      </Helmet>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Chairman Messages</h1>
        </div>
      </div>
      <div className="page4Top">
        {pastEventData.length === 0 ? " No Messages yet" :
            <Grid container spacing={3}>
                {pastEventData.map((data)=> (
                    <Grid item xs={12} sm={6} md={4} key={data._id}>
                        <div className="page4TopLeft" id='allEventsOverlay'>
                            <div className="overlayTxt" id='messagesOverlay'>
                            <h5 className="txtGree text-center" id='allEventsTxt'><span className="txtWhite" id='msgTitle'>{data.title}</span></h5>
                            </div>
                            <div className="txtOne">
                            <h6>{data.desc}</h6>
                            </div>
                            {
                            user?.user?.email ==="ezeyimf@gmail.com" &&
                            <div className="btnBx" onClick={()=> handleDelete(data._id)}>
                                <Button BtnText='Remove' />
                            </div>
                            }
                        </div>
                    </Grid>
                ))}
            </Grid>
        }
      </div>
      <div className="spacerBox d-flex justify-content-center">
          <div className="spacer"></div>
      </div>
      <Footer />
      </Container>
  )
}

export default Messages