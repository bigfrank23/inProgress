import React from 'react'
import Img from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from "styled-components";
import H2 from '../../components/Text/H2';
import H3 from '../../components/Text/H3';
import PText from '../../components/Text/PText';
import './Page5.css'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

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
`;

const Page5 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Header</h1>
        </div>
      </div>
      <div className="page5">
        <div className="page5Bx">
          <div className="page5BxImg">
            <img src={Img2} alt="" />
          </div>
          <div className="page5BxContent">
            <div className="page5Title">
              <H2 children='Lorem Ipsium' />
            </div>
            <div className="page5Date">
              <H3 children='Lorem' /> : 8/9/4
            </div>
            <div className="page5Location">
              <H3 children='Lorem' /> : Lorem, ipsum.
            </div>
            <div className="page5Time">
              <H3 children='Lorem' /> : 94:99.
            </div>
            <div className="page5Para">
              <PText children="ONGOING: first Sunday of each month. Caregiving for an aging parent or loved one can be a lonely and isolated experience. But you don,t have to go it alone. Faith Community Church's Caring for Aging Parents Support group meets the first ..."/>
            </div>
            <div className="page5Btn">
              <Button />
            </div>
          </div>
        </div>
        <hr className='Hr' />
        <div className="page5Bx">
          <div className="page5BxImg">
            <img src={Img2} alt="" />
          </div>
          <div className="page5BxContent">
            <div className="page5Title">
              <H2 children='Lorem Ipsium' />
            </div>
            <div className="page5Date">
              <H3 children='Lorem' /> : 8/9/4
            </div>
            <div className="page5Location">
              <H3 children='Lorem' /> : Lorem, ipsum.
            </div>
            <div className="page5Time">
              <H3 children='Lorem' /> : 94:99.
            </div>
            <div className="page5Para">
              <PText children="ONGOING: first Sunday of each month. Caregiving for an aging parent or loved one can be a lonely and isolated experience. But you don,t have to go it alone. Faith Community Church's Caring for Aging Parents Support group meets the first ..."/>
            </div>
            <div className="page5Btn">
              <Button />
            </div>
          </div>
        </div>
        <hr className='Hr' />
        <div className="page5Bx">
          <div className="page5BxImg">
            <img src={Img2} alt="" />
          </div>
          <div className="page5BxContent">
            <div className="page5Title">
              <H2 children='Lorem Ipsium' />
            </div>
            <div className="page5Date">
              <H3 children='Lorem' /> : 8/9/4
            </div>
            <div className="page5Location">
              <H3 children='Lorem' /> : Lorem, ipsum.
            </div>
            <div className="page5Time">
              <H3 children='Lorem' /> : 94:99.
            </div>
            <div className="page5Para">
              <PText children="ONGOING: first Sunday of each month. Caregiving for an aging parent or loved one can be a lonely and isolated experience. But you don,t have to go it alone. Faith Community Church's Caring for Aging Parents Support group meets the first ..."/>
            </div>
            <div className="page5Btn">
              <Button />
            </div>
          </div>
        </div>
        <hr className='Hr' />
        <div className="page5Bx">
          <div className="page5BxImg">
            <img src={Img2} alt="" />
          </div>
          <div className="page5BxContent">
            <div className="page5Title">
              <H2 children='Lorem Ipsium' />
            </div>
            <div className="page5Date">
              <H3 children='Lorem' /> : 8/9/4
            </div>
            <div className="page5Location">
              <H3 children='Lorem' /> : Lorem, ipsum.
            </div>
            <div className="page5Time">
              <H3 children='Lorem' /> : 94:99.
            </div>
            <div className="page5Para">
              <PText children="ONGOING: first Sunday of each month. Caregiving for an aging parent or loved one can be a lonely and isolated experience. But you don,t have to go it alone. Faith Community Church's Caring for Aging Parents Support group meets the first ..."/>
            </div>
            <div className="page5Btn">
              <Button />
            </div>
          </div>
        </div>
        <hr className='Hr' />
        <div className="page5Bx">
          <div className="page5BxImg">
            <img src={Img2} alt="" />
          </div>
          <div className="page5BxContent">
            <div className="page5Title">
              <H2 children='Lorem Ipsium' />
            </div>
            <div className="page5Date">
              <H3 children='Lorem' /> : 8/9/4
            </div>
            <div className="page5Location">
              <H3 children='Lorem' /> : Lorem, ipsum.
            </div>
            <div className="page5Time">
              <H3 children='Lorem' /> : 94:99.
            </div>
            <div className="page5Para">
              <PText children="ONGOING: first Sunday of each month. Caregiving for an aging parent or loved one can be a lonely and isolated experience. But you don,t have to go it alone. Faith Community Church's Caring for Aging Parents Support group meets the first ..."/>
            </div>
            <div className="page5Btn">
              <Button />
            </div>
          </div>
        </div>
        <hr className='Hr' />
        <div className="page5Bx">
          <div className="page5BxImg">
            <img src={Img2} alt="" />
          </div>
          <div className="page5BxContent">
            <div className="page5Title">
              <H2 children='Lorem Ipsium' />
            </div>
            <div className="page5Date">
              <H3 children='Lorem' /> : 8/9/4
            </div>
            <div className="page5Location">
              <H3 children='Lorem' /> : Lorem, ipsum.
            </div>
            <div className="page5Time">
              <H3 children='Lorem' /> : 94:99.
            </div>
            <div className="page5Para">
              <PText children="ONGOING: first Sunday of each month. Caregiving for an aging parent or loved one can be a lonely and isolated experience. But you don,t have to go it alone. Faith Community Church's Caring for Aging Parents Support group meets the first ..."/>
            </div>
            <div className="page5Btn">
              <Button />
            </div>
          </div>
        </div>
        <hr className='Hr' />
      </div>
      <Footer />
    </Container>
  )
}

export default Page5