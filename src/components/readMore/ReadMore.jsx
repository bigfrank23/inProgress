import React, { useState } from 'react'
import './ReadMore.css'

const ReadMore = ({children}) => {
    const [isHidden, setIsHidden] = useState(true)
  return (
      <>
        <div className={isHidden ? 'hidden' : null}>{children}</div>
        <button onClick={()=> setIsHidden(!isHidden)}>{isHidden ? 'more' : 'less'}</button>
      </>
  )
}

export default ReadMore