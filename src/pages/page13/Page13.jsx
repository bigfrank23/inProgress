import React, { useState } from "react";
import Img3 from "../../images/bg2.jpg";
import styled from "styled-components";
import "./Page13.css";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import Button2 from "../../components/Button/Button2";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import PrayerImg from '../../images/prayer.png'
import PrayerImg2 from '../../images/prayer.jpeg'
import { Link } from "react-router-dom";
import axios from "axios";
import { landscapeTab, mobile, tab } from "../../responsive";
import ReCAPTCHA from 'react-google-recaptcha'

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
      url(${PrayerImg});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({ height: "40vh", clipPath: "unset", backgroundAttachment: "unset", backgroundPosition: "100% 170px", backgroundSize: "500px 50%"})}
    ${tab({ height: "42vh", backgroundPosition: "unset", backgroundSize: "100% 50%"})}
    ${landscapeTab({ height: "65vh", backgroundSize: "cover", backgroundPosition: "right"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`;
const Page13 = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [request, setRequest] = useState("")
  const [address, setAddress] = useState("")

  const[loading, setLoading] = useState(false)
  const[isVerified, setIsVerified] = useState(false)

  const handleRequest = async (e) => {
    if(email && name && request !== ""){
      if(request !== ""){
      e.preventDefault()
    setLoading(true)
    // console.log({email, message, name, subject, company})

    const body = {
      email,
      name,
      request,
      address
    }

   await axios.post('https://pfn-lagos.herokuapp.com/prayer-request/', body, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then((res) => {
      alert('Email Sent Successfully')
      // console.log('Email Sent Successfully')
      setLoading(false)
      console.log(res)
      // window.location.reload()
      if (res.data.status === 'success') {
        alert("Message Sent.");
        // console.log("Message Sent.");
        setEmail("")
        setName("")
        setRequest("")
        setAddress("")
      }
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
      } else {
        alert('Compose Request')
      }
      
    } else {
      alert('Please fill all required form')
    }
  }

  function onChange(value) {
    // console.log('Captcha value:', value);
    value && setIsVerified(true)

    if(value === null){
      return setIsVerified(false)
    }
  }

  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Prayer</h1>
        </div>
      </div>
      <div className="page13Top" id="prayerTopBx">
          <div className="page13TopContent">
            <div className="page13TopTitle">
                <H2>God is listening</H2>
            </div>
            <div className="page13TopPara">
                <PText>
                Pentecostal Fellowship of Nigeria, Lagos State provides tools, teams, and times to help individuals – and the church family as a whole – pray. Prayer is vitally important to your relationship with God. We would love to pray for you, a friend, or a family member.
                </PText>
            </div>
          </div>
          <div className="prayerImg">
            <img src={PrayerImg2} alt="" />
          </div>
      </div>
      <div className="page13Center">
          <div className="page13CenterContent">
              <div className="page13CenterTitle">
                  <H2>How can we be Praying for you?</H2>
              </div>
              <form onSubmit={handleRequest}>
                  <div className="inputName">
                    <label htmlFor="name"><PText>Name*</PText></label>
                    <input type="text" placeholder="Full Name" value={name} onChange={(e)=> setName(e.target.value)} />
                  </div>
                  <div className="inputEmail">
                    <label htmlFor="name"><PText>Email*</PText></label>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                  </div>
                  <div className="inputAddress">
                    <label htmlFor="name"><PText>Address*</PText></label>
                    <input type="text" placeholder="Your Address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
                  </div>
                  <div className="textArea">
                      <PText>Prayer Request*</PText>
                      <textarea name="" id="" value={request} onChange={(e)=> setRequest(e.target.value)}/>
                  </div>
              <div className="col-lg-12 mb-1">
                <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA}
                    onChange={onChange}
                  />
              </div>
              <div  style={isVerified ? {display: "block"} : {display: "none"}}>
                  <Button BtnText="SUBMIT" disabled = {loading} onClick={handleRequest} />
              </div>
              </form>
          </div>
              <div className="text-center mt-2">
              * All Fields are required
              </div>
      </div>
      <div className="page13Bottom">
          <div className="page13BottomContent">
              <div className="page13BottomTitle">
                  <H2 color>Join the Prayer Team</H2>
              </div>
              <div className="page13BottomPara">
                  <p>
                  If you have a heart for people and prayer, we’d love to hear from you. You will be connected to a virtual prayer team, invited to pray weekly for our church prayer requests, and/or equip you to become a prayer minister for those that are in need after service. Contact us to express your interest in joining our prayer team. 
                  </p>
              </div>
              <Link to="/directorate">
                <div className="page13BottomBtn">
                    <Button2 BtnText="JOIN THE TEAM" />
                </div>
              </Link>
          </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Page13;
