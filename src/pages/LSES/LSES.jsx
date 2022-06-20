import React from "react";
import Img from "../../images/sac.png";
import Img1 from "../../images/sec.png";
import Img2 from "../../images/lses.png";
import Img3 from "../../images/bg2.jpg";
import styled from "styled-components";
import "./LSES.css";
import Button from "../../components/Button/Button";
import PText from "../../components/Text/PText";
import H3 from "../../components/Text/H3";
import Button2 from "../../components/Button/Button2";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { landscapeTab, mobile, tab } from "../../responsive";

const Container = styled.div`
  user-select: none;
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
    height: 65vh;
    ${mobile({ height: "40vh", clipPath: "unset"})}
    ${tab({ height: "42vh"})}
    ${landscapeTab({ height: "65vh", backgroundSize: "cover", backgroundPosition: "center"})}
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
const LSES = () => {
  return (
      <Container>
        <div className="page1Wrapper">
            <div className="page1Header">
            <h1>THE LAGOS STATE EXECUTIVE STRUCTURE</h1>
            {/* <div className="giveNowBtn">
                <Button BtnText="Give Now"/>
            </div> */}
            </div>
        </div>
        <div className="page12Top">
            <div className="page12TopContent">
                {/* <div className="page12TopHeader">
                    <Header color>Lorem ipsum dolor sit.</Header>
                </div>
                <div className="page12TopTitle">
                    <H2>Lorem, ipsum dolor.</H2>
                </div>
                <div className="page12TopPara">
                    <PText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore soluta expedita, provident iure suscipit cupiditate et aperiam necessitatibus atque fugit nesciunt, mollitia minima velit repudiandae eos? Cupiditate error in excepturi quasi inventore odio ut, rerum, voluptatem ex vel culpa? Voluptatum obcaecati officiis optio ratione, recusandae maxime asperiores mollitia dicta voluptatibus.
                    </PText>
                </div>
                <div className="page12TopBtn">
                    <Button />
                    <div style={{padding: "1rem 0"}}>
                    <Button />
                    </div>
                    <Button />
                </div> */}
                <div className="page12TopContentBox">
                    <div className="page12TopContentBoxLeft" >
                        <img src={Img} alt="" />
                        <div className="page12TopContentBoxLeftPara">
                            <H3>
                            	The State Advisory Council (SAC)
                            </H3>
                            <div style={{maxWidth: "500px"}}>
                            <PText>
                               builds pathways within the Advisory Leadership System by improving the lives of it's members and growing our state through it.
                                The Advisory Council model allows the Chairman to access the wisdom and support of servants of God of influence and integrity in the State.
                                The State Advisory Council comprises of twelve leaders from within the State
                            </PText>
                            </div>
                        </div>
                    </div>
                    <div className="page12TopContentBoxRight">
                        <img src={Img1} alt="" />
                        <div className="page12TopContentBoxLeftPara">
                            <H3>
                            	The State Executive Council
                            </H3>
                            {/* <PText> */}
                            <ul className="page12TopContentBoxRightList">
                                <li className="page12TopContentBoxRightListItem">
                                    The Central Working Committee (CWC)
                                </li>
                                <li className="page12TopContentBoxRightListItem">
                                    The State Directors &
                                </li>
                                <li className="page12TopContentBoxRightListItem">
                                    The Provincial Chairmen
                                </li>
                            </ul>
                            <div style={{marginTop: "1rem"}}>
                                The State Executive Council is led and headed by the Chairman and is composed of appointed and 
                                elected officers, which includes the State Directors and the Chairmen of the various Provinces, 
                                which cover geographical areas carefully delineated to effectively cover the state.

                            </div>
                            {/* </PText> */}
                        </div>
                        <Link to="/pfn-executives" id="page12KnowMoreBtn">
                            <Button BtnText="Know more" outline />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="page12Center">
            <div className="page12CenterMainTitle">
                {/* <H2>THE LAGOS STATE EXECUTIVE STRUCTURE.</H2> */}
            </div>
            <div className="page12CenterTitle">
                {/* <H3>:</H3> */}
                <div className="page12CenterPara">
                    <PText>
                        <PText>
                        <b>The Lagos State PFN is composed of</b> Provinces and Chapters. <br />
                        <div className="page12ParaSpace">
                        The Lagos State Pentecostal Fellowship has evolved from its early years and has developed in terms of its organization and structure from the days of region and zones to now presently, Provinces and Chapters. The state is made up of a multilayered structure for ease of administration and service delivery.
                        The state is led by the Chairman who heads an executive council composed of appointed and elected officers, also included in the executive council are the State Directors and the Chairmen of the various Provinces. 

                        </div>
                     <PText>Next in line to the State are the Provinces which cover geographical areas carefully delineated to effectively cover the state.
                        There are at present 21 Provinces headed by Provincial Chairmen who lead a Provincial Executive Council, which like the State Executive is composed of selected and appointed officials and the various Chapter Chairmen.
                    </PText>
                        <div className="page12ParaSpace">

                     <PText>At the base of the administrative structure are the chapter Chairmen who are the grass root mobilisers and administrators of the PFN vision. Our chapter Chairmen are very vital in the Lagos PFN hierarchy as they are responsible for implementing the PFN program at the grass roots. There are presently well over 500 chapters in the state and the number differs from province to province.</PText>
                        </div>

                     <PText>At the base of the administrative structure are the chapter Chairmen who are the grass root mobilisers and administrators of the PFN vision. Our chapter Chairmen are very vital in the Lagos PFN hierarchy as they are responsible for implementing the PFN program at the grass roots. There are presently well over 500 chapters in the state and the number differs from province to province.</PText>
                        <div className="page12ParaSpace">

                        <PText>Supporting the work of the PFN executives at all levels are the various directorates that offer invaluable inputs on specialized subjects and issues ranging from security to inter-governmental matters, and a host of others. </PText>
                        </div>

                        <PText> Also very crucial, is the very important input of the esteemed minsters who make up the Lagos State Advisory Council, the Advisory Council model allows the Chairman to access the wisdom and support of servants of God of influence and integrity in the State.</PText>
                            <div className="page12ParaSpace">
                        <PText>The model is also replicated at the provincial and Chapter levels.</PText>

                            </div>

                        </PText>
                    </PText>
                </div>
            </div>
        </div>
        <div className="page12Center2">
            {/* <div className="page12Center2Title">
                <H2 color>Lorem, ipsum dolor.</H2>
            </div> */}
            <div className="page12Center2Para">
                <p>
                   At PFN Lagos, we're not just looking for volunteers. We're looking
              to help people discover their purpose. If getting involved in a fellowship is your next step, Contact
              <div style={{color: "red"}}><i>info@pfnlagosstate.org </i></div> or check with one of the provinces or chapters
                </p>
            </div>
            <div className="page12Center2Btn">
                <Link to="/contact" className="links">
                <Button2 BtnText="Contact now"/>
                </Link>
                {/* <Button2/> */}
            </div>
        </div>
        {/* <div className="page12Center3">
            <div className="page12Center3Left">
                <img src={Img2} alt="" />
            </div>
            <div className="page12Center3Right">
                <div className="page13Center3RightTitle">
                    <H2>Lorem, ipsum dolor.</H2>
                </div>
                <div className="page12Center3RightPara">
                    <PText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus eos necessitatibus doloremque eaque illum dolorem eum, sunt quam minima?
                    </PText>
                </div>
                <div className="page12Center3RightTitle2">
                    <H3>View the Annual Report »</H3>
                </div>
            </div>
        </div>
        <div className="page12Bottom">
            <div className="page12BottomTitle">
                <H2>Lorem ipsum dolor sit amet.</H2>
            </div>
            <div className="colCard2">
                <ControlledAccordions />
            </div>
        </div>
        <div className="page12Bottom2">
            <div className="page13BottomTitle2">
                <H2>Lorem ipsum dolor sit amet.</H2>
            </div>
            <div className="page12BottomPara">
                <PText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolore!
                </PText>
            </div>
            <div className="page12BottomImgBx">
                <div className="page12BottomImg">
                    <img src={Img4} alt="" />
                </div>
            </div>
            <div className="page12BottomTitle3">
                <H3>Lorem, ipsum.</H3>
            </div>
            <div className="page12BottomPara">
                <PText>
                    Lorem ipsum dolor
                </PText>
            </div>
            <div className="page12BottomPara">
                <PText>
                    Lorem ipsum dolor
                </PText>
            </div>
            </div> */}
        <Footer />
      </Container>
  )
};

export default LSES;
