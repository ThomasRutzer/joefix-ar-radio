import { useTransition, animated, config } from "@react-spring/web"

import useStore from "./../../../store"
import "./index.css"

const ARSessionMenu = () => {
  const mute = useStore(state => state.mute)
  const arEngineReady = useStore(state => state.arEngineReady)

  const labelTransitions = useTransition(arEngineReady, {
    from: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0 },
    delay: 300,
    config: config.molasses
  })

  return (
    <>
      {labelTransitions(
        (styles, item) => item &&
          <animated.div className="ar-session-menu" style={styles}>
            <button onClick={() => window.location.reload()}>Go back</button>
            <button onClick={() => useStore.setState({ mute: !mute })}>
              {mute ? "unmute" : "mute"}
            </button>
          </animated.div>
      )}
    </>
  )
}

export default ARSessionMenu