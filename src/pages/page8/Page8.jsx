import React from 'react'
import Img from "../../images/splash3.jpg";
import Img1 from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import Header from '../../components/Text/Header';
import PText from '../../components/Text/PText';
import H2 from '../../components/Text/H2';
import './Page8.css'
import H3 from '../../components/Text/H3';
import Footer from '../../components/Footer/Footer';
import Collapse from '../../components/collapse/Collapse';

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
      url(${Img2});
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

const Page8 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Page 8</h1>
        </div>
      </div>
      <div className="page8Top">
          <div className="page8TopHeader">
              <Header children='Lorem Ipsium' color={true} />
          </div>
          <div className="page8TopTitle">
              <H2 children="A place for kids to experience God's love "  />
          </div>
          <div className="page8TopPara">
              <PText color={true} children="The FAITHKIDS team partners with parents to guide children (newborn-5th grade) to live generously, love radically, and watch Jesus do the extraordinary. We are deeply committed to communicating the truth of God's love in engaging and age-appropriate ways to inspire children to become life-long followers of Jesus.  "  />
              <br />
              <PText color={true} children="The FAITHKIDS team partners with parents to guide children (newborn-5th grade) to live generously, love radically, and watch Jesus do the extraordinary. We are deeply committed to communicating the truth of God's love in engaging and age-appropriate ways to inspire children to become life-long followers of Jesus.  "  />
              <br />
              <PText color={true} children="The FAITHKIDS team partners with parents to guide children (newborn-5th grade) to live generously, love radically, and watch Jesus do the extraordinary. We are deeply committed to communicating the truth of God's love in engaging and age-appropriate ways to inspire children to become life-long followers of Jesus.  "  />
          </div>
          <div className="page8TopContent">
              <H2 children="Pre-K & Elementary" color={true} />
              <div style={{padding: '1rem 0'}}>
              <PText children="We regularly send email updates and host activities for kids! If you'd like to know more, please contact Mattie Pennington at mattie@faithma.org." color={true} />

              </div>
          </div>
      </div>
          <div className="page8Center">
              <Header children='What to Expect' transform={true}/>
              <div className='page8CenterTitle'>
                  <H3 children="Lorem Ipsium" />
              </div>
              <div>
                  <PText children="You'll be warmly greeted by our welcome volunteers, and they'll collect some basic information to help us understand how best to meet your needs. We'll give you a tour and guide you to where you can drop off your child(ren)." />
              </div>
              <div className='page8CenterTitle'>
                  <H3 children="Lorem Ipsium" />
              </div>
              <div>
                  <PText children="You'll be warmly greeted by our welcome volunteers, and they'll collect some basic information to help us understand how best to meet your needs. We'll give you a tour and guide you to where you can drop off your child(ren)." />
              </div>
              <div className='page8CenterTitle'>
                  <H3 children="Lorem Ipsium" />
              </div>
              <div>
                  <PText children="You'll be warmly greeted by our welcome volunteers, and they'll collect some basic information to help us understand how best to meet your needs. We'll give you a tour and guide you to where you can drop off your child(ren)." />
              </div>
              <div className='page8CenterTitle'>
                  <H3 children="Lorem Ipsium" />
              </div>
              <div>
                  <PText children="You'll be warmly greeted by our welcome volunteers, and they'll collect some basic information to help us understand how best to meet your needs. We'll give you a tour and guide you to where you can drop off your child(ren)." />
              </div>
          </div>
          <div className="page8SubCenter">
              <div className="page8SubCenterTitle">
                  <H2 children="Additional Service" />
              </div>
              <div className="page8CardBx">
                  <div className="page8Card">
                      <img src={Img1} alt="" />
                      <div className="page8CardText">
                          <div className="page8CardTitle">
                              <H3 color={true} children="Baby Dedication"/>
                          </div>
                          <div className="page8CardPara">
                              <PText color={true} children="Baby dedication & baptism is open to any family that regularly attends Faith Community Church. "/>
                          </div>
                          <i className="fa fa-arrow-circle-right arrowCirce" aria-hidden="true"></i>
                      </div>
                  </div>
                  <div className="page8Card">
                      <img src={Img1} alt="" />
                      <div className="page8CardText">
                          <div className="page8CardTitle">
                              <H3 color={true} children="Baby Dedication"/>
                          </div>
                          <div className="page8CardPara">
                              <PText color={true} children="Baby dedication & baptism is open to any family that regularly attends Faith Community Church. "/>
                          </div>
                          <i className="fa fa-arrow-circle-right arrowCirce" aria-hidden="true" />
                      </div>
                  </div>
                  <div className="page8Card">
                      <img src={Img1} alt="" />
                      <div className="page8CardText">
                          <div className="page8CardTitle">
                              <H3 color={true} children="Baby Dedication"/>
                          </div>
                          <div className="page8CardPara">
                              <PText color={true} children="Baby dedication & baptism is open to any family that regularly attends Faith Community Church. "/>
                          </div>
                          <i className="fa fa-arrow-circle-right arrowCirce" aria-hidden="true"></i>
                      </div>
                  </div>
              </div>
          </div>
          <div className="page8Bottom">
              <div className="page8BottomTittle">
                  <H2 children="Frequently asked Questions" />
              </div>
              <div className="colCard">
                  <Collapse />
              </div>
          </div>
          <Footer />
    </Container>
  )
}

export default Page8