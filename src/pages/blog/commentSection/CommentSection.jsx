import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { commentPost } from '../redux/actions/post'

import './CommentSection.css'

const CommentSection = ({post}) => {
    const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));

  // const [comments, setComments] = useState([1, 2, 3, 4])
  
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  // console.log(post);


  const dispatch = useDispatch();

  const commentRef = useRef()

  const handleClick = async() => {
    const finalComment = `${user?.user?.username}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post?._id));

    setComments(newComments)
    setComment('')

    commentRef.current.scrollIntoView({behavior: 'smooth'})
  };
  return (
    <div className="section mt-3">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12">
          {!user ? <h6>Login to like & comment</h6> : <h5>Comments</h5>}
          {comments?.map((c, i) => (
            <div className="title1" key={i}>
              {/* comment {i} */}
              <strong> {c.split(": ")[0]} </strong>
              <p className="body">
                {c.split(":")[1]}
                {/* {c} */}
              </p>
            </div>
          ))}
        </div>
        <div ref={commentRef} />
        {user?.user?.username && (
          <div className="text_box" style={{ width: "60%", marginTop: "10px" }}>
            <h6>Write a comment</h6>
            <div className="d d-flex flex-column">
              <textarea
                name=""
                id=""
                cols="30"
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className="btn d-flex justify-content-md-start justify-content-lg-start p-0 mt-3">
                <button
                  className="btn btn-primary"
                  disabled={!comment}
                  onClick={handleClick}
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentSection