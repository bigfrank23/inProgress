import React from 'react'
import styled from 'styled-components'
// import Img from '../../images/splash2.jpg'
import Img from '../../images/believe.png'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import Footer from '../../components/Footer/Footer';

// import './Page3.css'
import './WhatWeBelieve.css'
import PText from './../../components/Text/PText';
import H2 from './../../components/Text/H2';
import H3 from '../../components/Text/H3';
import Header2 from '../../components/Text/Header2';
import { landscapeTab, mobile, tab } from '../../responsive'
import { Helmet } from 'react-helmet-async'

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img});
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 80vh;
    ${mobile({height: "40vh", backgroundSize: "115%", backgroundPosition: "0 100%", backgroundAttachment: "unset"})}
    ${tab({ height: "42vh", backgroundSize: "100% 100%", backgroundPosition: "0px -215px"})}
    ${landscapeTab({ height: "80vh", backgroundSize: "100%", backgroundPosition: "top"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({position: "relative", top: "25%"})}
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
const WhatWeBelieve = () => {
  return (
    <Container>
      <Helmet>
            <title>What We Believe</title>
            <meta name="description" content="We believe in water baptism by immersion in the name of the
              Father, Son and Holy Spirit (Matthew 28:19-20). (B) we believe
              in the Lord’s Supper which is the regular partaking of bread,
              the fruit of the vine, symbolic of the body and the blood of
              Jesus Christ (1Cor. 11:23) .
              We believe that there is one true and living God, eternally
                existing in three persons, Father, Son and Holy Spirit (Hebrew
                9:34, 1 John 5:77, Deut. 6:4, John 17:3, 2Corinthinas 13:4)" />
                
            <link rel="canonical" href="/what-we-believe" />
        </Helmet>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>What We Believe</h1>
        </div>
      </div>
      <div className="secOne">
        {/* <div className="sectOneHeader">
          <Header children="lorem Ipdhhj" color />
        </div> */}
        <div className="sectOneTitle">
          {" "}
          <Header2 color>Get to know us more</Header2>
          <H2 children="" />{" "}
        </div>
        <div className="sectOnePara">
          {" "}
          <H3><span style={{color: "#fff"}}>
            "We believe in water baptism by immersion in the name of the
              Father, Son and Holy Spirit (Matthew 28:19-20). (B) we believe
              in the Lord’s Supper which is the regular partaking of bread,
              the fruit of the vine, symbolic of the body and the blood of
              Jesus Christ (1Cor. 11:23)"

          </span>
          </H3>
        </div>
      </div>
      
      <div className="sectThree">
        {/* <div className="sectThreeHeader">
          <Header children="What we believe" color={false} />
        </div> */}
        <div className="sectThreeTitle">
          <H2 children="STANDARD OF FAITH" />
        </div>
        <div className="sectThreePara">
          <PText>
            <ol className="believeList">
              <li className="believeListItem">
                We believe that the Holy Bible is the word of the Living God,
                true steadfastness and authoritative rule of faith and practice
                (2 Timothy 3:16-17, 2Peter 1:21, Luke 21:33)
              </li>
              <li className="believeListItem">
                We believe that there is one true and living God, eternally
                existing in three persons, Father, Son and Holy Spirit (Hebrew
                9:34, 1 John 5:77, Deut. 6:4, John 17:3, 2Corinthinas 13:4)
              </li>
              <li className="believeListItem">
                We believe that all men have sinned and come short of the glory
                of God; and salvation or the new birth comes through repentance
                and faith in our Lord Jesus Christ (Romans 5:12, 3:23, Ephesians
                2:8-9, Act 20:20-21, John 3:3-8, 2Corinthians. 5:17)
              </li>
              <li className="believeListItem">
                We believe in water baptism by immersion in the name of the
                Father, Son and Holy Spirit (Matthew 28:19-20). (B) we believe
                in the Lord’s Supper which is the regular partaking of bread,
                the fruit of the vine, symbolic of the body and the blood of
                Jesus Christ (1Cor. 11:23)
              </li>
              <li className="believeListItem">
                We believe in holiness, which those who are saved must live
                (Hebrew 23:14, 1Pet 1:6, Romans 12:1-2)
              </li>
              <li className="believeListItem">
                We believe in the baptism of the Holy Spirit as received by the
                Apostles accomplished by speaking in tongues as the initial
                physical scripture evidence subsequent to the new birth (Acts
                2:4)
              </li>
              <li className="believeListItem">
                We believe that divine healing is provided for in the redemptive
                work of our Lord Jesus Christ to heal the sick in answer to
                simple prayer of faith in his name only. (Matthew 8:16-17, James
                5:14).
              </li>
              <li className="believeListItem">
                We believe in Christ coming again to take away his church and in
                his millennial reign (1 Thessalonians 4:16-17, Revelation
                20:1-3)
              </li>
              <li className="believeListItem">
                We believe that the church is the body of Christ made up of all
                blood washed believers universally. That is the will of God that
                all believer should affiliate themselves into the local churches
                for the purpose of fellowship, evangelism and discipleship
                (Ephesians 1:2-23, Hebrew 10:25)
              </li>
              <li className="believeListItem">
                We believe in final judgement (Revelation 19:20, 20:11-15,
                2Corinthians 5:10, Romans 14:21).
              </li>
              <li className="believeListItem">
                We believe in new heaven and earth (2Peter 3:13, Revelation
                21:22)
              </li>
            </ol>
          </PText>
        </div>
        <div className="sectThreeTitle">
          <H2 children="CODE OF ETHICS" />
        </div>
        <div className="sectThreePara">
          <PText>
            In order to identify true Pentecostal believers both among them
            members and the ministers, the following is part of the code of
            ethics that characterize their manner of living.
          </PText>
          <ol className="believeList">
            <li className="believeListItem">
              Sanctity of marriage between believers only and the policy of one
              man and one wife.
            </li>
            <li className="believeListItem">
              Christian modesty in manners of dressing.
            </li>
            <li className="believeListItem">
              Brotherly tolerance of one another and making reconciliation
              rather than going to the law court as forbidden in 1Cornthians 6.
            </li>
            <li className="believeListItem">
              Christians tolerance of all denominations of the Christian faith.
            </li>
            <li className="believeListItem">
              In essentials, there shall be unity, but liberty in non-essential
              and brotherly love in all things.
            </li>
          </ol>
        </div>
        <div className="sectThreeTitle">
          <H2 children="MEMBERSHIP" />
        </div>
        <div className="sectThreePara">
          <PText children="The fellowship membership is open to all Pentecostal churches, organizations and believers who will subscribe to its standard of faith and the code of ethics without reservation as a mark of identification of true Pentecostal believers." />
        </div>
        <div className="sectThreeTitle">
          <H2 children="ASSOCIATE MEMBERSHIP " />
        </div>
        <div className="sectThreePara">
          <PText children="Status is open to local churches in every status of the federation whose central bodies or organizations have not been affiliated or accepted by the National PFN." />
        </div>
        <div className="sectThreeTitle">
          <H2 children="PROGRAM" />
        </div>
        <div className="sectThreePara">
          <PText>
            Apart from organizing international and national conferences and
            seminars in the various constituencies of the nations; the PFN will
            carry out most of its Programs through its various commissions
            entrusted with responsibilities to carry out specific objectives and
            goals. Some of the commissions are:
          </PText>
          <ol className="believeList">
            <li className="believeListItem">
              Commission on Christian education
            </li>
            <li className="believeListItem">
              Commission on Evangelism and City Wide Crusades
            </li>
            <li className="believeListItem">Commission on Evangelism</li>
            <li className="believeListItem">
              Commission on Discipleship and Church Growth
            </li>
            <li className="believeListItem">
              Commission of Christian Literatures
            </li>
            <li className="believeListItem">
              Commission on Promotion of Peace and accord among member bodies
            </li>
          </ol>
        </div>
      </div>
      <div className="sectTwo">
        <div className="sectTwoHeader">
          {" "}
          {/* <Header children="Lorem, ipsum dolor" color />{" "} */}
        </div>
        <div className="sectTwoTitle">
          {" "}
          {/* <H3 color weight> */}
          <p>
            At PFN Lagos, we're not just looking for volunteers. We're looking
            to help people discover their purpose. <br /> If getting involved in a
            fellowship is your next step, <br /> Contact
            <div style={{ color: "#990000", fontStyle: "lowercase"}}>
              <i>info@pfnlagosstate.org </i>
            </div>{" "}
            or <br /> check with one of the provinces.
          </p>
          {/* </H3> */}
        </div>
        {/* <div className="sectTwoBtn">
          <Button BtnText="Contact now" />
        </div> */}
      </div>
      <Footer />
    </Container>
  );
}

export default WhatWeBelieve