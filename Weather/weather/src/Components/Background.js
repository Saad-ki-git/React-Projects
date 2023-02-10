import React from 'react'
import Video from "../images/Video2.mp4"
import "../Components/Video.css"
function Background() {
  return (
    <div className='main'>
      <video src={Video} autoPlay loop muted></video>
    </div>
  )
}

export default Background
