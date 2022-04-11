import React from "react";
import Img1 from "../../images/splash3.jpg";
import Img5 from "../../images/federico-respini-sYffw0LNr7s-unsplash.jpg";
import Img2 from "../../images/splash1.jpg";
import Img3 from "../../images/bg2.jpg";
import Img4 from "../../images/splash2.jpg";
import Img6 from "../../images/book-image.png";
import styled from "styled-components";
import "./Page16.css";
import Header from "../../components/Text/Header";
import H2 from "../../components/Text/H2";
import PText from "../../components/Text/PText";
import Button from "../../components/Button/Button";
import H3 from "../../components/Text/H3";
import Upcomin from "../../components/Upcoming/Upcomin";
import Footer from "../../components/Footer/Footer";

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
      url(${Img5});
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

const Page16 = () => {
  return (
      <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Page 16</h1>
        </div>
      </div>
      <div className="page16Top">
          <div className="page16TopHeader">
              <Header color>Lorem ipsum dolor sit amet.</Header>
          </div>
          <div className="page16TopTitle">
              <H2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</H2>
          </div>
          <div className="page16TopContent">
              <div className="page16TopContentLeft">
                  <img src={Img5} alt="" />
              </div>
              <div className="page16TopContentRight">
                  <div className="page16TopContentRightTitle">
                      <H2>
                        Lorem, ipsum.
                      </H2>
                  </div>
                  <div className="page16TopContentRightPara">
                      <PText>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, facere rerum obcaecati cupiditate amet quod dolorum labore libero laboriosam ipsum recusandae alias ratione nemo provident. Quisquam nobis voluptate ex?
                      </PText>
                  </div>
                  <div className="page16TopContentRightBtn">
                      <Button />
                  </div>
              </div>
          </div>
          <div className="page16TopDivider"></div>
          <div className="page16TopContent">
              <div className="page16TopContentLeft">
                  <img src={Img5} alt="" />
              </div>
              <div className="page16TopContentRight">
                  <div className="page16TopContentRightTitle">
                      <H2>
                        Lorem, ipsum.
                      </H2>
                  </div>
                  <div className="page16TopContentRightPara">
                      <PText>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, facere rerum obcaecati cupiditate amet quod dolorum labore libero laboriosam ipsum recusandae alias ratione nemo provident. Quisquam nobis voluptate ex?
                      </PText>
                  </div>
                  <div className="page16TopContentRightBtn">
                      <Button />
                  </div>
              </div>
          </div>
          <div className="page16TopDivider"></div>
          <div className="page16TopContent">
              <div className="page16TopContentLeft">
                  <img src={Img5} alt="" />
              </div>
              <div className="page16TopContentRight">
                  <div className="page16TopContentRightTitle">
                      <H2>
                        Lorem, ipsum.
                      </H2>
                  </div>
                  <div className="page16TopContentRightPara">
                      <PText>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit, facere rerum obcaecati cupiditate amet quod dolorum labore libero laboriosam ipsum recusandae alias ratione nemo provident. Quisquam nobis voluptate ex?
                      </PText>
                  </div>
                  <div className="page16TopContentRightBtn">
                      <Button />
                  </div>
              </div>
          </div>
          <div className="page16TopDivider"></div>
      </div>
      <div className="page16Center">
          <div className="page16MainTitle">
              <H2>Lorem ipsum dolor sit.</H2>
          </div>
          <div className="page16CenterContent">
              <div className="page16CenterContentLeft">
                  <div className="page16CenterContentLeftContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
                  <div className="page16CenterContentLeftContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
                  <div className="page16CenterContentLeftContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
                  <div className="page16CenterContentLeftContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
                  <div className="page16CenterContentLeftContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
              </div>
              <div className="page16CenterContentRight">
                  <div className="page16CenterContentRightContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
                  <div className="page16CenterContentRightContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
                  <div className="page16CenterContentRightContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
                  <div className="page16CenterContentRightContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
                  <div className="page16CenterContentRightContent">
                    <div className="page16CenterContentTitle">
                        <H3>Lorem, ipsum dolor.</H3>
                    </div>
                    <div className="page16CenterContentpara">
                        <PText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam voluptas facere nihil eius neque ullam inventore id aspernatur quas tempore itaque esse, quo blanditiis. Illo architecto deleniti dolorem ratione?
                        </PText>
                    </div>
                  </div>
              </div>
          </div>
          <div className="page16CenterButton">
              <Button />
          </div>
          <div className="page16CenterLastPara">
              <PText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quod, magni facere accusamus tenetur fugiat eos impedit amet inventore animi.
              </PText>
          </div>
          <div className="page16TopDivider"></div>
      </div>
      <div className="page16Bottom">
          <div className="page16BottomTitle">
              <H2>Lorem ipsum dolor sit amet.</H2>
          </div>
          <div className="page16BottomContent">
              <Upcomin 
                image={Img2}
                title4="Date"
                para1="2/2"
                title5="Location"
                para2="Lagos"
              />
              <Upcomin 
                image={Img2}
                title4="Date"
                para1="2/2"
                title5="Location"
                para2="Lagos"
              />
          </div>
      </div>
      <Footer />
      </Container>
  )
};

export default Page16;
