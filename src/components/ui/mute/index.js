import "./index.css"
import useStore from "./../../../store"

const barsCount = 5

const Mute = props => {
  const mute = useStore(state => state.mute)

  return (
    <button
      className={`mute ${mute ? "mute--on" : "mute--off"}`}
      title="mute all audio"
      onClick={() => useStore.setState({ mute: !mute })}
      {...props}>
      {
        [...Array(barsCount).keys()]
          .map(index => (
            <span   
              key={index} 
              className={`mute__bar mute__bar--${index}`}>
              </span>
          ))
      }
    </button>
  )
}

export default Mute