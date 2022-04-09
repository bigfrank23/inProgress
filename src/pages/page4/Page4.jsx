import React from 'react'
import Img from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import H3 from '../../components/Text/H3';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './Page4.css'
import H2 from '../../components/Text/H2';
import Footer from '../../components/Footer/Footer';
import Upcomin from '../../components/Upcoming/Upcomin';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
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
    height: 100vh;
    .page1Header {
      color: #fff;
      text-align: center;
    }
  }
`

const Page4 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Header</h1>
        </div>
      </div>
      <div className="page4Top">
        <div className="page4TopLeft">
          <div className="overlayTxt">
            <h5 className="txtGreen">Lorem, ipsum. <span className="txtWhite">Lorem, ipsum.</span></h5>
          </div>
          <div className="txtOne"><h6>Lorem, ipsum dolor.</h6></div>
          <div className="txtTwo">Lorem, ipsum.</div>
          <div className="btnBx">
            <Button />
            <Button />
          </div>
          <div className="spanTxt">

          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <Link to="#">your link</Link> Omnis, autem!</span>
          </div>
        </div>
        <div className="page4TopCenter">
          <div className="overlayTxt">
            <h5 className="txtGreen">Lorem, ipsum. <span className="txtWhite">Lorem, ipsum.</span></h5>
          </div>
          <div className="txtOne"><h6>Lorem, ipsum dolor.</h6></div>
          <div className="txtTwo">Lorem, ipsum.</div>
          <div className="btnBx">
            <Button />
            <Button />
            <Button />
          </div>
          <div className="spanTxt">

          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <Link to="#">your link</Link> Omnis, autem!</span>
          </div>
        </div>
        <div className="page4TopRight">
          <div className="overlayTxt">
            <h5 className="txtGreen">Lorem, ipsum. <span className="txtWhite">Lorem, ipsum.</span></h5>
          </div>
          <div className="txtOne"><h6>Lorem, ipsum dolor.</h6></div>
          <div className="txtTwo">Lorem, ipsum.</div>
          <div className="btnBx">
            <Button />
            <Button />
          </div>
          <div className="spanTxt">

          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <Link to="#">your link</Link> Omnis, autem!</span>
          </div>
        </div>
      </div>
      <div className="spacerBx">
          <div className="spacer"></div>
      </div>
      <div className="page4Center">
        <div className="page4CenterTop">
          <div className="page4CenterTopTitle">
            <H2 children='HIGHLIGHTED CURRENT EVENTS' />
          </div>
          <div className="page4CenterTopBtn">
            <Button />
            <div className='page4BtnMid'>
            <Button />

            </div>
            <Button />
          </div>
        </div>
        <div className="page4CenterBx">
          <div className="page4TopLeft">
            <div className="overlayTxt">
              <h5 className="txtGreen">Lorem, ipsum. <span className="txtWhite">Lorem, ipsum.</span></h5>
            </div>
            <div className="txtOne"><h6>Lorem, ipsum dolor.</h6></div>
            <div className="txtTwo">Lorem, ipsum.</div>
            <div className="btnBx">
              <Button />
              <Button />
            </div>
            <div className="spanTxt">

            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <Link to="#">your link</Link> Omnis, autem!</span>
            </div>
          </div>
          <div className="page4TopCenter">
            <div className="overlayTxt">
              <h5 className="txtGreen">Lorem, ipsum. <span className="txtWhite">Lorem, ipsum.</span></h5>
            </div>
            <div className="txtOne"><h6>Lorem, ipsum dolor.</h6></div>
            <div className="txtTwo">Lorem, ipsum.</div>
            <div className="btnBx">
              <Button />
              <Button />
              <Button />
            </div>
            <div className="spanTxt">

            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <Link to="#">your link</Link> Omnis, autem!</span>
            </div>
          </div>
          <div className="page4TopRight">
            <div className="overlayTxt">
              <h5 className="txtGreen">Lorem, ipsum. <span className="txtWhite">Lorem, ipsum.</span></h5>
            </div>
            <div className="txtOne"><h6>Lorem, ipsum dolor.</h6></div>
            <div className="txtTwo">Lorem, ipsum.</div>
            <div className="btnBx">
              <Button />
              <Button />
            </div>
            <div className="spanTxt">

            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <Link to="#">your link</Link> Omnis, autem!</span>
            </div>
          </div>
        </div>
        </div>
        <div className="spacerBx">
          <div className="spacer"></div>
      </div>
      <div className="viewBtn" style={{textAlign: 'center'}}>
        <Button />
      </div>
      <div className='spacingDiv' style={{padding: '6rem 4rem 4rem 4rem'}}>
        <div className="page4Bottom">
          <div className="page4BottomTitle">
            <H2>Upcoming Events</H2>
          </div>
          <div className="page4BottomContent">
            <Upcomin 
              title1="Lorem ipsium"
              title2="Lorem ipsium"
              title3="Lorem ipsium"
              title4="Lorem ipsium"
              title5="Lorem ipsium"
              para1="2/45"
              para2='Lagos'
              image={Img2}
            />
            <Upcomin 
              title1="Lorem ipsium"
              title2="Lorem ipsium"
              title3="Lorem ipsium"
              title4="Lorem ipsium"
              title5="Lorem ipsium"
              para1="2/45"
              para2='Lagos'
              image={Img2}
            />
            <Upcomin 
              title1="Lorem ipsium"
              title2="Lorem ipsium"
              title3="Lorem ipsium"
              title4="Lorem ipsium"
              title5="Lorem ipsium"
              para1="2/45"
              para2='Lagos'
              image={Img2}
            />
          </div>
        </div>
      </div >
      <Footer />
      </Container>
  )
}

export default Page4