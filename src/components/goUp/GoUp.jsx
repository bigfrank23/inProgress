import React, {useState, useEffect} from 'react'
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './goUp.css'

const GoUp = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 1500) {
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
    })

    const handleClick = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }

  return (
    <div>
        <div className={scroll ? "goUpBox" : null} onClick={handleClick}>
            <FontAwesomeIcon className='goUpIcon' icon={faAngleUp} />
        </div>
    </div>
  )
}

export default GoUp