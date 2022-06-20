import React from 'react'
import styled from 'styled-components'
import Img from '../../images/splash2.jpg'
import Img3 from '../../images/bg2.jpg'
import PImg1 from '../../images/pastPfn1.png'
import PImg2 from '../../images/pastPfn2.jpg'
import PImg3 from '../../images/pastPfn3.png'
import PImg4 from '../../images/pastPfn4.jpg'
import PImg5 from '../../images/pastPfn5.jpg'
import PImg6 from '../../images/pastPfn6.jpeg'
import PImg7 from '../../images/pastPfn7.jpg'
import PImg8 from '../../images/pastPfn8.jpg'
import PImg9 from '../../images/pastPfn9.png'
import PImg10 from '../../images/pastPfn10.jpg'
import logoImg from '../../images/PFN4.png'
import BgImg from '../../images/splash1.jpg'
import Footer from '../../components/Footer/Footer'
import BGImg3 from '../../images/bg4.jpg'

// import './Page3.css'
import './PastPfn.css'
import H3 from '../../components/Text/H3'
import PText from '../../components/Text/PText'
import { Grid } from '@mui/material'
import { landscapeTab, mobile, tab } from '../../responsive'

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  background: url(${Img3});
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${BGImg3});
    background-size: cover;
    background-position-y: -145px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    top: 0;
    height: 65vh;
    ${mobile({ height: "40vh", backgroundPosition: '0 25%', backgroundSize: "contain"})}
    ${tab({ height: "42vh", backgroundSize: "100% 55%", backgroundPosition: "unset"})}
    ${landscapeTab({ height: "65vh", backgroundSize: "cover", backgroundPositionY: "-145px"})}
    .page1Header {
      color: #fff;
      text-align: center;
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
    margin-top: 42rem;
    padding: 4rem;
    color: #fff;
    text-align: center;
  }
  .pageContent{
      padding: 4rem;
  }
`;

const pastPfnMembers = [{
    id: 1,
    img: PImg1,
    name: "Rev. Isaac M.A. Mpamaugo",
    date: "1986 - 1990",
},
{
    id: 2,
    img: PImg2,
    name: "Rev. Dr. Wilson Badejo",
    date: "1990 - 1992",
},
{
    id: 3,
    img: PImg3,
    name: "Pastor M.K Ogunbola",
    date: "1992 - 1995",
},
{
    id: 4,
    img: PImg4,
    name: "Pastor Paul Akapo",
    date: "1995-1996",
},
{
    id: 5,
    img: PImg5,
    name: "Bishop Lawrence Osagie",
    date: "1996 - 2002",
},
{
    id: 6,
    img: PImg6,
    name: "Bishop Olanrewaju J. Obembe",
    date: "2002 - 2005",
},
{
    id: 7,
    img: PImg7,
    name: "Pastor Wale Adefarasin",
    date: "2005 - 2008",
},
{
    id: 8,
    img: PImg8,
    name: "Apostle Alexander Bamgbola",
    date: "2008 - 2014",
},
{
    id: 9,
    img: PImg9,
    name: "Bishop Olusola Ore",
    date: "2014 - 2020",
},
{
    id: 10,
    img: PImg10,
    name: "Apostle Enyinnaya Okwuonu",
    date: "2020 - Date",
},
]

const PastPfn = () => {
  return (
    <Container>
        <div className="page1Wrapper">
            <div className="page1Header">
            <h1>Past PFN Lagos Chairmen From Inception Till Date</h1>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none" className="svgBackground">
        <path className="elementor-shape-fill" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>
        <path className="elementor-shape-fill" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>
        <path className="elementor-shape-fill" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>
        <path className="elementor-shape-fill" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>
        <path className="elementor-shape-fill" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>
        <path className="elementor-shape-fill" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>
        <path className="elementor-shape-fill" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>
        <path className="elementor-shape-fill" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>
        <path className="elementor-shape-fill" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>
        </svg>
        <div className="pastPfnGrid">
            <Grid container spacing={0}>
                {pastPfnMembers.map((data)=> (
                    <Grid item xs={12} sm={6} md={4} key={data.id}>
                        <div className="pastPfnGridContent">
                            <div className="pastPfnGridContentBx">
                                <div className="pastPfnGridContentImg">
                                    {/* <div className="lll"> */}
                                        <img src={data.img} alt="" />
                                    {/* </div> */}
                                    <div className="mmm">
                                        <img src={logoImg} alt="" />
                                    </div>
                                </div>
                                <hr />
                                <div className="postPfnGridContentTxt">
                                    <h3>{data.name}</h3>
                                    <p>{data.date}</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
        <Footer />
    </Container>
  )
}

export default PastPfn