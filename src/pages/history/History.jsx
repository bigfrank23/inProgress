import React from 'react'
import Img from "../../images/splash3.jpg";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import styled from 'styled-components'
import './History.css'
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
    background-attachment: fixed;
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

const History = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>History of PFN</h1>
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
                  <H2 children='History of PFN (COMING A LONG WAY)' color />
              </div>
              <div className="mainTxt">
                  <PText color >
                  <b>Y</b>et, the Pentecostal movement in Nigeria is less than 100 years old. It started in early 1900s when Anglican launched an indigenous prophetic movement that later became the Christ Army Church following an outbreak of influenza epidemic in 1918. Other groups soon emerged such as Eternal Sacred Order of the Cherubim and Seraphim society in 1925 and the Church of the Lord Aladura in 1930.
                   <PText color > But by far, the biggest sensation in the movement about this time was the Oke-Oye, Ilesha revival by Joseph Babalola of faith Tabernacle. A heated argument was on by concerned rulers over miracles when Babalola raised a dead lad. That miracle effectively ended the controversy and ushered in a revival meeting that lasted for years. </PText>
                    <PText color >In 1941, Babalola founded the Christ Apostolic Church (CAC). Other foreign Churches such as Welsh Apostolic Church (1939) and the Foursquare Gospel Church (1954) also came on board. The era was marked with fervent prayers. </PText>
                      <PText color > In 1950s, the Celestial Church of Christ (CCC) arrived in western Nigeria through Benin, its founder was Oshoffa. The church made so much in-road into every strata of the society. A member of Cherubim and Seraphim, Pa Josiah Akindayomi pulled out to form the Redeemed Christian Church of God (RCCG), reputed to be the fastest growing denomination in the world with a church almost in every five minutes walking and driving distance in Nigeria and Overseas respectively. This is largely due to the visionary leadership of its current general overseer Pastor Enoch Adeboye. </PText>
                        <PText color > By 1960s- 1970s, the movement spread to campuses and secondary schools in the nation in a sweeping revival that saved thousands of students. The scripture union is credited with this sweeping revival that birthed many independent churches. Africa’s finest Pentecostal preacher, Arch Bishop Benson Idahosa is the leader of this movement that focused on faith and prosperity largely because of the despicable financial state of the then Pentecostals. Idahosa, it was, who opened a new vista of opportunities of Pentecostalism in Nigeria, drawing mammoth crowd with stupendous healing and miracle following. In 1972, he founded the Church of God Mission International followed by the Deeper Life Bible Church in 1975 by Pastor Williams Kumuyi. </PText>
                           <PText color > The period between 1980 and now has witnessed proliferation of independent Pentecostal Churches led by fiery preachers such as Bishop David Oyedepo, Bishop Wale Oke, Evangelist Uma Ukpai, Pastor Ayo Oritshejafor among others. </PText>

                  </PText>
              </div>
              <div className="page7Spacer">
                <hr />
              </div>
                <div className="lastTitle" style={{textAlign: 'center'}}>
                    <H3 children='Weekly Events' color />
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
                     <H3 children='Check out more events on the Church Calendar' color />
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

export default History