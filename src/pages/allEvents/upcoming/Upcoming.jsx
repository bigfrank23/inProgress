import React, { useEffect, useState } from 'react'
import Img from "../../../images/upcomingEvents/upcomingBg.jpg";
import Img2 from "../../../images/splash3.jpg";
import upcomingImg1 from "../../../images/upcomingEvents/upcoming1.jpeg";
import Img3 from "../../../images/bg2.jpg";
import styled from "styled-components";
import H2 from '../../../components/Text/H2';
import H3 from '../../../components/Text/H3';
import PText from '../../../components/Text/PText';
import './Upcoming.css'
import Button from '../../../components/Button/Button';
import Footer from '../../../components/Footer/Footer';
import { upcoming } from './upcomingData';
import { Link } from 'react-router-dom';
import { landscapeTab, mobile, tab } from '../../../responsive';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 62vh;
    ${mobile({ height: "40vh", clipPath: "unset", backgroundPosition: "bottom"})}
    ${tab({ height: "42vh"})}
    ${landscapeTab({ height: "62vh"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`;

const Upcoming = () => {
  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
  const [currentEventData, setCurrentEventData] = useState([])

  useEffect(()=> {
    const getCurrentEvents = async() => {
      const res = await axios.get('https://pfn-lagos.herokuapp.com/upcomingEvent')
      setCurrentEventData(res.data)
    }
    getCurrentEvents()
  }, [])

  const handleDelete = async(id) => {
    try {
      const res = await axios.delete(`https://pfn-lagos.herokuapp.com/upcomingEvent/${id}`)
      
        const updated = currentEventData.filter((r)=> r._id !== id)
        setCurrentEventData(updated)
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
        <title>Upcoming Events</title>
        <meta name="description" content="PFN Lagos State Upcoming Events" />
        <link rel="canonical" href="/upcoming-events" />
      </Helmet>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Upcoming Events</h1>
        </div>
      </div>
      {currentEventData.length === 0 ? " No Event yet" : 
        <div className="page5">
              {currentEventData.reverse().map((data)=> (
                <>
                  <div className="page5Bx" key={data.id}>
                  <div className="page5BxImg">
                      <img src={data.avatar} alt={data.title} />
                  </div>
                  <div className="page5BxContent">
                      <div className="page5Title">
                      <H2>{data.title}</H2>
                      </div>
                      
                      <p>
                        <b>{data.theme}</b>
                      </p>
                      <div className="page5Date">
                      {data.date ? <><h5><b>Date</b></h5> : {data.date} </> : null}
                      </div>
                      <div className="page5Time">
                      {data.time ? <><h5><b>Time</b></h5> : {data.time} </> : null}
                      </div>
                      <div className="page5Location" id='upcomingLocation'>
                        {data.location ? <><h5><b>Location</b></h5> : {data.location} </> : null}
                      </div>
                      <div className="page5Para">
                      <p id="upcomingPara">
                        {data.desc ? <><b>{data.desc}</b></> : null}
                      </p>
                      <p id="upcomingPara">
                        {data.desc ? <><b>{data.more}</b></> : null}
                      </p>
                      <p>
                        <b>{data.date2}</b>
                      </p>
                      </div>
                      <div className="page5Btn">
                      <Link to={`/upcoming-event-full-detail/${data._id}`}>
                      <Button BtnText='See Event' />
                      </Link>
                      {
                        user?.user?.email ==="admin@pfnlagosstate.org" &&
                        <div className='mt-3' onClick={()=> handleDelete(data._id)}>
                        <button type="button" className="btn btn-danger">Remove this event</button>
                        </div>
                      }
                      </div>
                  </div>
                  </div>
                  <hr className='Hr' id='upcomingHr' />
                  </>
              ))}
        </div>
      }
      <Footer />
    </Container>
  )
}

export default Upcoming