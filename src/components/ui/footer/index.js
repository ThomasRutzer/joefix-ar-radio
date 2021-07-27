import { animated } from "@react-spring/web"

import "./index.css"
import ExternalLink from "./../externalLink"

const Footer = props => {
  
  return (
    <animated.footer {...props}>
      <div className="footer__content">
        <ul>
          <li>
            <ExternalLink label="turntable model" link="https://market.pmnd.rs/model/turntable"></ExternalLink>
          </li>
          <li>
            <ExternalLink label="vinyl model" link="https://www.turbosquid.com/3d-models/disc-vinyl-3d-model-1608654"></ExternalLink>
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
    </animated.footer >
  )
}

export default Footer