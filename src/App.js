import React, {useEffect, useState} from 'react'
import Home from "./pages/Home/Home";
// import Page1 from "./pages/page1/Page1";
import About from "./pages/about/About";
import Page2 from "./pages/page2/Page2";
// import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";
import Page5 from "./pages/page5/Page5";
import Page6 from "./pages/page6/Page6";
import Page7 from "./pages/page7/Page7";
import History from "./pages/history/History";
import History2 from "./pages/history2/History2";
import Page8 from "./pages/page8/Page8";
import Page9 from "./pages/page9/Page9";
import Page10 from "./pages/page10/Page10";
import Page11 from "./pages/page11/Page11";
// import Page12 from "./pages/page12/Page12";
import LSES from "./pages/LSES/LSES";
import Page13 from "./pages/page13/Page13";
import Page14 from "./pages/page14/Page14";
import Page15 from "./pages/page15/Page15";
import Page16 from "./pages/page16/Page16";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import styled from "styled-components";
import WhatWeBelieve from "./pages/whatWeBelieve/WhatWeBelieve";
import TheNational from "./pages/theNational/TheNational";
import PastPfn from "./pages/pastPfn/PastPfn";
import PfnExecutives from "./pages/pfnExecutives/PfnExecutives";
import Gallery from './pages/gallery/Gallery'
import Post from './pages/blog/allPost/post/Post'
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import GoUp from "./components/goUp/GoUp";
import OurMission from "./pages/ourMission/OurMission";
import ExtraPage from "./pages/extraPage/ExtraPage";
import Spinner from "react-spinkit";
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

const Container = styled.div`
  width: 100%;
`

function App() {
  // const [isLoading, setIsloading] = useState(true)
  // if (isLoading) return <Spinner name="circle" style={{ width: 100, height: 100 }} />
  useEffect(()=>{
    window.addEventListener("load", ()=> {
      <Spinner name="circle" style={{ width: 100, height: 100 }} />
    })
    
  })

  const user = JSON.parse(localStorage.getItem("mern_crud3_copy_user"));
  return (
    <Container>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/page2' component={Page2} />
          <Route exact path='/what-we-believe' component={WhatWeBelieve} />
          <Route exact path='/the-national' component={TheNational} />
          <Route exact path='/past-pfn-chairmen' component={PastPfn} />
          <Route exact path='/pfn-executives' component={PfnExecutives} />
          <Route exact path='/page4' component={Page4} />
          <Route exact path='/page5' component={Page5} />
          <Route exact path='/page6' component={Page6} />
          <Route exact path='/history' component={History} />
          <Route exact path='/history2' component={History2} />
          <Route exact path='/page8' component={Page8} />
          <Route exact path='/directorate' component={Page9} />
          <Route exact path='/page10' component={Page10} />
          <Route exact path='/page11' component={Page11} />
          <Route exact path='/lses' component={LSES} />
          <Route exact path='/prayer' component={Page13} />
          <Route exact path='/page14' component={Page14} />
          <Route exact path='/page15' component={Page15} />
          <Route exact path='/page16' component={Page16} />
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
          <Route exact path='/give' component={PaymentForm} />
          <Route exact path='/full_exec_detail:id' component={FullExecDetail} />
        </Switch>
      </Router>
      <GoUp />
    </Container>
  );
}

export default App;
