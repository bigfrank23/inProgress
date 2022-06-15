import React, { useEffect, useState } from 'react'
import Img from "../../../images/upcomingEvents/upcomingBg.jpg";
import Img3 from "../../../images/bg2.jpg";
import styled from "styled-components";
import H2 from '../../../components/Text/H2';
import Button from '../../../components/Button/Button';
import Footer from '../../../components/Footer/Footer';
import { current } from './currentData';
import { Link } from 'react-router-dom';
import { mobile } from '../../../responsive';
import axios from 'axios';

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
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`;

const Current = () => {
  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
  const [currentEventData, setCurrentEventData] = useState([])

  useEffect(()=> {
    const getCurrentEvents = async() => {
      const res = await axios.get('https://pfn-lagos.herokuapp.com/currentEvent')
      setCurrentEventData(res.data)
    }
    getCurrentEvents()
  }, [])

  const handleDelete = async(id) => {
    try {
      const res = await axios.delete(`https://pfn-lagos.herokuapp.com/currentEvent/${id}`)
      
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
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Current Events</h1>
        </div>
      </div>
      {currentEventData.length === 0 ? " No Event yet" : 
        <div className="page5">
              {currentEventData.reverse().map((data)=> (
                <>
                  <div className="page5Bx" key={data.id}>
                  <div className="page5BxImg">
                      <img src={data.avatar} alt="" />
                  </div>
                  <div className="page5BxContent">
                      <div className="page5Title">
                      <H2>{data.name}</H2>
                      </div>
                      <div className="page5Title">
                      <h5>{data.title}</h5>
                      </div>
                      <div className="page5Date">
                      {data.date ? <><h5><b>Date</b></h5> : {data.date} </> : null}
                      </div>
                      <div className="page5Time">
                      {data.time ? <><h5><b>Time</b></h5> : {data.time} </> : null}
                      </div>
                      <div className="page5Location" id='upcomingLocation'>
                        {data.location ? <><h5><b>Venue</b></h5> : {data.venue} </> : null}
                      </div>
                      <div className="page5Para">
                      <p id="upcomingPara">
                        {data.desc ? <><b>{data.desc}</b></> : null}
                      </p>
                      <p id="upcomingPara">
                        {data.desc ? <><b>{data.more}</b></> : null}
                      </p>
                      <p>
                        <b>{data.theme}</b>
                      </p>
                      <p>
                        <b>{data.date2}</b>
                      </p>
                      </div>
                      <Link to={`/full-event-detail/${data._id}`}>
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
                  <hr className='Hr' id='upcomingHr' />
                  </>
              ))}
        </div>
      }
      <Footer />
    </Container>
  )
}

export default Current