import React from 'react'
import H2 from '../Text/H2'
import H3 from '../Text/H3'
import './Upcoming.css'

const Upcomin = ({title1, title2,title3, title4, title5, image, para1, para2}) => {
  return (
        <div className="page4Bottom">
              <div className="page4ButtomCardBx">
                <div className="page4buttomCard1 ddd">
                  <div className="page4ButtomCardOverlay" style={{height: '400px', backgroundPosition: 'center', backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                    <img src={image} alt="" style={{width: "30%", height: "400px", objectFit: "contain"}} />
                    {/* <h3 style={{color: 'green'}}>{title1} <h3 style={{color: '#fff'}}>{title2}</h3></h3> */}
                  </div>
                  {/* <div className="page4ButtomCardTextContent">
                    <div style={{textAlign: 'center', color: '#fff'}}><H3 color={true}> {title3} </H3> </div>
                    <div style={{textAlign: 'center', color: '#fff' , display: 'flex', gap: '5px', justifyContent: 'center', margin: '1rem 0'}}><H3 color={true}> {title4} </H3>: {para1} </div>
                    <div style={{textAlign: 'center', color: '#fff' , display: 'flex', gap: '5px', justifyContent: 'center'}}><H3 color={true}>{title5}</H3>: {para2}</div>
                  </div> */}
                </div>
              </div>
            </div>
  )
}

export default Upcomin