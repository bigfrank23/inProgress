import React, {useState} from 'react'
import WriteImg from '../../../images/placeholder.png'
import FileBase from 'react-file-base64'
import Img3 from '../../../images/bg2.jpg'
import Img from '../../../images/dark1.jpeg'

import {useDispatch} from 'react-redux'

import { createPost } from '../redux/actions/post';


import './Write.css'
import styled from 'styled-components';
import Footer from '../../../components/Footer/Footer'
import { landscapeTab, mobile, tab } from '../../../responsive'

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    /* clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    clip-path: polygon(100% 0, 100% 92%, 50% 100%, 0 92%, 0 0);
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), black
      url(${Img});
    background-size: contain;
    background-position: 0 125px;
    background-repeat: no-repeat;
    /* background-position-x: 7%; */
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({height: "40vh"})}
    ${tab({ height: "42vh"})}
    ${landscapeTab({ height: "65vh"})}
    .page1Header {
      color: #fff;
      text-align: center;
      text-shadow: 0 4px brown;
    }
  }
`

const Write = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({ name: '', title: '', desc: '', image: ''})
  // const [writeData, setWriteData] = useState({})
  // const [showText, setShowText] = useState(false)
  // const [showError, setShowError] = useState(false)
  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"))


  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({...data, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      let formData = new FormData();
      formData.append("image", data.image)
      formData.append("name", data.name)
      formData.append("title", data.title)
      formData.append("desc", data.desc)
      // formData.append("date", data.date)

      const res = await fetch("https://pfn-lagos.herokuapp.com/post", {method: "POST", body: formData})
      // setData(res.data)
      console.log(res);

      if (res.ok) {
        setData({ name: '', title: '', desc: '', image: ''})
        alert("Successful")
        setIsLoading(false)
      }

      if (res.ok === false) {
        alert("Failed!")
      }
    } catch (error) {
      console.log(error)
      alert(error + "Failed")
    }
  }


  // const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"))

  // const dispatch = useDispatch()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   try {
  //     // dispatch(createPost({ ...writeData, username: user.user.username }));
  //     if (dispatch(createPost({ ...writeData, username: user.user.username, profilePic: user.user.profilePic, label: "Others" }))) {
  //       setShowText(true);
  //       setTimeout(() => {
  //         setShowText(false);
  //       }, 5000);
  //       e.target.reset();
  //     }
  //   } catch (error) {
  //     alert(error)
  //     setShowError(true);
  //     setTimeout(() => {
  //       setShowError(false);
  //     }, 5000);
  //   }
  // }

  return (
      <Container>
          <div className="page1Wrapper">
            {/* <Navbar /> */}
            <div className="page1Header">
                <h1>Write</h1>
                {/* <h1>PENTECOSTAL FELLOWSHIP OF NIGERIA</h1> */}
            </div>
        </div>
        <div className='container' id='write_container'>
        <div className="row shadow">
            <div className="d-flex justify-content-center">
            <img src={!data.avatar ? WriteImg : data.avatar} className='write_img' alt="WImg" />
            </div>
            <form onSubmit={handleSubmit}>
            <div className="write_FormGroup">
                <div className="write_upload">
                <label htmlFor="fileInput" className='d d-flex flex-column'>
                  <input type="file" placeholder="Image" accept='image/*' name='image' onChange={handleChange("image")} />
                    {/* <FileBase
                    type="file"
                    multiple={false}
                    onDone = {({base64})=> setWriteData({...writeData, selectedFile: base64})}
                    /> */}
                </label>
                {/* <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                /> */}
                </div>
                <input type="text" placeholder="Title" className="write_input m ml-3" autoFocus={true}  name='title' value={data.title} onChange={handleChange("title")} />
            </div>
            <div className="write_desc d-flex justify-content-center">
                <textarea placeholder={"Write something awesome..."} className="b bg-light rounded" name='desc' value={data.desc} onChange={handleChange("desc")} />
            </div>
            <div className="write_btn d-flex justify-content-center p-sm-0 p-md-3">
                <button type="submit" className="btn btn-danger" onClick={handleSubmit} disabled={isLoading}>Publish</button>
                {/* <h3 className='text-success mx-2'>{showText ? "Successful!" : null}</h3>
                <h3 className='text-danger mx-2'>{showError ? "Error Occurred!" : null}</h3> */}
            </div>
            </form>
        </div>
        </div>
        <Footer />
      </Container>
  );
}

export default Write;