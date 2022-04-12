import React from "react";
import Img from "../../images/sac.png";
import Img1 from "../../images/sec.png";
import Img2 from "../../images/splash3.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/My-Post-15.png";
import styled from "styled-components";
import "./LSES.css";
import Button from "../../components/Button/Button";
import Header from "../../components/Text/Header";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import H3 from "../../components/Text/H3";
import Button2 from "../../components/Button/Button2";
import Collapse from "../../components/collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import ControlledAccordions from "../../components/accordion/MUIaccordion";
import { Link } from "react-router-dom";
import { maxWidth } from "@mui/system";

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
            <div className="giveNowBtn">
                <Button BtnText="Give Now"/>
            </div>
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
                            </PText> 
                            <PText>
                               The State Advisory Council builds pathways within the Advisory Leadership System by improving the lives of it's members and growing our state through it.
                                The Advisory Council model allows the Chairman to access the wisdom and support of servants of God of influence and integrity in the State.
                                The State Advisory Council comprises of twelve leaders from within the State

                            </PText>
                            <PText>

                            </PText>

                            </div>
                            <PText>
                            </PText>
                        </div>
                    </div>
                    <div className="page12TopContentBoxRight">
                        <img src={Img1} alt="" />
                        <div className="page12TopContentBoxLeftPara">
                            <H3>
                            	The State Executive Council
                            </H3>
                            <PText>
                            The Central Working Committee (CWC).
                            </PText>
                            <PText>
                            The State Directors.
                            </PText>
                            <PText>
                            The Provincial Chairmen.
                            </PText>
                        </div>
                        <Link to="/page2">
                            <Button BtnText="Know more" outline />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="page12Center">
            <div className="page12CenterMainTitle">
                <H2>THE LAGOS STATE EXECUTIVE STRUCTURE.</H2>
            </div>
            <div className="page12CenterTitle">
                <H3>The Lagos State PFN is composed of:</H3>
                <div className="page12CenterPara">
                    <PText>
                        <ol className="lsesList">
                            <li className="lsesListItem">
                                <b>State</b>
                            </li>
                            <li className="lsesListItem">
                                <b>Provinces</b>
                            </li>
                            <li className="lsesListItem">
                                <b>Chapters</b>
                            </li>
                        </ol>
                        <PText>
                        The Lagos State Pentecostal Fellowship has evolved from its early years and has developed in terms of its organization and structure from the days of region and zones to now Presently the state is made up of a multilayered structure for ease of administration and service delivery.

                     <PText>The state is led by the Chairman who heads an executive council composed of appointed and elected officers, also included in the executive council are the Chairman of the various provinces, next in line are the provinces which cover geographical areas carefully delineated to effectively cover the state.</PText>

                     <PText>There are at present 21 Provinces who headed by Provincial Chairmen who lead a Provincial Executive Council which like the state Executive is composed of selected and appointed officials and the various Chapter Chairmen.</PText>

                     <PText>At the base of the administrative structure are the chapter Chairmen who are the grass root mobilisers and administrators of the PFN vision. Our chapter Chairmen are very vital in the Lagos PFN hierarchy as they are responsible for implementing the PFN program at the grass roots. There are presently well over 500 chapters in the state and the number differs from province to province.</PText>
                        <PText>Supporting the work of the PFN executives at all levels are the various directorates that offer invaluable inputs on specialized subjects and issues ranging from security to inter-governmental matter. </PText>

                        <PText> Also very crucial, is the very important input of the esteemed minsters who make up the Lagos State Advisory Council, the Advisory Council model allows the Chairman to access the wisdom and support of servants of God of influence and integrity in the State. </PText>

                        <PText> The model is also replicated at the provincial and Chapter levels. </PText>

                        </PText>
                    </PText>
                </div>
            </div>
        </div>
        <div className="page12Center2">
            <div className="page12Center2Title">
                <H2 color>Lorem, ipsum dolor.</H2>
            </div>
            <div className="page12Center2Para">
                <PText color>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tenetur, tempora perferendis deserunt repellendus nihil nemo culpa non voluptate ipsa mollitia beatae consequuntur illo consectetur delectus minima error eum sequi dolores ea fuga! Quae reiciendis eum quibusdam non velit doloremque numquam beatae hic laudantium vitae ab, itaque rerum dignissimos. Libero.
                </PText>
            </div>
            <div className="page12Center2Btn">
                <Button2/>
                <Button2/>
            </div>
        </div>
        <div className="page12Center3">
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
        </div>
        <Footer />
      </Container>
  )
};

export default LSES;
