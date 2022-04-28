import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import Img3 from "../../../images/bg2.jpg";
import Img5 from "../../../images/pro9.jpg";
import styled from "styled-components";
import H2 from '../../../components/Text/H2';
import Button from "../../../components/Button/Button";
import './Posts.css'
import H3 from "../../../components/Text/H3";
import { postData } from "../data";
import Footer from "../../../components/Footer/Footer";

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    -webkit-clip-path: polygon(
      50% 0%,
      100% 0,
      100% 43%,
      94% 78%,
      68% 100%,
      32% 100%,
      6% 78%,
      0% 43%,
      0 0
    );
    clip-path: polygon(
      50% 0%,
      100% 0,
      100% 43%,
      94% 78%,
      68% 100%,
      32% 100%,
      6% 78%,
      0% 43%,
      0 0
    );
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
      .giveNowBtn {
        margin-top: 2rem;
      }
    }
  }
`;

const Posts = () => {
  const [show, setShow] = useState(true)
  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="postsContainer">
        <div className="postsMainTitle">
          <H2>All Posts</H2>
        </div>
        {postData.map((data) => (
          <div className="postContents">
            <div className="postsContentTop">
              <div className="postsAuthorInfo">
                <div className="postsProfile">
                  <div className="postsAuthorImg">
                    <img src={data.userImg} alt="" />
                  </div>
                  <div className="postsAuthor">
                    <span>{data.name}</span>
                  </div>
                </div>
                <div className="postsDate">
                  <span>{data.postTime}</span>
                </div>
              </div>
              <div className="postsTitle">
                <H3>{data.postTitle}</H3>
              </div>
            </div>
            <div
              className={
                !show ? "postsContentCenter" : "postsContentCenterActive"
              }
            >
              <div className="postsImg">
                <img src={data.postImg} alt="" />
              </div>
              <div className={!show ? "postsTxt" : "postsTxtActive"}>
                <div className="reactions">
                  <i className="fa fa-heart" aria-hidden="true" />
                  <i className="fa fa-comment" aria-hidden="true" />
                </div>
                <p>
                  <p>{data.postTxt} </p>
                  <p>{data.postTxt2} </p>
                  <p>{data.postTxt3} </p>
                  <p>{data.postTxt4} </p>
                  <p>{data.postTxt5} </p>
                  <p>{data.postTxt6} </p>
                </p>
              </div>
              <div className="postsBtn">
                <Button
                  BtnText={show ? "More" : "Less"}
                  onClick={() => setShow(!show)}
                />
              </div>
            </div>
            <div className="postsContentBottom"></div>
          </div>
        ))}
      </div>
      <Footer />
    </Container>
  );
};

export default Posts;
