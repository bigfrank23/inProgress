import React, {useState} from 'react'
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import PText from '../../components/Text/PText';
import H2 from '../../components/Text/H2';
import Footer from '../../components/Footer/Footer';
import './Page9.css'
import Button from '../../components/Button/Button';
import { directorate } from '../../teamMembers/directorate';
// import { Modal, Box, Typography } from '@mui/material';
import { Modal} from "react-bootstrap";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { provinces } from '../../teamMembers/provinces';
import DirectorateImg from '../../images/directorate.png'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { mobile } from '../../responsive';


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
    /* clip-path: polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%); */
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${DirectorateImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 53vh;
    ${mobile({ height: "40vh", clipPath: "unset"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
`

const Page9 = () => {
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleShow = (data) => {
    setShow(true)
    setModalData(data)
  };
  const handleClose = () => setShow(false);

  const allProvinces = provinces.sort(function(a, b) {
    const nameA = a.province.toUpperCase(); // ignore upper and lowercase
    const nameB = b.province.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [province, setProvince] = useState('')
  const [message, setMessage] = useState('')
  const [directorat, setDirectorat] = useState('')
  const[loading, setLoading] = useState(false)

  const handleRequest = async (e) => {
    if(email && fullname && address && message && directorat && phone && province !== ""){
      if(message !== ""){
      e.preventDefault()
    setLoading(true)
    // console.log({email, message, name, subject, company})

    const body = {
      email,
      message, 
      fullname,
      province,
      phone,
      address,
      directorat
    }

   await axios.post('https://pfn-lagos.herokuapp.com/directorate/', body, {
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
        setFullname("")
        setAddress("")
        setPhone("")
        setMessage("")
        setProvince("")
        setDirectorat("")
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
          <h1>Directorates</h1>
        </div>
      </div>
      <div className="page9TopContainer">
        <div className="page9TopHeader">
          {/* <Header color={true} children="Doing good" /> */}
          <h2>Doing good</h2>
        </div>
        <div className="page9TopTitle">
          <H2 children="FIND MEANINGFUL CONNECTION AND PURPOSE" />
        </div>
        <div className="page9TopPara">
          <PText>
           At PFN Lagos, we’re not just looking for volunteers. We’re looking to help people discover their purpose.
           If getting involved in a fellowship is your next step contact info@pfnlagosstate.org or check with one of the many provinces or chapters.
          </PText>
        </div>
        <div className="page9TopContent">
          <div className="page9TopContentTitle">
            <H2 color="true">HELP ME GET STARTED</H2>
          </div>
          {/* <div className="page9TopContentTitle2">
            <H3 color="true">Lorem, ipsum.</H3>
          </div> */}
          <div className="page9TopContentPara">
            <p>
            Supporting the work of the PFN executives at all levels are the various directorates that offer invaluable inputs on specialized subjects and issues ranging from security to inter-governmental matters, and a host of others.
            </p>
          </div>
          <div className="page9TopContentPara">
            <p>
            The Directorate is a department that is responsible for one particular thing.
            </p>
          </div>
          <div className="page9TopContentPara">
            <p>
            It's our way of connecting people to the things they love to do. We believe that if you are doing something you love (and something God has already prepared you for), you’ll experience a greater sense of connection and purpose!
            </p>
          </div>
          {/* <div className="page9TopContentTitle2">
            <H3 color="true">Lorem, ipsum.</H3>
          </div> */}
          <div className="page9TopContentTitle2">
            <Link to="/contact" id='links'>
              <h3>Reach Out »</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="page9CenterContainer">
        <div className="page9CenterTitle">
          <h2>Join A Team</h2>
        </div>
        <div className="page9HoverCard">
          {directorate.map((data, i)=> (
            <>
              <div key={i} className="page9Card" onClick={()=>handleShow(data)}>
                <div className="page9CardImgBx">
                  <img src={data.img} alt="" />
                </div>
                <div className="page9CardTxt">
                  <div className="page9CardTxtTitle">
                    <h3>{data.directorate}</h3>
                  </div>
                  {/* <div className="page9CardTxtPara">
                    <PText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, saepe? Aspernatur pariatur saepe ipsa obcaecati voluptas inventore quam quasi eaque id! Ipsa iste odio maiores, excepturi voluptatibus delectus voluptatem ab?
                    </PText>
                  </div> */}
                  {/* <i className="fa fa-arrow-circle-right page9Icon" aria-hidden="true" /> */}
                </div>
                  <FontAwesomeIcon className="fa5Icon page9Icon" icon={faArrowUpRightFromSquare} />
              </div>
              
            </>
          ))}
          <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className='text-danger text-center'>{modalData.directorate}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{padding: "2rem"}}>
                    <form onSubmit = {handleRequest} method = "post">
                      <div className="form-group">
                        <label htmlFor="name">Directorate</label>
                        <input type="text" className="form-control" id="directorat" value= {directorat} onChange = {(e) => setDirectorat(e.target.value)}  />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Full name</label>
                        <input type="text" className="form-control" id="name" value = {fullname} onChange = {(e) => setFullname(e.target.value)}  />
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" value = {address} onChange = {(e) => setAddress(e.target.value)}  />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" value = {email} onChange = {(e) => setEmail(e.target.value)}  />
                      </div>
                      <div class="form-group my-3">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" className="form-control" id="phone" value = {phone} onChange = {(e) => setPhone(e.target.value)}  />
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputState">Select your province</label>
                          <select id="inputState" class="form-control" value = {province} onChange = {(e) => setProvince(e.target.value)}>
                            <option value="Select">Select</option>
                              {allProvinces.map((data)=> (
                                <option value={data.province}>
                                  {data.province}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                        <div className="form-group my-3">
                        <label htmlFor="exampleFormControlTextarea1">Your Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value = {message} onChange = {(e) => setMessage(e.target.value)} />
                      </div>
                        <button type="submit" className="btn btn-primary" disabled = {loading} onClick = {handleRequest}>Submit</button>
                    </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                  {/* <button type="button" className="btn btn-success stretched-link" onClick={handleClose}>
                    Close
                  </button> */}
                </Modal.Footer>
              </Modal>
        </div>
      </div>
     
      <div className="page9BottomBanner">
        <div className="page9BottomBannerTitle">
          <H2>need some help getting started?</H2>
        </div>
        <div className="page9BottomBannerPara">
          <PText color weight>
          One of our team members will be happy to chat with you.
          </PText>
        </div>
        <div className="page9BottomBannerBtn">
          <Link to="/contact" id='links'>
          <Button BtnText='Contact Us' />
          </Link>
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Page9