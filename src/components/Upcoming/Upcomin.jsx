import React from 'react'
import H2 from '../Text/H2'
import H3 from '../Text/H3'
import './Upcoming.css'

const Upcomin = () => {
  return (
        <div className="page4Bottom">
              <div className="page4BottomTitle">
                <H2 children='Lorem Ipsium.' />
              </div>
              <div className="page4ButtomCardBx">
                <div className="page4buttomCard1">
                  <div className="page4ButtomCardOverlay">
                    <h3 style={{color: 'green'}}>Lorem, ipsum dolor. <h3 style={{color: '#fff'}}>Lorem, ipsum.</h3></h3>
                  </div>
                  <div className="page4ButtomCardTextContent">
                    <div style={{textAlign: 'center', color: '#fff'}}><H3 children='Lorem Ipsium' color={true}/></div>
                    <div style={{textAlign: 'center', color: '#fff' , display: 'flex', gap: '5px', justifyContent: 'center', margin: '1rem 0'}}><H3 children='Lorem' color={true}/>: 99/00 </div>
                    <div style={{textAlign: 'center', color: '#fff' , display: 'flex', gap: '5px', justifyContent: 'center'}}><H3 children='Lorem' color={true}/>: Lorem, ipsum.</div>
                  </div>
                </div>
                <div className="page4buttomCard2">
                  <div className="page4ButtomCardOverlay">
                    <h3 style={{color: 'green'}}>Lorem, ipsum dolor. <h3 style={{color: '#fff'}}>Lorem, ipsum.</h3></h3>
                  </div>
                  <div className="page4ButtomCardTextContent">
                    <div style={{textAlign: 'center', color: '#fff'}}><H3 children='Lorem Ipsium' color={true} /></div>
                    <div style={{textAlign: 'center', color: '#fff' , display: 'flex', gap: '5px', justifyContent: 'center', margin: '1rem 0'}}><H3 children='Lorem' color={true} />: 99/00 </div>
                    <div style={{textAlign: 'center', color: '#fff' , display: 'flex', gap: '5px', justifyContent: 'center'}}><H3 children='Lorem' color={true} />: Lorem, ipsum.</div>
                  </div>
                </div>
                <div className="page4buttomCard3">
                  <div className="page4ButtomCardOverlay">
                    <h3 style={{color: 'green'}}>Lorem, ipsum dolor. <h3 style={{color: '#fff'}}>Lorem, ipsum.</h3></h3>
                  </div>
                  <div className="page4ButtomCardTextContent">
                    <div style={{textAlign: 'center', color: '#fff'}}><H3 children='Lorem Ipsium' color={true} /></div>
                    <div style={{textAlign: 'center', color: '#fff', display: 'flex', gap: '5px', justifyContent: 'center', margin: '1rem 0'}}><H3 children='Lorem' color={true} /> : 99/00 </div>
                    <div style={{textAlign: 'center', color: '#fff', display: 'flex', gap: '5px', justifyContent: 'center'}}><H3 children='Lorem' color={true} /> : Lorem, ipsum.</div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Upcomin