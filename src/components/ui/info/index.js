import React from "react"

import { VIEWS } from "../../../config"
import useStore from "./../../../store"
import "./index.css"
import Media from "./media"
import ExternalLink from "./../externalLink"

const Info = ({ onStartButton }) => {
  const view = useStore(store => store.view)
  return (
    <>
      {view !== VIEWS.SCENE &&
        <div className="info">
          <div className="info__content">
            <Media />
            <div className="info__explanation">
              <p className="info__copy">
                Welcome to the JOE FIX AR Radio. It's experimental, sometimes don't work and it's gonna be loud & fix.
                But you'll be just fine, no worries!
              </p>
              <span className="info__cta">
                <button onClick={onStartButton}>Show me!</button>
              </span>
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
                  <ExternalLink label="dev by Thomas Rutzer" link="https://thomasrutzer.dev/legal"></ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Info