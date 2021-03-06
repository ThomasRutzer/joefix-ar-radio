import React from "react"

import trackedImage from "./../../../assets/images/tracked-image.png"
import "./media.css"

const Media = () => {
  return (
    <div className="media">
      <img
        alt="Cover of Joe Fix – of ties & knives EP"
        src={trackedImage} />
      <div>
        <h2 className="media__subtitle">Listen to</h2>
        <h1 className="media__title">
          Joe Fix – of ties <br /> & knives
        </h1>
      </div>
    </div>
  )
}

export default Media