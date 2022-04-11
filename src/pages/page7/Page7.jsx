import React from 'react'
import Img from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import './Page7.css'
import Header from '../../components/Text/Header';
import H2 from '../../components/Text/H2';
import PText from '../../components/Text/PText';
import H3 from '../../components/Text/H3';
import { Link } from 'react-router-dom';
import Upcomin from '../../components/Upcoming/Upcomin';
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

const Page7 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Header</h1>
        </div>
      </div>
      <div className="page7Top">
          <div className="page7TopHeader" style={{textAlign: "center"}}>
              <Header children='Growth in community' color={true} />
          </div>
          <div className="page7TopTitle" style={{textAlign: "center", margin: '1rem 0'}}>
              <H2 children='where students can grow in relationship & faith' />
          </div>
          <div className="page7TopPara" style={{textAlign: "center"}}>
              <PText children='Students in Middle School & High School encounter Christ, grow spiritually, and serve others through weekly Youth Groups, Faith Group Gatherings, retreats, outreach events, and service opportunities.' />
          </div>
      </div>
      <div className="page7Center">
          <div className="page7Content">
              <div className="mainTitle">
                  <H2 children='Gatherings & Updates' color={true} />
              </div>
              <div className="mainTxt">
                  <H3 children='FAITH GROUPS :-' color={true} />
                  <PText color={true} children=" Faith groups are small groups of students who meet in homes weekly to grow in their relationship with God and others through bible study, fellowship and fun. These groups may be single gender or co-ed and are often co-led by adults who love students and are committed to helping them explore their faith through dynamic relationships. We have Faith Groups for each campus, if you would like to connect to these groups please contact Angie Gerrard at angie@faithma.org." />
              </div>
              <div className="mainTxt">
                  <H3 children='FAITH GROUPS :-' color={true} />
                  <PText color={true} children=" Faith groups are small groups of students who meet in homes weekly to grow in their relationship with God and others through bible study, fellowship and fun. These groups may be single gender or co-ed and are often co-led by adults who love students and are committed to helping them explore their faith through dynamic relationships. We have Faith Groups for each campus, if you would like to connect to these groups please contact Angie Gerrard at angie@faithma.org." />
              </div>
              <div className="mainTxt">
                  <H3 children='FAITH GROUPS :-' color={true} />
                  <PText color={true} children=" Faith groups are small groups of students who meet in homes weekly to grow in their relationship with God and others through bible study, fellowship and fun. These groups may be single gender or co-ed and are often co-led by adults who love students and are committed to helping them explore their faith through dynamic relationships. We have Faith Groups for each campus, if you would like to connect to these groups please contact Angie Gerrard at angie@faithma.org." />
              </div>
              <div className="page7Spacer">
                <hr />
              </div>

                <div className="lastTitle" style={{textAlign: 'center'}}>
                    <H3 children='Weekly Events' color={true} />
                </div>
                <div className="lastPara" style={{display: 'flex', gap: '5px', color: '#fff', justifyContent: 'center'}}>
                    <strong><h3>Lorem:</h3></strong>
                    <p style={{alignSelf: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nulla.</p>
                </div>
                <div className="lastPara" style={{display: 'flex', gap: '5px', color: '#fff', justifyContent: 'center'}}>
                    <strong><h3>Lorem:</h3></strong>
                    <p style={{alignSelf: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nulla.</p>
                </div>
                <div className="div" style={{textAlign: 'center'}}>
                    <Link to="#" className='links'>
                     <H3 children='Check out more events on the Church Calendar' color={true} />
                    </Link>
                </div>
          </div>
      </div>
      <div className="page7Bottom">
          <div className="page7Header">
              <H2 children='More Ways to Get Involved' />
          </div>
          <div className="page7BottomContent">
              <div className="page7BottomContentImg">
                  <img src={Img} alt="" />
              </div>
              <div className="page7BottomContentTxt">
                  <H3 children='Lorem Ipsium' />
                  <div style={{padding: '1rem 0'}}>
                      <PText children="Retreats are weekend experiences where our students unplug from the pressures of daily life to dive deep into God's word and grow in community with each other through worship, a series of messages, and unforgettable games. In September, our High Schoolers attend Camp Brookwoods and in January or February our Middle and High schoolers join with hundreds of other students from New England for the " />
                  </div>
              </div>
          </div>
          <div className="page7BottomContent">
              <div className="page7BottomContentImg">
                  <img src={Img} alt="" />
              </div>
              <div className="page7BottomContentTxt">
                  <H3 children='Lorem Ipsium' />
                  <div style={{padding: '1rem 0'}}>
                      <PText children="Retreats are weekend experiences where our students unplug from the pressures of daily life to dive deep into God's word and grow in community with each other through worship, a series of messages, and unforgettable games. In September, our High Schoolers attend Camp Brookwoods and in January or February our Middle and High schoolers join with hundreds of other students from New England for the " />
                  </div>
              </div>
          </div>
          <div className="page7BottomContent">
              <div className="page7BottomContentImg">
                  <img src={Img} alt="" />
              </div>
              <div className="page7BottomContentTxt">
                  <H3 children='Lorem Ipsium' />
                  <div style={{padding: '1rem 0'}}>
                      <PText children="Retreats are weekend experiences where our students unplug from the pressures of daily life to dive deep into God's word and grow in community with each other through worship, a series of messages, and unforgettable games. In September, our High Schoolers attend Camp Brookwoods and in January or February our Middle and High schoolers join with hundreds of other students from New England for the " />
                  </div>
              </div>
          </div>
          <div className="page7BottomContent">
              <div className="page7BottomContentImg">
                  <img src={Img} alt="" />
              </div>
              <div className="page7BottomContentTxt">
                  <H3 children='Lorem Ipsium' />
                  <div style={{padding: '1rem 0'}}>
                      <PText children="Retreats are weekend experiences where our students unplug from the pressures of daily life to dive deep into God's word and grow in community with each other through worship, a series of messages, and unforgettable games. In September, our High Schoolers attend Camp Brookwoods and in January or February our Middle and High schoolers join with hundreds of other students from New England for the " />
                  </div>
                  <Link to="#" className="links" style={{color: "green"}}>
                    <h5>Register for baptism »</h5>
                  </Link>
              </div>
          </div>
      </div>
      <div className='pageUpcoming'>
          <div className="mt">

          <H2>Upcoming Events</H2>
          </div>
          <Upcomin 
          image={Img2}
          title4="Date"
          title5="Location"
          para1="4/5"
          para2="Lagos"
          />
      </div>
      <div className="page7Last">
          <div className="page7LastTitle" style={{textAlign: 'center'}}>
              <H2 children="interested in more information?" />
          </div>
          <div className="page7LastPara" style={{textAlign: 'center', margin: '10px 0'}}>
              <PText children="Get in contact with one of our Student Ministry Leaders" />
          </div>
          <div className="page7LastContent">
              <div className="leftPage7Content">
                <div className="page7LastContentimg">
                    <img src={Img2} alt="" />
                </div>
                <div>
                    <div className="lastPara7" style={{marginTop: '10px'}}>
                        <H3 children="ANGIE GERRARD" />
                    </div>
                    <div className="lastPara7" style={{padding: '1rem 0'}}>
                        <PText children="Director of Family Ministry" />
                    </div>
                    <div className="lastPara7">
                        <PText children="angie@faithma.org" />
                    </div>
              </div>
              </div>
              <div className="leftPage7Content">
                <div className="page7LastContentimg">
                    <img src={Img2} alt="" />
                </div>
                <div>
                    <div className="lastPara7" style={{marginTop: '10px'}}>
                        <H3 children="ANGIE GERRARD" />
                    </div>
                    <div className="lastPara7" style={{padding: '1rem 0'}}>
                        <PText children="Director of Family Ministry" />
                    </div>
                    <div className="lastPara7">
                        <PText children="angie@faithma.org" />
                    </div>
              </div>
              </div>
          </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Page7