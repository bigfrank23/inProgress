import React, {useState, useEffect} from 'react'
import DetailImg from '../../../images/user.png'
import moment from 'moment'
import { useDispatch} from 'react-redux'
import { useParams, withRouter } from 'react-router-dom'
import { deletePost, getPost, getSinglePost } from '../../blog/redux/actions/post'
import Img3 from "../../../images/bg2.jpg";
import Img5 from "../../../images/pro9.jpg";
import styled from "styled-components";


import './FullDetail.css'
// import '../Pages/FullDetail/FullDetailSports/FullDetailSports.css'
import CommentSection from '../commentSection/CommentSection'
import axios from 'axios'
import { LIKE } from '../../blog/redux/constants/actionTypes'
import Footer from '../../../components/Footer/Footer'
// import SideBar from '../SideBar/SideBar'


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

const FullDetail = (props) => {
    const [post, setPostData] = useState([])
    const [posts, setPosts] = useState([])
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
    // const {post} = useSelector((state)=> state.posts)
    
    const {id} = useParams()
    
    useEffect(()=> {
        dispatch(getSinglePost(id, setPostData))
    }, [dispatch,id])


    useEffect(() => {
      // dispatch(getPostsBySearch({search: 'none'}))
      dispatch(getPost(setPosts));
      const listen = props.history.listen(() => {
        window.scrollTo(0, 0);
      });
      return () => {
        listen();
      };
    }, [dispatch, props.history]);


    if (!post) {
        return null
    }

     const recommendedPost = posts.filter(({ _id }) => _id !== post._id);
     // console.log(recommendedPost);
     const openPost = (id) => props.history.push(`${id}`);

    const handleLikes = async (userId, postId) => {
        if (!post.likes.includes(userId)) {
            try {
                const res = await axios.put("http://localhost:5000/api/post/likePost", {userId, postId})
                dispatch({type: LIKE, payload: res.data}) 
                // console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }else{
            try {
                const res = await axios.put("http://localhost:5000/api/post/unLikePost", {userId, postId})
                dispatch({type: LIKE, payload: res.data}) 
                // console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        }
    };
    
  return (
    <Container>
    <div className="page1Wrapper">
      <div className="page1Header">
        <h1>Full Detail</h1>
      </div>
    </div>
    <div className='container-fluid' id='detail_container' style={{marginTop: "9rem"}}>
        <div className="row d-flex justify-content-between">
            <div className="col-lg-7 col-md-12 col-sm-12 p-4 p-md-3 p-lg-3 bg-light shadow" style={{margin: "auto"}}>
                <div className="detail_top d-flex justify-content-between py-2">
                    <div className="detail_info d-flex">
                        <div className="detail_author d-flex flex-column">
                            <img src={!post.profilePic ? DetailImg : post.profilePic} alt="" />
                            <span>{post.username}</span>
                        </div>
                        <div className="detail_time">
                            <span>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <div className="detail_category text-center text-white rounded" style={{background: "tomato", height: "30px", padding: "5px", alignSelf: "flex-end"}}>
                        <h6>FULL DETAIL</h6>
                    </div>
                </div>
                <div className="detail_center">
                    <div className="detail_img_box">
                        {post.selectedFile ?
                        <img className='detail_img2' src={post.selectedFile} alt="Dt2Img" />
                        :
                        ""
                        }
                    </div>
                    <div className="detail_title py-2">
                        <h4>{post.title}</h4>
                    </div>
                    <div className="detail_desc">
                        <p>{post.desc}</p>
                    </div>
                </div>
                <div className="detail_bottom d-flex justify-content-between">
                        {
                            user ?
                            <div className="detail_reactions d-flex">
                                <div className="like" onClick={()=>handleLikes(user?.user?._id, post._id)} style={{cursor: 'pointer'}}>
                                    {post?.likes?.includes(user?.user?._id) ?
                                    <i className="fa fa-heart" aria-hidden="true" style={{color: "red"}} />
                                    :
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                    }
                                    <span> &nbsp;{post.likes?.length > 2 ? `You and ${post.likes?.length - 1} others` : `${post.likes?.length} like${post.likes?.length > 1 ? 's' : ''}` } </span> 
                                </div>
                                <div className="comments" style={{marginLeft: "7px"}}>
                                    <i className="detail_reaction_icon fa fa-commenting" aria-hidden="true" />
                                    {post?.comments?.length}
                                </div>
                            </div>
                            :
                            <div className="detail_reactions d-flex">
                                <div className="like">
                                    {post?.likes?.includes(user?.user?._id) ?
                                    <i className="fa fa-heart" aria-hidden="true" style={{color: "red"}} />
                                    :
                                    <i className="fa fa-heart-o" aria-hidden="true" />
                                    }
                                    <span> &nbsp;{post.likes?.length > 2 ? `You and ${post.likes?.length - 1} others` : `${post.likes?.length} like${post.likes?.length > 1 ? 's' : ''}` } </span> 
                                </div>
                                <div className="comments" style={{marginLeft: "7px"}}>
                                    <i className="detail_reaction_icon fa fa-commenting" aria-hidden="true" />
                                    {post?.comments?.length}
                                </div>
                            </div>

                        }
                    <div className="detail_share d-flex" onClick={()=> dispatch(deletePost(post._id))}>
                        <i className="fa fa-trash deletePostIcon" aria-hidden="true" />
                    </div>
                </div>
                {
                    user && 
                <CommentSection post={post} />
                }
            </div>
        <div className="recommended bg-white" style={{marginTop: "3rem", borderBottom: "1px solid #ddd"}}>
            <h1 style={{marginBottom: "5px"}}>You may also like</h1>
            <div className="content3">
                {recommendedPost.reverse().slice(0, 3).map(({selectedFile, title, desc, likes, comments, _id})=> (
                    <div style={{cursor: "pointer"}} onClick={()=> openPost(_id)} key={_id}>
                        <div className="contentContent">
                            <div className="title23 d-flex flex-column p-2">
                                <h3 className='rec_text' style={{textAlign: "center"}}>{title}</h3>
                                <p style={{height: "60px", lineHeight: "20px", overflow: "hidden"}}>{desc}</p>
                                <img src={selectedFile} alt="#" style={{borderRadius: "5px"}}/>
                            </div>
                            <div className="reactions d-flex" style={{marginLeft: "5px"}}>
                                <div className="like">
                                    <i className="fa fa-heart" aria-hidden="true"/>
                                    <span> &nbsp;{likes.length} </span> 
                                </div>
                                <div className="comments" style={{marginLeft: "7px"}}>
                                    <i className="detail_reaction_icon fa fa-commenting" aria-hidden="true" />
                                    <span> &nbsp;{comments.length} </span> 
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </div>
    <Footer />
    </Container>
  )
}

export default withRouter(FullDetail)