import React from "react";
import Img1 from "../../images/sec.png";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/My-Post-15.png";
import Img5 from "../../images/pro9.jpg";
import styled from "styled-components";
import "./PfnExecutives.css";
import Button2 from "../../components/Button/Button2";
import H2 from "../../components/Text/H2";
import Footer from "../../components/Footer/Footer";
import { faChurch, faAddressCard, faPhone, faAt, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from '@mui/material/Grid'
import { chairmen, directors } from "../../teamMembers/team";

const Container = styled.div`
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
    background-position: center;
    background-repeat: no-repeat;
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
      .giveNowBtn{
          margin-top: 2rem;
      }
    }
  }
`;

  const pfnExecutives = [
      {
          id: '1',
          img: Img2,
          name: "John Doe",
          email: "johndoe@email.com"
      }
  ]

const PfnExecutives = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>The PFN Lagos State Executives</h1>
        </div>
      </div>
      <div className="pfnExecutivesContainer">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={Img2} alt="" />
              <div className="pfnExecutivesTxt">
                <h2>PASTOR LEKE AKINOLA</h2>
                <h5>DEPUTY CHAIRMAN</h5>
              </div>
              <Button2 BtnText="Hover" />
            </div>
            <div class="flip-box-back">
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
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={Img2} alt="" />
              <div className="pfnExecutivesTxt">
                <h2>APOSTLE AKINYELE AKINDEJOYE</h2>
                <h5>SECRETARY</h5>
              </div>
              <Button2 BtnText="Hover" />
            </div>
            <div class="flip-box-back">
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
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={Img2} alt="" />
              <div className="pfnExecutivesTxt">
                <h2>REV (DR) PEACE GOODEY</h2>
                <h5>TREASURER</h5>
              </div>
              <Button2 BtnText="Hover" />
            </div>
            <div class="flip-box-back">
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
      </div>
      <div className="pfnExecutivesContainer" id="pfnExecutivesContainer">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={Img2} alt="" />
              <div className="pfnExecutivesTxt">
                <h2>APOSTLE ENYINNAYA OKWUONU</h2>
                <h5>CHAIRMAN</h5>
              </div>
              <Button2 BtnText="Hover" />
            </div>
            <div class="flip-box-back">
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
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src={Img2} alt="" />
              <div className="pfnExecutivesTxt">
                <h2>PASTOR BAYO OYEYEMI</h2>
                <h5>Financial Secretary</h5>
              </div>
              <Button2 BtnText="Hover" />
            </div>
            <div class="flip-box-back">
              <div className="flip-box-back-content">
                <H2>More Details</H2>
                <p className="pfn-back-para">
                  <FontAwesomeIcon className="fa5Icon" icon={faChurch} />
                  Deeper Christian Life Ministries
                </p>
                {/* <p className="pfn-back-para">
                  <FontAwesomeIcon className="fa5Icon" icon={faAddressCard} />
                  97c, Marine Road, Apapa GRA
                </p> */}
                {/* <p className="pfn-back-para">
                  <FontAwesomeIcon className="fa5Icon" icon={faPhone} />
                  08023213789, +234 815 090 1500
                </p>
                <p className="pfn-back-para">
                  <FontAwesomeIcon className="fa5Icon" icon={faCalendar} />
                  30th March
                </p>
                <p className="pfn-back-para">
                  <FontAwesomeIcon className="fa5Icon" icon={faAt} />
                  enyinnaya56@yahoo.com
                </p> */}
                <div className="pfnExecutivesIcons">
                  <i className="fa fa-facebook" aria-hidden="true" />
                  <i className="fa fa-twitter" aria-hidden="true" />
                  <i className="fa fa-instagram" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pfnExecutivesContainer">
        <Grid container spacing={2}>
          {directors.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={6} lg={3}>
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <img src={data.img} alt="" />
                    <div className="pfnExecutivesTxt">
                      <h2>{data.name}</h2>
                      <h5>{data.title}</h5>
                    </div>
                    <Button2 BtnText="Hover" />
                  </div>
                  <div class="flip-box-back">
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
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="pfnExecutivesContainer">
        <Grid container spacing={2}>
          {chairmen.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={6} lg={3}>
              <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    <img src={data.img} alt="" />
                    <div className="pfnExecutivesTxt">
                      <h2>{data.name}</h2>
                      <h5>{data.title}</h5>
                    </div>
                    <Button2 BtnText="Hover" />
                  </div>
                  <div class="flip-box-back">
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
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </Container>
  );
}

export default PfnExecutives