import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Img4 from '../../images/contactBg.jpg'
import Img5 from '../../images/announcementBg.jpg'
// import GroupImg from '../../images/group.png'
import SocialImg from '../../images/social.png'
import BgImg from '../../images/splash1.jpg'
import Footer from '../../components/Footer/Footer'
// import announcementImg from '../../images/announcement1.jpeg'
// import { Modal, Box, Typography } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from "react-bootstrap";
import './Announcement.css'
import { mobile } from '../../responsive'
import axios from 'axios'
import moment from 'moment'

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  /* background: url(${Img4}); */
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    /* clip-path: polygon(0 0, 61% 0, 100% 0, 100% 50%, 60% 100%, 60% 80%, 0% 80%); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img5});
    background-size: 100%;
    background-position: center;
    background-position-y: inherit;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({ height: "40vh", clipPath: "unset", backgroundPositionY: "25%"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
      /* text-shadow: 0 5px green; */
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

const Announcement = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleShow3 = () => setShow3(true);


  const [announcentData, setAnnouncentData] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);
   const [modalData, setModalData] = useState({});

  useEffect(()=> {
    const getAnnouncentData = async() => {
      const res = await axios.get('https://pfn-lagos.herokuapp.com/cloudUser')
      setAnnouncentData(res.data)
    }
    getAnnouncentData()
  }, [])

  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>News Feed</h1>
        </div>
      </div>
      <div className="container" id='announcementContainer'>
        <div className="row">
          {/* <div className="row mb-2"> */}
            <div className="announcementCol">
              {announcentData.map((data)=> (
                  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-450 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                      <strong className="d-inline-block mb-2 text-warning">{data.name}</strong>
                      <h3 className="mb-0">{data.title}</h3>
                      <div className="mb-1 text-muted">{moment(data.createdAt).format('LLLL')}</div>
                      <p className="mapAnnouncementPara card-text mb-4 my-4 text-bold">
                        {data.desc}
                      </p>
                      <button type="button" className="btn btn-success stretched-link" onClick={()=> {setModalData(data); setModalIsOpen(true);}}>Show More</button>
                    </div>
                    {/* <div className="col-auto d-none d-lg-block">
                      <img src={data.avatar} alt="img-bg" className="float-right" height="" width="300" />
                    </div> */}
                  </div>

                  
              ))}
            </div>

            <Modal show={modalIsOpen} onHide={()=>setModalIsOpen(false)}>
              <Modal.Header closeButton>
                <Modal.Title className='text-warning'>{modalData.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {
                  modalData.avatar ? 
                  <div className="modalImgBx d-flex justify-content-center">
                    <img src={modalData.avatar} alt="" style={{width: "80%", height: "500px"}} />
                  </div> : ""
                }
                {
                  modalData.desc ? 
                  <p className="card-text mb-4 my-4 text-center"> <br />
                        {modalData.desc}
                      </p> : ""
                }
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalIsOpen(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
        {/* </div> */}
        </div>
        <>
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-450 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">SOCIAL</strong>
              <h3 className="mb-0">PFN Lagos State Official Website and Social Media Accounts</h3>
              <div className="mb-1 text-muted">May 11</div>
              <p className="mb-auto">Please be informed that this is the official website of the Pentecostal </p>
              <button type="button" className="btn btn-success stretched-link" onClick={handleShow3}>Show More</button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={SocialImg} alt="img-bg" className="float-right" height="" width="300" />
            </div>
          </div>
        </div>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Social</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="modalTitle3">PFN LAGOS STATE OFFICIAL WEBSITE
          AND SOCIAL MEDIA ACCOUNTS</h6>
        <div className="modalContent3">
          Please be informed that this is the official website of the Pentecostal Fellowship of Nigeria, Lagos State. <b>www.pfnlagosstate.org</b>&nbsp;
           and the official social media handles are: 
        </div>
          <div className="modalContent3">
          <b>Facebook</b>:
          <p>
            <span className='text-danger'>Official Name</span>
          : Pentecostal Fellowship of Nigeria - PFN Lagos State
          </p>
          <p>
            <span className="text-danger">Link</span>
          : <a href="www.facebook.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>Click here</a>
          </p>
          <p>
            <span className='text-danger'>Handle</span>
          : @pfnlagostate
          </p>
          </div>

          <div className="modalContent3">
          <b>Twitter</b>
          <p>
            <span className='text-danger'>Official Name</span>
          : Pentecostal Fellowship of Nigeria - PFN Lagos State
          </p>
          <p>
            <span className="text-danger">Link</span>
          : <a href="www.twitter.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>Click here</a>
          </p>
          <p>
            <span className='text-danger'>Handle</span>
          : @pfnlagostate
          </p>
          </div>
          <div className="modalContent3">
            <b>Instagram</b>
            <p>
              <span className='text-danger'>Official Name</span>
            : Pentecostal Fellowship of Nigeria - PFN Lagos State
            </p>
            <p>
              <span className="text-danger">Link</span>
            : <a href="www.instagram.com/pfnlagostate" target="_blank" rel="noopener noreferrer nofollow" className='links'>Click here</a>
            </p>
            <p>
              <span className='text-danger'>Handle</span>
            : @pfnlagostate
            </p>
          </div>
          <div className="modalContent3">
            <b>YouTube Channel</b>
            <p>
              <span className='text-danger'>Official Name</span>
            : Pentecostal Fellowship of Nigeria - PFN Lagos State
            </p>
            <p>
              <span className="text-danger">Link</span>
            : <a href="https://www.youtube.com/channel/UChZXqT3Wg8buJkykYI99vCQ" target='_blank' rel="noopener noreferrer nofollow" className='links'>Click here</a>
            </p>
            <p>
              <span className='text-danger'>Handle</span>
            : @pfnlagostate
            </p>
          </div>
            <b>
           <i>
           It has come to our notice that some other websites or online platforms purported to be PFN Lagos State's 
           has been flying around the internet space, they aren't official, so you are therefore advised to thread 
           cautiously when accessing them.
           </i>
           </b> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        </div>

      <Footer />
    </Container>
  )
}

export default Announcement