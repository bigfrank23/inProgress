import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Img from '../../images/splash2.jpg'
import Img from '../../../../images/eventsBg.jpg'
import Img3 from '../../../../images/bg2.jpg'
import BgImg from '../../../../images/splash1.jpg'
import Footer from '../../../../components/Footer/Footer';
import H3 from '../../../../components/Text/H3';
import { Link, useLocation, useParams } from 'react-router-dom'
import '../FullEventDetail.css'
import Button2 from '../../../../components/Button/Button2'
import { mobile } from '../../../../responsive'
import axios from 'axios'

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
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 62vh;
    ${mobile({ height: "40vh", clipPath: "unset", backgroundPosition: "0 15%"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
  .pageBanner {
    background: linear-gradient(
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)
      ),
      url(${BgImg});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    position: relative;
    margin-top: 42rem;
    padding: 4rem;
    color: #fff;
    text-align: center;
  }
  .pageContent{
      padding: 4rem;
  }
`;
const PastEventFullDetail = () => {
  const [fullEventData, setFullEventData] = useState([])
  const location = useLocation()
  let { id } = useParams();

  // const path = location.pathname.split("/")[2];

  // console.log(path);
  // console.log(id);
  
  useEffect(()=> {
    const getFullEvents = async() => {
      const res = await axios.get(`https://pfn-lagos.herokuapp.com/pastEvent/` + id)
      setFullEventData(res.data)
    }
    getFullEvents()
  }, [])

  // console.log(fullEventData);
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header text-uppercase">
          <h1>{fullEventData.title}</h1>
        </div>
      </div>
      <div className="fullEventDetailContent">
          <div className="fullEventDetailImg m-auto">
            {fullEventData.avatar ? <><img src={fullEventData.avatar} alt="" style={{width: "100%"}} /></> : null}
          </div>
          <div className="sectThree" id='fullEventDetailSectThree'>
            <div className="sectThreeTitle text-center">
              <H3>{fullEventData.name}</H3>
            </div>
            <div className="sectThreeTitle text-center">
              <h4>{fullEventData.title}</h4>
            </div>
            <div className="sectThreePara text-center">
              {fullEventData.date ? <><h5><b>Date: </b>{fullEventData.date}</h5></> : null}
            </div>
            <div className="sectThreePara text-center">
              {fullEventData.time ? <><h5><b>Time: </b>{fullEventData.time}</h5></> : null}
            </div>
            <div className="sectThreePara text-center">
              {fullEventData.location ? <><h5><b>Location: </b>{fullEventData.location}</h5></> : null}
            </div>
            <div className="sectThreePara text-center">
              {fullEventData.desc ? <><h5><b>{fullEventData.desc}</b></h5></> : null}
            </div>
            <div className="sectThreePara text-center">
              {fullEventData.more ? <><h5><b>{fullEventData.more}</b></h5></> : null}
            </div>
          </div>
      </div>
      <div className="fullEventBanner">
        <h4 className='text-center text-white py-3'>Have any question to ask?</h4>
        <div className="sectTwoBtn p-5">
          <Link to="/contact">
          <Button2 BtnText="Contact now" />
          </Link>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default PastEventFullDetail