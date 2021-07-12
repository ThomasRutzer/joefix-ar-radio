import "./index.css"
import WireframeCover from "../wireframeCover"

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      {<WireframeCover label={"Preparing…"} appearance="small" />}
    </div>
  )
}

export default LoadingIndicator