import { useTransition, animated, config } from "@react-spring/web"

import useStore from "./../../../store"
import "./index.css"
import MuteButton from "./../../ui/mute"

const ARSessionMenu = () => {
  const arEngineReady = useStore(state => state.arEngineReady)

  const labelTransitions = useTransition(arEngineReady, {
    from: { opacity: 0, y: -30 },
    enter: { opacity: 1, y: 0 },
    delay: 300,
    config: config.molasses
  })

  return (
    <>
      {labelTransitions(
        (styles, item) => item &&
          <animated.div className="ar-session-menu" style={styles}>
            <MuteButton />
            <button 
              className="ar-session-menu__close" 
              onClick={() => window.location.reload()}>
              ×
            </button>
          </animated.div>
      )}
    </>
  )
}

export default ARSessionMenu