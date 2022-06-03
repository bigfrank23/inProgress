import React, { useEffect } from 'react'
import Img from '../../images/provincesBg.png'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import styled from 'styled-components'
import Header from '../../components/Text/Header'
import H2 from '../../components/Text/H2'
import PText from '../../components/Text/PText'
import './Chapters.css'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { mobile } from '../../responsive'

const Container = styled.div`
user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 49%, 75% 100%, 0% 100%);
    clip-path: polygon(0% 0%, 100% 0, 100% 49%, 75% 100%, 0% 100%); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({ height: "40vh", clipPath: "unset"})}
    .page1Header {
      color: #fff;
      text-align: center;
      text-transform: capitalize !important;
      ${mobile({ position: "relative", top: "25%", fontSize: "1.2rem"})}
    }
  }
  .pageBanner {
    background: linear-gradient(
        rgba(0,0,0, 0.5),
        rgba(0,0,0, 0.5)
      ),
      url(${BgImg});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    position: relative;
    margin-top: 50rem;
    padding: 4rem;
    color: #fff;
    text-align: center;
  }
`
const Chapters = () => {
    const location = useLocation()
    // const {hash} = useLocation()
    const id = useParams()
    const params = new URLSearchParams(location.hash)
    // console.log(JSON.stringify([...params.entries()]));

    useEffect(()=> {
      console.log(id);
      console.log(location.hash);
      console.log(location.key);
      console.log(location?.state?.province);

    }, [])
    // console.log(params);
    // const query = new URLSearchParams(location.search)
    // console.log(location.state)
    // console.log(query.get('id'))

    // const Foo = () => {
    //   const location = useLocation();
    //   const params = new URLSearchParams(location.hash);
    
    //   return <div>foo {JSON.stringify([...params.entries()])}</div>;
    // };

  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1 style={{textTransform: "uppercase"}}>{location.state.province} Province</h1>
        </div>
      </div>
      <div className="page6Bx3">
          <div className="page6Bx3Content">
              <div className="page6Img" dangerouslySetInnerHTML={{__html: location.state.mapLink}}>
                  {/* <img src={Img2} alt="" /> */}
              </div>
              <div className="page6Txt">
                  <h3>{location.state.province}</h3>
                  <div style={{padding: '1rem 0'}}>
                    <div className="page6TxtPara">
                        <span> <b>Chairman: </b> {location.state.chairman}</span>
                        <span> <b>Secretariat: </b> {location.state.Secretariat ? location.state.Secretariat : "null"}</span>
                        <span> <b>Meeting days: </b> {location.state.MeetingDays}</span>
                        <span> <b>Time: </b> {location.state.time}</span>
                    </div>
                  </div>
                  <div style={{padding: "2rem 0"}}>
                    <Header>Chapters</Header>
                  </div>
                  {/* <Link to="#" className='links' style={{fontWeight: 900, color: 'green'}}>
                  Register Now »
                  </Link> */}
              </div>
          </div>
          <div className="page6Bx5">
            <div className="page6Bx5Title">
              <H2 children='Interested in more information?' />
            </div>
            <div className="page6Bx5Title" style={{paddingTop: '1rem'}}>
              <PText><b>Contact the Province Chairman</b></PText>
            </div>
            <div className="page6Bx5Img">
              <img src={location.state.img} alt="" />
            </div>
            <div className="page6Bx5Title" style={{paddingTop: '1.5rem'}}>
              <PText>{location.state.chairman}</PText>
            </div>
            <div className="page6Bx5Title">
              <PText>{location.state.email}</PText>
            </div>
            <div className="page6Bx5Title">
              <PText>{location.state.tel}</PText>
            </div>
          </div>
      </div>
          <Footer />
    </Container>
  )
}

export default Chapters