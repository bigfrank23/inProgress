import React, {useState, useEffect} from 'react'
import { Link, withRouter } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {getPost} from '../../../pages/blog/redux/actions/post'
import Post from '../allPost/post/Post'
import Img3 from "../../../images/bg2.jpg";
import Img5 from "../../../images/pro9.jpg";
import styled from "styled-components";
import Footer from '../../../components/Footer/Footer';
import { Button } from '@mui/material';
import H2 from '../../../components/Text/H2';

// import './Posts.css'


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



const Allposts = () => {
  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState('')
  const [postData, setPostData] = useState([])

    useEffect(()=> {
        dispatch(getPost(setPostData))
        // setColor(Math.random().toString(16).substr(-6));
    }, [dispatch])
  
  const filterData = postData.filter((data)=> {
      if (
        searchData === "" ||
        data.title.toLowerCase().includes(searchData.toLowerCase()) ||
        data.desc.toLowerCase().includes(searchData.toLowerCase())
      ) {
        return data;
      }
    })

  return (
    <Container>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Blog</h1>
        </div>
      </div>
    <div className='container'>
    <div className="postsMainTitle">
          <H2>All Posts</H2>
          {
            user ?
            <Link to='/write'>
              <Button variant="contained">Create a post</Button>
            </Link>
            :
            <Link to='/login'>
              <Button variant="contained">Create a post</Button>
            </Link>
          }
        </div>
      {filterData.map((val, index )=> (
          <Post postData={val} key={index} />
          ))}
    </div>
    <Footer />
    </Container>
  );
}

export default withRouter(Allposts)