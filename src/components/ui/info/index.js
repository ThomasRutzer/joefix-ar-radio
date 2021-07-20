import React, { useState } from "react"
import { useTransition, animated, config } from "@react-spring/web"

import "./index.css"
import Media from "./media"
import ExternalLink from "./../externalLink"

const Info = ({ onStartButton }) => {
  const [show, setShow] = useState(true)

  const transitions = useTransition(show, {
    from: { opacity: 0, y: 300 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 300 },
    delay: show ? 1000 : 0,
    config: config.molasses,
    onRest: () => {
      if (!show) {
        onStartButton()
      }
    }
  })

  return (
    transitions(
      (styles, item) => item &&
        <animated.div className="info" style={styles}>
          <div className="info__content">
            <Media />
            <div className="info__explanation">
              <p className="info__copy">
                Welcome to the JOE FIX AR Radio. It's experimental, sometimes doesn't work and it's gonna be loud & fix.
                But you'll be just fine, no worries!
              </p>
              <button className="info__cta" onClick={() => setShow(false)}>Show me!</button>
              <div className="info__link-list-wrapper">
                <ul>
                  <li>
                    <ExternalLink label="turntable model" link="https://market.pmnd.rs/model/turntable"></ExternalLink>
                  </li>
                  <li>
                    <ExternalLink label="vinyl model" link="https://poly.google.com/view/fKJtFLGpHWs"></ExternalLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <ExternalLink label="listen on Bandcamp" link="https://joefix1.bandcamp.com/releases"></ExternalLink>
                  </li>
                  <li>
                    <ExternalLink label="made by Thomas Rutzer" link="https://thomasrutzer.dev/legal"></ExternalLink>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </animated.div>
    )
  )
}

export default Info