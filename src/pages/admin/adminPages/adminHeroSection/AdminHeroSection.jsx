import React from 'react'
import styled from 'styled-components'
import Chart from '../../adminComponents/chart/Chart'
import FeaturedInfo from '../../adminComponents/featuredInfo/FeaturedInfo'
import Sidebar from '../../adminComponents/sidebar/Sidebar'
import Topbar from '../../adminComponents/topbar/Topbar'
import { userData } from "../../dummyData";
import './AdminHeroSection.css'
import BgImg from '../../../../images/light-texture-bg.jpg'
import Img from '../../../../images/splash2.jpg'
import { mobile } from '../../../../responsive'
import Footer from '../../../../components/Footer/Footer'


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
    ${mobile({backgroundPosition: "10px 50px"})}
    .page1Header {
      color: #fff;
      text-align: center;
      top: 25%;
    position: relative;
    }
  }
    `
const AdminHeroSection = () => {
  return (
    <Container>
        <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Admin</h1>
        </div>
      </div>
      <div className="adminHeroSectionContainer">
        <div className="adminTopBar">
            <Topbar />
        </div>
        <div className="adminMainBx">
            <div className="adminSidebar">
                <Sidebar />
            </div>
            <div className="adminMainContentBox">
                <FeaturedInfo />
                <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default AdminHeroSection