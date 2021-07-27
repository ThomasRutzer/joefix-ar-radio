import { animated, useTrail } from "@react-spring/web"

import "./index.css"
import useStore from "./../../../store"

const barsCount = 5

const Mute = props => {
  const mute = useStore(state => state.mute)

  const trail = useTrail(
    barsCount,
    {
      to: { scaleY: mute ? 0.3 : 1 },
      from: { scaleY: 0.3 },
      loop: { reverse: true }
    }
  )

  return (
    <button
      className="mute"
      title="mute all audio"
      onClick={() => useStore.setState({ mute: !mute })}
      {...props}>
      {trail
        .map((styles, index) => (
          <animated.span key={index} className="mute__bar" style={styles}></animated.span>
        ))}
    </button>
  )
}

export default Mute