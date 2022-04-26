import React from 'react'
import styled from 'styled-components'
import Navbar from './../../components/Navbar/Navbar';
import Img from '../../images/aboutBg.png'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import Img4 from '../../images/web2.jpg'
import BgImg from '../../images/splash1.jpg'
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import AboutImg1 from '../../images/about1.jpg'
import AboutImg2 from '../../images/about2.jpg'
import AboutImg3 from '../../images/about3.jpg'
import H2 from '../../components/Text/H2';
import { landscapeTab, mobile, tab } from '../../responsive';
import PText from '../../components/Text/PText';
import './About.css'
import Header from '../../components/Text/Header';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    /* clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(100% 0, 100% 92%, 50% 100%, 0 92%, 0 0);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), black
      url(${Img});
    background-size: contain;
    background-position: 0 125px;
    background-repeat: no-repeat;
    /* background-position-x: 7%; */
    background-attachment: fixed;
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
  .pageBanner {
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${Img4}) !important;
    background-size: contain !important;
    background-position: left !important;
    background-repeat: no-repeat !important;
    position: relative;
    width: 100% !important;
    padding: 4rem;
    color: #fff;
    text-align: center;
    ${mobile({ padding: "2rem"})}
  }
  .pageContent{
      padding: 4rem;
      ${mobile({padding: "2rem"})}
  }
  .pageContentTop{
      display: flex;
      padding: 2rem 3rem;
      gap: 3rem;
      ${mobile({display: "block", padding: 0})}
      ${tab({display: "block"})}
      ${landscapeTab({display: "flex"})}
      .left{
        flex: 1;
        .pageContentTitle{
            margin-bottom: 1.5rem;
            margin: 0 2rem 0;
        }
        .pageContentPara{
            padding-top: 1rem;
            ${mobile({textAlign: "center"})}
        }
      }
      .right{
          width: 400px;
          height: 400px;
          flex: 1;
          ${mobile({width: "unset", height: "unset", padding: "2rem 0"})}
          ${tab({margin: "auto"})}
          ${landscapeTab({margin: "auto"})}
          img{
              width: 100%;
              height: 100%;
              object-fit: contain;
          }
      }
  }
  .center{
      flex-direction: row-reverse;
  }
  /* .bottom{
      flex-direction: row-reverse;
  } */
`;
const About = () => {
  return (
    <Container>
        <div className="page1Wrapper">
            {/* <Navbar /> */}
            <div className="page1Header">
                <h1>ABOUT</h1>
                <h1>PENTECOSTAL FELLOWSHIP OF NIGERIA</h1>
            </div>
        </div>
        <div className="pageBanner">
            <div className="pageBannerText">
                <div className="reduce">
                    <Header fontStyle color>
                        "The national body which binds all Christian churches, organizations and believers"
                    </Header>
                    <h1 className="changeText">

                    </h1>
                </div>
            </div>
        </div>
        <div className="pageContent">
            <div className="pageContentTop">
                <div className="left">
                    <div className="pageContentTitle">
                        <H2 children="INTRODUCTION" />
                    </div>
                    <div className="pageContentPara">
                        <PText>
                        The Pentecostal Fellowship of Nigeria, inaugurated on 14th of November, 1986 in Lagos,
                         is the national body which binds all Christian churches, organizations and believers
                          who believe, experience, practice and cherish the Pentecostal experience as found and
                           described in Acts 2:4. These are believers who accepted as valid for today the baptism
                            of the Holy Spirit, with the physical initial evidence of speaking in other tongues
                             as it was spoken of those who experienced same in the Bible days. (Acts 10:45-47).
                        In addition, they are those who accepted the evangelical truth of justification by faith
                         as propounded by Martin Luther, the Westley, the experience of holiness as preached by
                          John Westley and the heat of evangelistic zeal of fire and blood by William Booth of the Salvation Army.
                        It is not a union of churches brought together for a central administration and control;
                         rather it a body of believers having identical unity of purpose and corporation in agreed programs.
                        </PText>
                    </div>
                </div>
                <div className="right">
                    <img src={AboutImg1} alt="" />
                </div>
            </div>
            <div className="pageContentTop center">
                <div className="left">
                    <div className="pageContentTitle">
                    <H2 children="AIM AND PURPOSE" />
                    </div>
                    <div className="pageContentPara">
                    <PText>
                        Among others, the fellowship's purpose includes:
                    <ol className="pageContentTopList">
                        <li className="pageContentTopListItems">
                            To unite all Pentecostal churches, bodies and believers for the purpose of fellowship, encouragement and inspiration
                        </li>
                        <li className="pageContentTopListItems">
                            To form a common platform of solidarity against the common foe in the time of persecution, opposition and religious tolerance on account of the Pentecostal faith and to offer relief and support to afflicted people.
                        </li>
                        <li className="pageContentTopListItems">
                            To undertake joint Programs and execute projects for the furtherance of the full gospel in such areas as literature distribution, Bible college and Christian education, evangelism etc.
                        </li>
                        <li className="pageContentTopListItems">
                            To provide representatives for the Pentecostal movement to governments, ecumenical bodies and serve as defender of the faith for Pentecostal Believers.
                        </li>
                        <li className="pageContentTopListItems">
                            To set up standard of faith and doctrines along with the code of ethic to guide and identify true Pentecostal believers and organizations.
                        </li>
                    </ol>
                    </PText>
                    </div>
                    {/* <div className="pageBtn" style={{display: 'flex', gap: '2rem', marginTop: '2rem'}}>
                        <Button />
                        <Button />
                    </div> */}
                </div>
                <div className="right">
                    <img src={AboutImg2} alt="" />
                </div>
            </div>
            <div className="pageContentTop bottom">
                <div className="left">
                    <div className="pageContentTitle">
                    <H2 children="OBJECTIVE AND GOALS" />
                    </div>
                    <div className="pageContentPara">
                        <PText>
                        In practical terms, the PFN has as part of its objective.
                        <ol className="pageContentTopList">
                        <li className="pageContentTopListItems">
                            To help Pentecostal believers in maintaining unity of the Spirit in the bond of peace among themselves as well as with the other member of the Body of Christ in their various communities in the nation.
                        </li>
                        <li className="pageContentTopListItems">
                            To encourage its members to strive for purity in doctrine by maintaining standard and sound doctrines of faith based on the fundamental truth of the Holy Scriptures, avoiding erroneous views, fanaticism and extreme behaviors, in matter of doctrines, practice and worship. This will prevent enemies of the Lord from having occasion to find justifiable ground to speak evil of the church (2 Peter 2:2) 
                        </li>
                        <li className="pageContentTopListItems">
                            The PFN will crystalize the sterling quality of the Pentecostal faith in its various programs and ensure that its tenets and principles are correctly spelt out, translated into daily living of its members and proclaimed in true worship in our various churches in such a way as our Lord will do and at the same time to stir the relenting from relaxing into the stupor of cold formalism (2Timothy 3:5).
                        </li>
                    </ol>
                        </PText>
                        
                    </div>
                    {/* <div className="pageBtn" style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
                        <Button />
                    </div> */}
                </div>
                <div className="right">
                    <img src={AboutImg3} alt="" />
                </div>
            </div>
        </div>
        <Footer />
    </Container>
  )
}

export default About