import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../../../adminComponents/sidebar/Sidebar'
import Topbar from '../../../adminComponents/topbar/Topbar'
import '../newsFeed/NewsFeedForm.css'
import BgImg from '../../../../../images/light-texture-bg.jpg'
import Img from '../../../../../images/splash2.jpg'
import { mobile } from '../../../../../responsive'
import Footer from '../../../../../components/Footer/Footer'
import { Form, Button } from 'react-bootstrap'
// import axios from 'axios'


const Container = styled.div`
    background: url(${BgImg});
    /* margin-top: 10rem; */
    height: 100%;
    width: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
    ${mobile({ marginTop: "1rem", padding: "2rem" })}
    .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img});
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 30vh;
    .page1Header {
      color: #fff;
      text-align: center;
      top: 25%;
    position: relative;
    }
  }
    `
const ChairmanMsgForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({ name: '', title: '', desc: '', image: '', date: '' })

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
      formData.append("title", data.title)
      formData.append("desc", data.desc)

      const res = await fetch("https://pfn-lagos.herokuapp.com/chairmanMsg", {method: "POST", body: formData})
      // setData(res.data)

      if (res.ok) {
        setData({ name: '', title: '', desc: '', image: '', date: '' })
        alert("Successful")
        setIsLoading(false)
      }
    } catch (error) {
        alert(error)
      console.log(error)
      alert(error)
    }
  }

  return (
    <Container>
        <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Chairman's Message Form</h1>
        </div>
      </div>
      <div className="adminFormBox">
        <Topbar />
        <div className="adminFormBoxContent">
          <Sidebar />
          <Form className='adminFormBoxContentRight'>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" placeholder="Image" accept='image/*' name='image' onChange={handleChange("image")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" name='title' value={data.title} onChange={handleChange("title")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" name='desc' value={data.desc} onChange={handleChange("desc")} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit} disabled={isLoading}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default ChairmanMsgForm