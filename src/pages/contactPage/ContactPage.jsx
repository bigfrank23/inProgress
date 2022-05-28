import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar';
// import Img from '../../images/splash2.jpg'
import Img from '../../images/believe.png'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import Img4 from '../../images/contactBg.jpg'
import Img5 from '../../images/contactBg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Text/Header';
import PText from './../../components/Text/PText';
import H2 from './../../components/Text/H2';
import H3 from '../../components/Text/H3';
import Header2 from '../../components/Text/Header2';
import { Link } from 'react-router-dom';
import BannerImg from '../../images/web3.jpg'
import SendIcon from '@mui/icons-material/Send';
import sending from '../../images/sending.gif'
import axios from 'axios'
// import './ContactPage.css'

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  /* background: url(${Img4}); */
  background-color: #ee5522;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FB3'/%3E%3Cstop offset='1' stop-color='%23ee5522'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f7882b'/%3E%3Cstop offset='1' stop-color='%23ee5522'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(0 0, 61% 0, 100% 0, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img5});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
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
      text-shadow: 0 5px green;
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


const ContactPage = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  // const [subject, setSubject] = useState('')
  // const [company, setCompany] = useState('')
  const[loading, setLoading] = useState(false)

  const handleRequest = async (e) => {
    if(email && location && name && message && phone !== ""){
      if(message !== ""){
      e.preventDefault()
    setLoading(true)
    // console.log({email, message, name, subject, company})

    const body = {
      email,
      message, 
      // subject, 
      name,
      // company,
      phone,
      location
    }

   await axios.post('http://localhost:5000/mail/', body, {
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
        setLocation("")
        setPhone("")
        setMessage("")
      }
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
      } else {
        alert('Compose Email')
      }
      
    } else {
      alert('Please fill all required form')
    }
  }

  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Contact us</h1>
        </div>
      </div>
      <div className="contactPageGetinTouchContainer d-flex" style={{padding: "0rem 7rem 2rem 7rem"}}>
        <div style={{clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)", background: "gray", color: '#fff', padding: '4rem'}}>
          <h2>Get in touch with us today</h2>
          <h4>We’d love to hear from you</h4>
          <p>Send us a message and we’ll respond as soon as possible</p>
          {/* <div className="col-lg-12">
            <a  href="#contact">
              <button type="submit" className="btn btn-dark mt-3 mb-3 text-white border-0 py-2 px-3"><span> CONTACT NOW <i className="fa fa-arrow-right"></i></span></button>
            </a>
          </div> */}
        </div>
          <div></div>
        </div>
<div className="contact2 mt-3" id="contact">
  <div className="container">
    <div className="row contact-container">
      <div className="col-lg-12">
        <div className="card card-shadow border-0 mb-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box p-4">
                <h4 className="title text-center">Contact Form</h4>
                <marquee>
                <span>"Neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." Romans 8:39</span>
                </marquee>
                <form onSubmit = {handleRequest} method = "post">
                <div className = "form__title">
                  <h4>{loading ? 'Sending...' : ""}</h4>
                  {/* {
                  loading && <img 
                    src = {sending}
                    alt = "loading..."
                    style = {{
                      // filter: "invert(1)",
                      position: "absolute",
                      width : 200,
                      height : 200,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                  />
                } */}
                </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="Name" id = "name" value = {name} onChange = {(e) => setName(e.target.value)} />
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="Company" id = "company" value = {company} onChange = {(e) => setCompany(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="Subject" id = "subject" value = {subject} onChange = {(e) => setSubject(e.target.value)} />
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="Email" id = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="Phone" id = "phone" value = {phone} onChange = {(e) => setPhone(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="Location" id = "location" value = {location} onChange = {(e) => setLocation(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <textarea className="form-control" style={{height: "300px", resize: "none"}} type="text" placeholder="Message" id = "message" value = {message} onChange = {(e) => setMessage(e.target.value)} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-dark mt-3 mb-3 text-white border-0 py-2 px-3" disabled = {loading} onClick = {handleRequest}><span> SUBMIT NOW <SendIcon /> </span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 bg-image" style={{background: "#263948"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253664.50294512132!2d3.2922873848851304!3d6.583612394604272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8de2d6dc2833%3A0x6b683e00c6393bd7!2sPentecostal%20Fellowship%20of%20Nigeria%2C%20Lagos%20State!5e0!3m2!1sen!2sng!4v1651050624529!5m2!1sen!2sng" width="100%" height="300" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className="detail-box p-4">
                <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                <p className="text-white op-7"> <i className="fa fa-address-book" aria-hidden="true" /> 5-9 Bode Thomas Rd, Onipanu 100252,
                  <br /> Lagos</p>
                <h5 className="text-white font-weight-light mb-3 mt-4">CALL US</h5>
                <p className="text-white op-7"><i className="fa fa-phone" aria-hidden="true" /> 09153848219 09153848220
                  {/* <br /> <i className="fa fa-phone" aria-hidden="true" /> 630 446 8851 */}
                  </p>
                <div className="round-social light d-flex gap-3">
                    <a href="https://www.facebook.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                      <div className="ml-0 text-decoration-none text-white"><i className="fa fa-facebook" aria-hidden="true" /></div>
                    </a>
                    <a href="https://www.twitter.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                        <div className="text-decoration-none text-white"><i className="fa fa-twitter" aria-hidden="true" /></div>
                    </a>
                    <a href="https://www.instagram.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>
                      <div className="text-decoration-none text-white"><i className="fa fa-instagram" aria-hidden="true" /></div>
                    </a>
                    <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                      <div className="text-decoration-none text-white"><i className="fa fa-youtube" aria-hidden="true" /></div>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+2349153848219" target='_blank' rel="noopener noreferrer nofollow" className='links'>
                      <i className="fa fa-whatsapp footerSocialIcon" aria-hidden="true" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="contactPageBannerContainer" style={{background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(${BannerImg})`, height: "250px", backgroundSize: 'cover', display: 'flex', alignItems: "center", justifyContent: "center"}}>
  <div className="contactPageMapTitle">
    <h5 style={{color: "#990000", fontStyle: "italic"}}>"Give ear and hear my voice, Listen and hear my words."</h5>
    <h3 className='text text-center'>Isaiah 28:23</h3>
</div>
</div>
 <Footer />
    </Container>
  )
}

export default ContactPage