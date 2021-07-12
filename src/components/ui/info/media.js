import React, { useCallback, useRef } from "react"

import trackedImage from "./../../../assets/images/tracked-image.png"
import "./media.css"

const Media = () => {
  return (
    <div className="media">
      <img
        alt="Cover of Joe Fix – of ties & knives EP"
        src={trackedImage} />
      <div>
        <h2 className="media__title">Listen to Joe Fix – of ties & knives EP.</h2>
      </div>
    </div>
  )
}

export default Media