import React from 'react'
import Home from "./pages/Home/Home";
// import Page1 from "./pages/page1/Page1";
import About from "./pages/about/About";
// import Page3 from "./pages/page3/Page3";
// import Page7 from "./pages/page7/Page7";
import History from "./pages/history/History";
import History2 from "./pages/history2/History2";
import Page9 from "./pages/page9/Page9";
// import Page12 from "./pages/page12/Page12";
import LSES from "./pages/LSES/LSES";
import Page13 from "./pages/page13/Page13";
import {BrowserRouter as Router, HashRouter, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import styled from "styled-components";
import WhatWeBelieve from "./pages/whatWeBelieve/WhatWeBelieve";
import TheNational from "./pages/theNational/TheNational";
import PastPfn from "./pages/pastPfn/PastPfn";
import PfnExecutives from "./pages/pfnExecutives/PfnExecutives";
import Gallery from './pages/gallery/Gallery'
// import Post from './pages/blog/allPost/post/Post'
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import GoUp from "./components/goUp/GoUp";
import OurMission from "./pages/ourMission/OurMission";
import ExtraPage from "./pages/extraPage/ExtraPage";
import ContactPage from './pages/contactPage/ContactPage';
import Write from './pages/blog/write/Write';
import Register from './pages/blog/auth/register/Register';
import Login from './pages/blog/auth/login/Login';
import AllPosts from './pages/blog/allPost/AllPosts';
import FullDetail from './pages/blog/fullDetail/FullDetail';
import Settings from './pages/blog/settings/Settings';
import Login2 from './pages/blog/auth/login2/Login2';
import Announcement from './pages/announcement/Announcement';
import PaymentForm from './components/payment/PaymentForm';
import FullExecDetail from './pages/fullExecDetail/FullExecDetail';
import Chapters from './pages/chapters/Chapters';
import AllEvents from './pages/allEvents/AllEvents';
import Upcoming from './pages/allEvents/upcoming/Upcoming';
import FullExecDetail2 from './pages/fullExecDetail/fullExecDetail2/FullExecDetail2';
import FullExecDetail3 from './pages/fullExecDetail/fullExecDetail3/FullExecDetail3';
import FullExecDetail4 from './pages/fullExecDetail/fullExecDetail4/FullExecDetail4';
import FullExecDetail5 from './pages/fullExecDetail/fullExecDetail5/FullExecDetail5';
import FullExecDetail6 from './pages/fullExecDetail/fullExecDetail6/fullExecDetail6';
import Current from './pages/allEvents/current/Current';
import Past from './pages/allEvents/past/Past';
import FullEventDetail from './pages/allEvents/fullDetail/FullEventDetail';
import PaymentForm2 from './components/payment/PaymentForm2';
import AdminApp from './pages/admin/AdminApp';
import Sidebar from "./pages/admin/adminComponents/sidebar/Sidebar";
import Topbar from "./pages/admin/adminComponents/topbar/Topbar";
// import "./AdminApp.css";
import Admin from "./pages/admin/adminPages/home/AdminHome";
import UserList from "./pages/admin/adminPages/userList/UserList";
import User from "./pages/admin/adminPages/user/User";
import NewUser from "./pages/admin/adminPages/newUser/NewUser";
import ProductList from "./pages/admin/adminPages/productList/ProductList";
import Product from "./pages/admin/adminPages/product/Product";
import NewProduct from "./pages/admin/adminPages/newProduct/NewProduct";
import Directors from "./pages/admin/adminPages/userList/directors/Directors";
import Chairmen from "./pages/admin/adminPages/userList/chairmen/Chairmen";
import AdminHeroSection from './pages/admin/adminPages/adminHeroSection/AdminHeroSection';
import AdminHome from './pages/admin/adminPages/home/AdminHome';

const Container = styled.div`
  width: 100%;
`

function App() {

  // const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
  return (
    <Container>
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/what-we-believe' component={WhatWeBelieve} />
          <Route exact path='/the-national' component={TheNational} />
          <Route exact path='/past-pfn-chairmen' component={PastPfn} />
          <Route exact path='/pfn-executives' component={PfnExecutives} />
          {/* <Route exact path='/page4' component={Page4} />
          <Route exact path='/page5' component={Page5} />
          <Route exact path='/page6' component={Page6} /> */}
          <Route exact path='/history' component={History} />
          <Route exact path='/history2' component={History2} />
          {/* <Route exact path='/page8' component={Page8} /> */}
          <Route exact path='/directorate' component={Page9} />
          {/* <Route exact path='/page10' component={Page10} /> */}
          {/* <Route exact path='/page11' component={Page11} /> */}
          <Route exact path='/lses' component={LSES} />
          <Route exact path='/prayer' component={Page13} />
          {/* <Route exact path='/page14' component={Page14} /> */}
          {/* <Route exact path='/page15' component={Page15} /> */}
          {/* <Route exact path='/page16' component={Page16} /> */}
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/our-mission' component={OurMission} />
          {/* <Route exact path='/blogs' component={Post} /> */}
          <Route exact path='/blogs' component={AllPosts} />
          <Route exact path="/full_detail/:id" component={FullDetail} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path='/provinces' component={ExtraPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/write' component={Write} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/admin_login' component={Login2} />
          <Route exact path='/announcement' component={Announcement} />
          <Route exact path='/give2' component={PaymentForm} />
          <Route exact path='/give' component={PaymentForm2} />
          <Route exact path='/full_exec_detail/:id' component={FullExecDetail} />
          <Route exact path='/full_exec_detail_cwc' component={FullExecDetail2} />
          <Route exact path='/full_exec_detail_cwc2' component={FullExecDetail3} />
          <Route exact path='/full_exec_detail_cwc3' component={FullExecDetail4} />
          <Route exact path='/full_exec_detail_cwc4' component={FullExecDetail5} />
          <Route exact path='/full_exec_detail_cwc5' component={FullExecDetail6} />
          <Route exact path="/province/:id" component={Chapters} />
          <Route exact path='/all-events' component={AllEvents} />
          <Route exact path='/upcoming-events' component={Upcoming} />
          <Route exact path='/current-events' component={Current} />
          <Route exact path='/past-events' component={Past} />
          <Route exact path='/full-event-detail' component={FullEventDetail} />
          <Route exact path='/admin' component={AdminHome} />
          <Route exact path="pfnlagos-directors" component={Directors} />
          <Route exact path="pfnlagos-cwc" component={UserList} />
          <Route exact path="pfnlagos-chairmen" component={Chairmen} />
        </Switch>
      </HashRouter>
      <GoUp />
    </Container>
  );
}

export default App;
