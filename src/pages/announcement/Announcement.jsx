import React from 'react'
import styled from 'styled-components'
import Img4 from '../../images/contactBg.jpg'
import Img5 from '../../images/announcementBg.jpg'
import GroupImg from '../../images/group.png'
import SocialImg from '../../images/social.png'
import BgImg from '../../images/splash1.jpg'
import Footer from '../../components/Footer/Footer'
import './Announcement.css'

const Container = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
  /* background: url(${Img4}); */
  /* display: flex;
  align-content: center;
  justify-content: center; */
  .page1Wrapper {
    /* -webkit-clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 79%, 0% 100%); */
    /* clip-path: polygon(0 0, 61% 0, 100% 0, 100% 50%, 60% 100%, 60% 80%, 0% 80%); */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img5});
    background-size: 100%;
    background-position: center;
    background-position-y: inherit;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
      /* text-shadow: 0 5px green; */
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

const Announcement = () => {
  return (
    <Container>
      <div className="page1Wrapper">
        {/* <Navbar /> */}
        <div className="page1Header">
          <h1>Announcements</h1>
        </div>
      </div>
      <div className="container" id='announcementContainer'>
        <div className="row">
          <div className="jumbotron-fluid">
            <div className="p-4 p-md-5 text-white rounded bg-dark">
              <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">Announcements</h1>
                <p className="lead my-3">Welcome to our Official news and Announcement page of the PFN Lagos Chapter  .</p>
                <p className="lead mb-0"><div className="text-white font-weight-bold">Continue reading...</div></p>
              </div>
            </div>
          </div>
          <div className="row mb-2">
        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-450 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">OFFICIAL MEETING DAYS </strong>
              <h3 className="mb-0">Monthly Meetings</h3>
              <div className="mb-1 text-muted">April 12</div>
              <p className="card-text mb-4">Lagos State Executive meets the last Tuesday of every month at The Secretariat, 5-9 Bode Thomas Road, Onipanu, Lagos. </p>
                {/* <!-- Button to Open the Modal --> */}
              <button type="button" className="btn btn-success stretched-link" data-toggle="modal" data-target="#myModal">Continue reading</button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={GroupImg} alt="img-bg" className="float-right" height="" width="300" />
              
              {/* <!-- <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> --> */}
            </div>
          </div>
        </div>


          {/* <!-- The Modal --> */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
            
              {/* <!-- Modal Header  */}
              <div className="modal-header">
                <h1 className="modal-title">PFN Lagos Chapter Official Meeting Days</h1>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              
              {/* Modal body */}
              <div className="modal-body">
                <h3>Please Note</h3>
                <img src={GroupImg} className="img-centered img-thumbnail " alt="" />
                <p className="">Lagos State Executive meets the last Tuesday of every month at The Secretariat, 5-9 Bode Thomas Road, Onipanu, Lagos.</p>
                
              </div>
              
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
              
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-450 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">SOCIAL</strong>
              <h3 className="mb-0">PFN Lagos State Official Website and Social Media Accounts</h3>
              <div className="mb-1 text-muted">May 11</div>
              <p className="mb-auto">Please be informed that this is the official website of the Pentecostal </p>
              <button type="button" className="btn btn-success stretched-link" data-toggle="modal" data-target="#myModal1">Continue reading</button>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={SocialImg} alt="img-bg" className="float-right" height="" width="300" />
            </div>
          </div>
        </div>
      </div>
      <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">
          <h3 class="pb-4 mb-4 font-italic border-bottom">
            From our desk...
          </h3>

          <div class="blog-post">
            <h2 class="blog-post-title">Monthly meeting</h2>
            <p class="blog-post-meta">May 13, 2022 by Admin</p>

            <p>Lagos State Executive meets the last Tuesday of every month at The Secretariat, 5-9 Bode Thomas Road, Onipanu, Lagos. </p>
            <hr />
            <p>This administration is all inclusive. Every Pentecostal Minister/Church in Lagos State is welcome to join hands with us to advance God’s Kingdom in our lovely State. Kindly pray fervently for this new administration. </p>
          
            <p>We look forward to welcoming you in any of our State, Provincial or Chapter’s meetings/fellowship. Thanks and God bless you.</p>
            
            
            
          </div>

          <div class="blog-post">
            <h2 class="blog-post-title">PFN Lagos State Official Website and Social Media Accounts</h2>
            <p class="blog-post-meta">May 13, 2022 by Admin</p>

            <p>Please be informed that this is the official website of the Pentecostal Fellowship of Nigeria, Lagos State.  <strong>www.pfnlagosstate.org</strong></p>
            <blockquote>
              <p>and the Official social media handles are: </p>
            </blockquote>
            <hr />
            <p><strong>Facebook:</strong></p>
            <p>Official Name: Pentecostal Fellowship of Nigeria - PFN Lagos State</p>
            <p>Link: www.facebook.com/<strong>pfnlagostate</strong> </p>
            <p>Handle:<strong>@pfnlagostate</strong></p>
            
            <hr />
            <p><strong>Twitter:</strong></p>
            <p>Official Name: Pentecostal Fellowship of Nigeria - PFN Lagos State</p>
            <p>Link: www.twitter.com/<strong>pfnlagostate</strong> </p>
            <p>Handle:<strong>@pfnlagostate</strong></p>       

            <hr />
            <p><strong>Instagram:</strong></p>
            <p>Official Name: Pentecostal Fellowship of Nigeria - PFN Lagos State</p>
            <p>Link: www.facebook.com/<strong>pfnlagostate</strong> </p>
            <p>Handle:<strong>@pfnlagostate</strong></p> 

            
          </div>

          <nav class="blog-pagination">
            <button class="btn btn-outline-primary">Older</button>
            <button class="btn btn-outline-secondary disabled"tabIndex="-1" aria-disabled="true">Newer</button>
          </nav>

        </div>

        <aside class="col-md-4 blog-sidebar">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="font-italic">About</h4>
            <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>

          <div class="p-4">
            <h4 class="font-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </aside>

      </div>

    </main>

        </div>
      </div>

      <Footer />
    </Container>
  )
}

export default Announcement