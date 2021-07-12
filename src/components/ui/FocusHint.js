import useStore from "../../store"
import WireframeCover from "./wireframeCover"

const FocusHint = () => {
  const sceneEntered = useStore(state => state.sceneEntered)

  return (
    <>
      {!sceneEntered && 
        <div className="focus-hint">
          <WireframeCover label="Focus EP cover" />
        </div> 
      } 
    </>
  )
}

export default FocusHint