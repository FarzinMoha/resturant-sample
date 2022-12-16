import React from 'react'
import '../../../fade/Fade.style.scss'

const LeftBotOut = ({scrollPosition , scroll ,speedScale , children}) => {
  const Scroll = scroll + speedScale
  const remove = scroll +2000
  return (
<>{scrollPosition>=scroll && scrollPosition<=remove ?     <div className='left-Bot-Out' style={scrollPosition<=Scroll ? { transform: `scale(${(scrollPosition-scroll)/speedScale})`}:{ transform: `scale(1) translate(-${((scrollPosition-Scroll))}px , ${((scrollPosition-Scroll))}px)`}}>
      {children}
    </div> :null}</>
  )
}

export default LeftBotOut