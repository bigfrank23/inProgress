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
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
        <div className="pfnExecutivesContainer">
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={Img2} alt="" />
                        <div className="pfnExecutivesTxt">
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
        <div className="pfnExecutivesContainer">
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src={Img2} alt="" />
                        <div className="pfnExecutivesTxt">
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
                            <h2>John Doe</h2>
                            <h5>johndoe@email.com</h5>
                        </div>
                        <Button2 BtnText="Hover"/>
                    </div>
                    <div class="flip-box-back">
                        <div className="flip-box-back-content">
                            <H2>Lorem, ipsum dolor.</H2>
                            <p className="pfn-back-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Aut voluptatibus suscipit molestias perferendis dolor, unde, obcaecati laudantium quos neque
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
        <Footer />
    </Container>
  )
}

export default PfnExecutives