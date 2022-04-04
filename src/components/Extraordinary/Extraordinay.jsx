import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BgImg from '../../images/bg2.jpg'
import PlayImg from '../../images/splash1.jpg'
import Button from '../Button/Button'


const Container = styled.div`
    background: url(${BgImg});
    margin-top: 10rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const ExtraContentContainer = styled.div`
    /* text-align: center; */
    padding: 4rem;
`
const ExtraTextContainer = styled.div`
    text-align: center;
`
const ExtraText = styled.h1`
    font-size: 2.5rem;
    font-style: italic;
    color: green;
    margin: 0 auto 20px auto;
    text-align: center;
`
const ExtraContent = styled.div`
    display: flex;
    gap: 20px;
`
const ExtraImg = styled.div`
    /* flex: 1; */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${PlayImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 450px;
    width: 450px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ExtraIconContainer = styled.div`
    background: linear-gradient(#7bff7b, #7bff7b);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .playIcon{
        color: #000;
        font-size: 2rem;
    }
`
const ExtraContentText = styled.div`
    flex: 1;
    align-self: center;
`
const ExtraDesc = styled.p`
    color: #232e32;
    font-weight: 900;
    line-height: 25px;
    margin: 18px 0;
`
const ExtraName = styled.p`
    color: #232e32;
    margin: 18px 0 40px;
`
//Second section
const ExtraContentContainer2 = styled.div`
    align-self: flex-start;
    width: 100%;
    padding: 0 4rem 4rem 4rem;
    .extraLink{
    display: flex;
    justify-content: center;
    margin: 18px 0px;
    text-decoration: none;
    }
`
const ExtraTextContainer2 = styled.div`
    text-align: center;
`
const ExtraText2 = styled.h1`
    font-size: 25px;
    margin: 0 0 30px;
    text-align: center;
`
const ExtraCard = styled.div`
    width: 300px;
    /* height: 100%; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transform: scale(1);
    transition: transform .2s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`
const ExtraCardImgContainer = styled.div`
    width: 300px;
    background-color: green;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    `
const ExtraCardImg = styled.img`
    width: 100%;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const ExtraContentText2 = styled.div`
    background-color: green;
    padding: 2rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
const ExtraTitle = styled.div`
    color: #fff;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
`
const ExtraDate = styled.div`
    color: #fff;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    /* margin-right: 5px; */
`
const ExtraLocation = styled.div`
    color: #fff;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
      /* margin-right: 5px; */
`
const Extraordinay = () => {
    const items = [1, 2, 3, 4, 5]
  return (
    <Container>
        <ExtraContentContainer>
            <ExtraTextContainer>
                <ExtraText>Lorem ipsum dolor sit amet.</ExtraText>
            </ExtraTextContainer>
            <ExtraContent>
                <ExtraImg>
                    <ExtraIconContainer>
                        <i className="fa fa-play playIcon" aria-hidden="true" />
                    </ExtraIconContainer>
                </ExtraImg>
                <ExtraContentText>
                    <ExtraDesc>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto et, enim totam ducimus eius minima quos quas sunt eos pariatur!"</ExtraDesc>
                    <ExtraName>Lorem, ipsum.</ExtraName>
                </ExtraContentText>
            </ExtraContent>
        </ExtraContentContainer>
                <ExtraContentContainer2>
                        <ExtraTextContainer2>
                            <ExtraText2>Lorem ipsum dolor sit amet.</ExtraText2>
                        </ExtraTextContainer2>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', columnGap: '1.5rem', rowGap: '1.5rem'}}>
                        {items.map(()=>(
                            <ExtraCard>
                                <ExtraCardImgContainer>
                                    <ExtraCardImg src={PlayImg}/>
                                </ExtraCardImgContainer>
                                <ExtraContentText2>
                                    <ExtraTitle>Lorem ipsum imus eius minima</ExtraTitle>
                                    {/* <div style={{display: 'flex', color: "white"}}> */}
                                    <ExtraDate>Lorem, ipsum.</ExtraDate> 
                                    {/* </div> */}
                                    {/* <div style={{display: 'flex', color: "white"}}> */}
                                    <ExtraLocation>Lorem, ipsum. </ExtraLocation> 
                                    {/* </div> */}
                                </ExtraContentText2>
                            </ExtraCard>
                        ))}
                    </div>
                    <Link to='#' className='extraLink'>
                    <Button BtnText='VIEW ALL EVENTS'/>
                    </Link>
                </ExtraContentContainer2>
    </Container>
  )
}

export default Extraordinay