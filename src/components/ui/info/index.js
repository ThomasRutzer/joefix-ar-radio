import React, { useState } from "react"
import { useTransition, animated, config } from "@react-spring/web"

import "./index.css"
import Media from "./media"
import Footer from "./../footer"

const Info = ({ onStartButton }) => {
  const [show, setShow] = useState(true)

  const contentTransitions = useTransition(show, {
    from: { opacity: 0, y: 90 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 90 },
    delay: show ? 1000 : 200,
    config: config.molasses,
    onRest: () => {
      if (!show) {
        onStartButton()
      }
    }
  })

  const footerTranisitons = useTransition(show, {
    from: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 30 },
    delay: show ? 800 : 0,
    config: config.molasses
  })

  return (
    <>
      {
        contentTransitions(
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
                </div>
              </div>
            </animated.div>
        )
      }
      {
        footerTranisitons(
          (styles, item) => item &&
            <Footer style={styles} />
        )
      }
    </>
  )
}

export default Info