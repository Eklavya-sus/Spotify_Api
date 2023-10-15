import React from 'react'
import videoBg from '../video/myvid2.mp4'
import "./main.css"


const Main = () => {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted></video>
    </div>
  )
}

export default Main
