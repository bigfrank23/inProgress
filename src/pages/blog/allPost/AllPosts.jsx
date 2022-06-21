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
import Pagination from '../pagination/Pagination'
import axios from 'axios';
import { landscapeTab, mobile, tab } from '../../../responsive';
import { Helmet } from 'react-helmet-async';

// import './AllPost.css'


const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(
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
    ); */
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${Img5});
    background-size: 100% 100%;
    background-attachment: fixed;
    /* background-position: center; */
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({height: "40vh", backgroundSize: "115%", backgroundPosition: "0 100%", backgroundAttachment: "unset", clipPath: "unset"})}
    ${tab({ height: "42vh", backgroundSize: "100% 50%", backgroundPosition: "unset"})}
    ${landscapeTab({ height: "65vh", backgroundSize: "100% 100%", backgroundPosition: "unset"})}
    .page1Header {
      color: #fff;
      text-align: center;
      ${mobile({position: "relative", top: "25%"})}
      .giveNowBtn {
        margin-top: 2rem;
      }
    }
  }
`;



const Allposts = () => {
  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
  const dispatch = useDispatch()

  const [post, setPost] = useState([])

  // const perPage = 3;
  // const [totalPages, setTotalPages] = useState(1);
  // const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const [noOfElement, setNoOfElement] = useState(3)

  const slice = post.slice(0, noOfElement)

  useEffect(()=> {
    const getPosts = async() => {
      setIsLoading(true)
      try {
        const res = await axios.get('https://pfn-lagos.herokuapp.com/post')
        setPost(res.data)
      } catch (error) {
        
      }
    }
    getPosts()
  }, [])

  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement)
  }

  return (
    <Container>
      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="PFN Lagos State Blogs" />
        <link rel="canonical" href="/blogs" />
      </Helmet>
      <div className="page1Wrapper">
        <div className="page1Header">
          <h1>Blog</h1>
        </div>
      </div>
    <div className='container'>
    <div className="postsMainTitle">
          <H2>All Posts</H2>
          {
            user?.user?.email ==="admin@pfnlagosstate.org" &&
            <Link to='/write' id='links'>
              <Button variant="contained">Create a post</Button>
            </Link>
          }
        </div>
        <div className="allPostRow row">
          {slice.map((val, index )=> (
              <Post post={val} key={index} />
              ))}
        </div>
    </div>
    {
      slice.length > 2 ? 
        <div className='text-center' onClick={loadMore}>
        <Button variant="outlined">Load More</Button>
        </div>
        : ""
    }
    <Footer />
    </Container>
  );
}

export default withRouter(Allposts)