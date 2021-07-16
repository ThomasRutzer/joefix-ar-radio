import useStore from "../../store"
import WireframeCover from "./wireframeCover"

const FocusHint = () => {
  const arEngineReady = useStore(state => state.arEngineReady)
  const sceneEntered = useStore(store => store.sceneEntered)

  return (
    <>
      {!sceneEntered &&
        <div className="focus-hint">
          <WireframeCover label={arEngineReady ? "Focus EP cover" : "Preparing…"} />
        </div>
      }
    </>
  )
}

export default FocusHint