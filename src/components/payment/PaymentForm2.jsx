import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Img from '../../images/give.jpg'
import Img3 from '../../images/bg2.jpg'
import Img4 from '../../images/web2.jpg'
import paystackImg from '../../images/paystack.png'
import visaImg from '../../images/visa.png'
import mastercardImg from '../../images/mastercard.png'
import { landscapeTab, mobile, tab } from '../../responsive';
import './PaymentForm.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Footer from '../Footer/Footer'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import PaystackPop from '@paystack/inline-js'
import { usePaystackPayment } from 'react-paystack';
import { Helmet } from 'react-helmet-async'

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
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
    ${mobile({ height: "40vh", clipPath: "unset", backgroundPosition: "10px -85px", backgroundSize: "400px 100%"})}
    .page1Header {
      color: #fff;
      text-align: center;
      /* text-shadow: 0 4px brown; */
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
  .pageBanner {
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${Img4}) !important;
    background-size: contain !important;
    background-position: left !important;
    background-repeat: no-repeat !important;
    position: relative;
    width: 100% !important;
    padding: 4rem;
    color: #fff;
    text-align: center;
    ${mobile({ padding: "2rem"})}
  }
  .pageContent{
      padding: 4rem;
      ${mobile({padding: "2rem"})}
  }
  .pageContentTop{
      display: flex;
      padding: 2rem 3rem;
      gap: 3rem;
      ${mobile({display: "block", padding: 0})}
      ${tab({display: "block"})}
      ${landscapeTab({display: "flex"})}
      .left{
        flex: 1;
        .pageContentTitle{
            margin-bottom: 1.5rem;
            margin: 0 2rem 0;
        }
        .pageContentPara{
            padding-top: 1rem;
            ${mobile({textAlign: "center"})}
        }
      }
      .right{
          width: 400px;
          height: 400px;
          flex: 1;
          ${mobile({width: "unset", height: "unset", padding: "2rem 0"})}
          ${tab({margin: "auto"})}
          ${landscapeTab({margin: "auto"})}
          img{
              width: 100%;
              height: 100%;
              object-fit: contain;
          }
      }
  }
  .center{
      flex-direction: row-reverse;
  }
  /* .bottom{
      flex-direction: row-reverse;
  } */
`;

const PaymentForm2 = () => {

  return (
    <Container>
      <Helmet>
        <title>Give</title>
        <meta name="description" content="Give Generously. The Gift Of Giving" />
        <link rel="canonical" href="/give" />
      </Helmet>
    <div className="page1Wrapper">
        <div className="page1Header">
            <h1>Give Generously</h1>
        </div>
    </div>
    {/* <div className="giveTopContainer">
      <h2 className="title">The Gift Of Giving</h2>
      <h2 className="title2">GIVE.SAVE.SPEND</h2>
      <div className="giveTopContainerPara">
        <p>A simple way to remember biblical financial priorities. First, we give. Christians give a portion of what we receive back to the Lord because God has been so generous to us. Second, we save. We remember Joseph who saved grain so that, when the drought came, there was enough saved to feed thousands. Third, we spend. After giving a portion and saving a portion, we spend the funds we are blessed with to support ourselves. Give. Save. Spend. Order your life around these three biblical principles to feel less stress and be a blessing to others!</p>
      </div>
    </div> */}
    <>
    <iframe loading="lazy" src={process.env.REACT_APP_PAYSTACK} style={{border: "0px #F4F4F4 dashed", width: "100%", height: "960px"}} name="online-giving" scrolling="no" frameBorder="1" marginHeight="0px" marginWidth="0px" allowFullScreen></iframe>
    </>
    <Footer />
    </Container>
  )
}

export default PaymentForm2