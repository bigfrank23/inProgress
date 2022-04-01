import React from 'react'
import styled from 'styled-components'
import gridImg from '../../images/splash2.jpg'
import './whatNext.css'

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem;
`

const WhatsNext = () => {
    const items = [1, 2, 3, 4, 5, 6]
  return (
    <Container>
        <div className="nextHeader">
            <div className="nextTitle">
                <h1>Lorem ipsum dolor sit amet consectetur</h1>
            </div>
            <div className="nextPara">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sit repellat rerum ea.
                     Recusandae corrupti odio voluptatem ducimus aliquam iusto.
                </p>
            </div>
        </div>
        <div className="nextContent">
            {items.map(()=>(
                <div className="contentBox">
                    <img src={gridImg} alt="" />
                    <div className="contentText">
                        <h1>Lorem, ipsum.</h1>
                    </div>
                </div>
            ))}
        </div>
    </Container>
  )
}

export default WhatsNext