import React, {useState} from 'react'
import Img from "../../images/splash3.jpg";
import Img1 from "../../images/splash3.jpg";
import Img2 from "../../images/volunteer.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import Header from '../../components/Text/Header';
import PText from '../../components/Text/PText';
import H2 from '../../components/Text/H2';
import H3 from '../../components/Text/H3';
import H4 from '../../components/Text/H4';
import Footer from '../../components/Footer/Footer';
import './Page9.css'
import Upcomin from '../../components/Upcoming/Upcomin';
import Button from '../../components/Button/Button';
import { directorate } from '../../teamMembers/directorate';
import { Modal, Box, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { faChurch, faAddressCard, faPhone, faAt, faCalendar, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { provinces } from '../../teamMembers/provinces';
import DirectorateImg from '../../images/directorate.png'

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
    clip-path: polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
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
    height: 65vh;
    .page1Header {
      color: #fff;
      text-align: center;
    }
  }
`
// Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles((theme) => ({
  /** Changed modalStyle */
  modalStyle: { backgroundColor: "rgba(0, 0, 0, 0.1)", zIndex: "1" },
  boxStyle: {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#fff",
  // border: "2px solid #000",
  outline: 0,
  boxShadow: 24,
  p: 4,
  }
}));

const Page9 = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const handleClose = () => setOpen(false);

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
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Directorate</h1>
        </div>
      </div>
      <div className="page9TopContainer">
        <div className="page9TopHeader">
          <Header color={true} children="Doing good" />
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
            <H2 color="true">Lorem, ipsum.</H2>
          </div>
          <div className="page9TopContentTitle2">
            <H3 color="true">Lorem, ipsum.</H3>
          </div>
          <div className="page9TopContentPara">
            <PText color="true">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto optio incidunt sed, pariatur quos quaerat, iure est nobis ipsa non earum quisquam culpa suscipit ex iusto deleniti? Eum laboriosam eligendi error magnam fugiat repudiandae aliquam ad minima debitis, iusto culpa id dolores enim earum non nulla vel delectus nam totam!
            </PText>
          </div>
          <div className="page9TopContentTitle2">
            <H3 color="true">Lorem, ipsum.</H3>
          </div>
          <div className="page9TopContentTitle2">
            <H3 color="true">Complete your SHAPE profile online »</H3>
          </div>
        </div>
      </div>
      <div className="page9CenterContainer">
        <div className="page9CenterTitle">
          <h2>Join A Team</h2>
        </div>
        <div className="page9HoverCard">
          {directorate.map((data)=> (
            <>
              <div className="page9Card" onClick={()=> {setOpen(true); setModalData(data)}}>
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
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className={classes.modalStyle}
                >
                  <Box className={classes.boxStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: "center", fontFamily: "cursive"}}>
                      {modalData.directorate}
                    </Typography>
                    <div style={{padding: "2rem"}}>
                    <form>
                      {/* <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputEmail4">Email</label>
                          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputPassword4">Password</label>
                          <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                      </div> */}
                      <div class="form-group">
                        <label for="name">Full name</label>
                        <input type="text" className="form-control" id="name"  />
                      </div>
                      <div class="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress"  />
                      </div>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email"  />
                      </div>
                      <div class="form-group my-3">
                        <label for="phone">Phone Number</label>
                        <input type="number" className="form-control" id="phone"  />
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputState">Select your province</label>
                          <select id="inputState" class="form-control">
                            <option selected>Select</option>
                              {allProvinces.map((data)=> (
                                <option>
                                  {data.province}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                        <div class="form-group my-3">
                        <label for="exampleFormControlTextarea1">Your Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                  </Box>
                </Modal>
            </>
          ))}
        </div>
      </div>
      <div className='page9Bottom'>
        <div className="page9BottomTitle">
          <H2>Upcoming Events</H2>
        </div>
        <div className="page9BottomContent">
          <Upcomin title1="lorekroe"
            title3="Celebrate Recovery"
            title4="Date"
            para1="2/0"
            title5="Location"
            para2="Lagos"
            image={Img2}
          />
          <Upcomin title1="lorekroe"
            title3="Celebrate Recovery"
            title4="Date"
            para1="2/0"
            title5="Location"
            para2="Lagos"
            image={Img2}
          />
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
          <Button BtnText='Contact Us' />
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Page9