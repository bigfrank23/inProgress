import React from 'react'
import Img from '../../images/splash2.jpg'
import Img2 from '../../images/splash3.jpg'
import Img3 from '../../images/bg2.jpg'
import BgImg from '../../images/splash1.jpg'
import styled from 'styled-components'
import Header from '../../components/Text/Header'
import H2 from '../../components/Text/H2'
import PText from '../../components/Text/PText'
import './Page6.css'
import H3 from '../../components/Text/H3'
import { Link } from 'react-router-dom'
import Upcomin from '../../components/Upcoming/Upcomin'
import Footer from '../../components/Footer/Footer'

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
      url(${Img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    .page1Header {
      color: #fff;
      text-align: center;
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
const Page6 = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Header</h1>
        </div>
      </div>
      <div className="page6Bx1">
          <div className="page6Header">
              <Header children='Lorem Ipsium' color={true} />
          </div>
          <div className="page6Title">
              <H2 children='where adults connect through relationships' />
          </div>
          <div className="page6Para">
              <PText children="The church is not a building or a Sunday service, it's a group of people all working toward the common goal of spreading God’s love to the world. We love meeting together on Sundays, but a truly effective church gathers throughout the week. We encourage everyone to get involved by volunteering on a team and joining one of our many groups." />
          </div>
      </div>

      <div className="page6Bx2">
          <div className="page6BxOverlay1">
              <div className="page6Title">
                  <H2 children='Volunteer' color={true} />
              </div>
          </div>
          <div className="page6BxOverlay2">
              <div className="page6Title">
                  <H2 children='Volunteer' color={true} />
              </div>
          </div>
      </div>
      <div className="page6Bx3">
          <div className="page6Bx3Content">
              <div className="page6Img">
                  <img src={Img2} alt="" />
              </div>
              <div className="page6Txt">
                  <H3 children='Lorem Ipsium' />
                  <div style={{padding: '1rem 0'}}>
                    <PText children="Baptism is an outward display of an inward commitment. At Faith, baptism is a public service where we immerse people into water to metaphorically display the life, death, and resurrection of Jesus. At Faith Community Church we encourage every person who is a believer to be baptized. It's an incredible celebration of hope." />

                  </div>
                  <Link to="#" className='links' style={{fontWeight: 900, color: 'green'}}>
                  Register Now »
                  </Link>
              </div>
          </div>
          <div className="page6Bx3Content" style={{marginTop: '4rem'}}>
              <div className="page6Img">
                  <img src={Img2} alt="" />
              </div>
              <div className="page6Txt">
                  <H3 children='Lorem Ipsium' />
                  <div style={{padding: '1rem 0'}}>
                    <PText children="Baptism is an outward display of an inward commitment. At Faith, baptism is a public service where we immerse people into water to metaphorically display the life, death, and resurrection of Jesus. At Faith Community Church we encourage every person who is a believer to be baptized. It's an incredible celebration of hope." />

                  </div>
                  <Link to="#" className='links' style={{fontWeight: 900, color: 'green'}}>
                  Register Now »
                  </Link>
              </div>
          </div>
          <div className="page6Bx4">
            <Upcomin />
          </div>
          <div className="page6Bx5">
            <div className="page6Bx5Title">
              <H2 children='Interested in more information?' />
            </div>
            <div className="page6Bx5Title" style={{paddingTop: '1rem'}}>
              <PText children='Get in touch with a member of our team' />
            </div>
            <div className="page6Bx5Img">
              <img src={Img2} alt="" />
            </div>
            <div className="page6Bx5Title" style={{paddingTop: '1.5rem'}}>
              <PText children='John Doe' />
            </div>
            <div className="page6Bx5Title">
              <PText children='johndoe@gmail.com' />
            </div>
          </div>
      </div>
          <Footer />
    </Container>
  )
}

export default Page6