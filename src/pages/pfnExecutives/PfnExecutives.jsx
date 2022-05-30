import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Img2 from "../../images/PFN10.png";
import Img5 from "../../images/slider1.png";
import styled from "styled-components";
import "./PfnExecutives.css";
import H2 from "../../components/Text/H2";
import Footer from "../../components/Footer/Footer";
import { faChurch, faAddressCard, faPhone, faAt, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from '@mui/material/Grid'
import { chairmen, directors } from "../../teamMembers/team";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: #fff;
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 0);
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${Img5});
    background-size: cover;
    background-attachment: fixed;
    background-position: 0 -150px;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({ height: "40vh", backgroundPosition: '0 25%', backgroundSize: "contain", clipPath: "unset"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
      .giveNowBtn{
          margin-top: 2rem;
      }
    }
  }
`;

const PfnExecutives = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>The PFN Lagos State Executives</h1>
        </div>
      </div>
      <div className="pfnExecTitle1">
        <div className="execTitle">
            {/* <Header color>The CWC</Header> */}
            <h2>The CWC</h2>
        </div>
      <div className="pfnExecutivesContainer">
        <Link to='/full_exec_detail_cwc'>
          <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src={Img2} alt="" />
                  <div className="pfnExecutivesTxt">
                    <h2>APOSTLE ENYINNAYA OKWUONU</h2>
                    <h5>CHAIRMAN</h5>
                  </div>
                  {/* <img src={flipImg} alt="" style={{width: '30px', height: '30px'}} /> */}
                </div>
                <div className="flip-box-back">
                  <div className="flip-box-back-content">
                    <H2>More Details</H2>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faChurch} />
                      New Life Christian Church
                    </p>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faAddressCard} />
                      97c, Marine Road, Apapa GRA
                    </p>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faPhone} />
                      08023355366, 07061000181
                    </p>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faCalendar} />
                      30th March
                    </p>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faAt} />
                      enyinnaya56@yahoo.com
                    </p>
                    <div className="pfnExecutivesIcons">
                      <i className="fa fa-facebook" aria-hidden="true" />
                      <i className="fa fa-twitter" aria-hidden="true" />
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Link>
        <Link to='/full_exec_detail_cwc2'>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={Img2} alt="" />
                <div className="pfnExecutivesTxt">
                  <h2>PASTOR LEKE AKINOLA</h2>
                  <h5>DEPUTY CHAIRMAN</h5>
                </div>
                <div>
                {/* <img src={flipImg} alt="" style={{width: '30px', height: '30px'}} /> */}
                </div>
              </div>
              <div className="flip-box-back">
                <div className="flip-box-back-content">
                  <H2>More Details</H2>
                  <p className="pfn-back-para">
                    <FontAwesomeIcon className="fa5Icon" icon={faChurch} />
                    Upper Room Baptist Church
                  </p>
                  <p className="pfn-back-para">
                    <FontAwesomeIcon className="fa5Icon" icon={faAddressCard} />
                    20, Davies Street, Off Demurin Street, Ketu Lagos
                  </p>
                  <p className="pfn-back-para">
                    <FontAwesomeIcon className="fa5Icon" icon={faPhone} />
                    08035652137, 08057845480
                  </p>
                  <p className="pfn-back-para">
                    <FontAwesomeIcon className="fa5Icon" icon={faCalendar} />
                    2nd February
                  </p>
                  <p className="pfn-back-para">
                    <FontAwesomeIcon className="fa5Icon" icon={faAt} />
                    lekeakinola@yahoo.co.uk
                  </p>
                  <div className="pfnExecutivesIcons">
                    <i className="fa fa-facebook" aria-hidden="true" />
                    <i className="fa fa-twitter" aria-hidden="true" />
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/full_exec_detail_cwc3">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src={Img2} alt="" />
                  <div className="pfnExecutivesTxt">
                    <h2>APOSTLE AKINYELE AKINDEJOYE</h2>
                    <h5>SECRETARY</h5>
                  </div>
                  {/* <img src={flipImg} alt="" style={{width: '30px', height: '30px'}} /> */}
                </div>
                <div className="flip-box-back">
                  <div className="flip-box-back-content">
                    <H2>More Details</H2>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faChurch} />
                      Guiding Light Assembly
                    </p>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faAddressCard} />
                      Epe Blk 2, Plot 5, Atowa Adegoke Street, Agric Estate,
                      Papa-Epe, Lagos.
                    </p>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faPhone} />
                      08033212772, 09055514094
                    </p>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faCalendar} />
                      9th March
                    </p>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faAt} />
                      dejoye@gmail.com Pastorakinz2@yahoo.com
                    </p>
                    <div className="pfnExecutivesIcons">
                      <i className="fa fa-facebook" aria-hidden="true" />
                      <i className="fa fa-twitter" aria-hidden="true" />
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Link>
        
      <div className="pfnExecutivesContainer" id="pfnExecutivesContainer">
        <Link to="/full_exec_detail_cwc4">
            <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src={Img2} alt="" />
                    <div className="pfnExecutivesTxt">
                      <h2>REV (DR) PEACE GOODEY</h2>
                      <h5>TREASURER</h5>
                    </div>
                    {/* <img src={flipImg} alt="" style={{width: '30px', height: '30px'}} /> */}
                  </div>
                  <div className="flip-box-back">
                    <div className="flip-box-back-content">
                      <H2>More Details</H2>
                      <p className="pfn-back-para">
                        <FontAwesomeIcon className="fa5Icon" icon={faChurch} />
                        Christ Believers Healing Ministries AKA Christ Believers
                        Assembly
                      </p>
                      <p className="pfn-back-para">
                        <FontAwesomeIcon className="fa5Icon" icon={faAddressCard} />
                        Truth And Holiness Parish Oluwakemi Close(Street by Access
                        Bank) off Addo Road, Ajah.
                      </p>
                      <p className="pfn-back-para">
                        <FontAwesomeIcon className="fa5Icon" icon={faPhone} />
                        08057797482, 08023187035
                      </p>
                      <p className="pfn-back-para">
                        <FontAwesomeIcon className="fa5Icon" icon={faCalendar} />
                        27th November
                      </p>
                      <p className="pfn-back-para">
                        <FontAwesomeIcon className="fa5Icon" icon={faAt} />
                        goodeypeace@yahoo.com
                      </p>
                      <div className="pfnExecutivesIcons">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        <i className="fa fa-twitter" aria-hidden="true" />
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Link>
        <Link to="/full_exec_detail_cwc5">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src={Img2} alt="" />
                  <div className="pfnExecutivesTxt">
                    <h2>PASTOR BAYO OYEYEMI</h2>
                    <h5>Financial Secretary</h5>
                  </div>
                  {/* <img src={flipImg} alt="" style={{width: '30px', height: '30px'}} /> */}
                </div>
                <div className="flip-box-back">
                  <div className="flip-box-back-content">
                    <H2>More Details</H2>
                    <p className="pfn-back-para">
                      <FontAwesomeIcon className="fa5Icon" icon={faChurch} />
                      Deeper Christian Life Ministries
                    </p>
                    <div className="pfnExecutivesIcons">
                      <i className="fa fa-facebook" aria-hidden="true" />
                      <i className="fa fa-twitter" aria-hidden="true" />
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </Link>
        </div>
      </div>
      </div>

        <section className="pfnExecTitle2" id="section2">
        <div className="execTitle">
          {/* <Header color>The Directors</Header> */}
          <h2>The Directors</h2>
      </div>
      <div className="pfnExecutivesContainer">
        <Grid container spacing={2}>
          {directors.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={6} lg={4}>
               <Link to={{pathname: `/full_exec_detail`, state: {header: `${data.header}`, img: `${data.img}`, name: `${data.name}`, title: `${data.title}`, position: `${data.position}`, church: `${data.church}`, address: `${data.address}`, tel: `${data.tel}`, dOb: `${data.dOb}`, email: `${data.email}`, province: `${data.province}`, bio: `${data.bio}` }}}>
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <img src={Img2} alt="" />
                        <div className="pfnExecutivesTxt">
                          <h2>{data.name}</h2>
                          <h5>{data.title}</h5>
                        </div>
                        {/* <img src={flipImg} alt="" style={{width: '30px', height: '30px'}} /> */}
                      </div>
                      <div className="flip-box-back">
                        <div className="flip-box-back-content">
                          <div className="flipBackTitle">
                            <H2>More Details</H2>
                          </div>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon className="fa5Icon" icon={faChurch} />
                            {data.church}
                          </p>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon
                              className="fa5Icon"
                              icon={faAddressCard}
                            />
                            {data.address}
                          </p>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon className="fa5Icon" icon={faPhone} />
                            {data.tel}
                          </p>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon
                              className="fa5Icon"
                              icon={faCalendar}
                            />
                            {data.dOb}
                          </p>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon className="fa5Icon" icon={faAt} />
                            {data.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
               </Link>
            </Grid>
          ))}
        </Grid>
      </div>
      </section>

            <div className="pfnExecTitle3">
                <div className="execTitle">
                {/* <Header color>The Province Chairmen</Header> */}
                <h2>The Province Chairmen</h2>
              </div>
        <div className="pfnExecutivesContainer">
          <Grid container spacing={2}>
            {chairmen.map((data) => (
              <Grid key={data.id} item xs={12} sm={6} md={6} lg={4}>
                <Link to={{pathname: `/full_exec_detail`, state: {header: `${data.header}`, img: `${data.img}`, name: `${data.name}`, title: `${data.title}`, position: `${data.position}`, church: `${data.church}`, address: `${data.address}`, tel: `${data.tel}`, dOb: `${data.dOb}`, email: `${data.email}`, province: `${data.province}`, bio: `${data.bio}` }}}>
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <img src={Img2} alt="" />
                        <div className="pfnExecutivesTxt">
                          <h2>{data.name}</h2>
                          <h5>{data.title}</h5>
                        </div>
                        {/* <img src={flipImg} alt="" style={{width: '30px', height: '30px'}} /> */}
                      </div>
                      <div className="flip-box-back" onClick={()=> {setOpen(true); setModalData(data)}}>
                        <div className="flip-box-back-content">
                          <H2>More Details</H2>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon className="fa5Icon" icon={faChurch} />
                            {data.church}
                          </p>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon
                              className="fa5Icon"
                              icon={faAddressCard}
                            />
                            {data.address}
                          </p>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon className="fa5Icon" icon={faPhone} />
                            {data.tel}
                          </p>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon
                              className="fa5Icon"
                              icon={faCalendar}
                            />
                            {data.dOb}
                          </p>
                          <p className="pfn-back-para">
                            <FontAwesomeIcon className="fa5Icon" icon={faAt} />
                            {data.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
            </div>
      <Footer />
    </Container>
  );
}

export default PfnExecutives