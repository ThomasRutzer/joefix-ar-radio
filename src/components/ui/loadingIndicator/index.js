import "./index.css"

const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <div className="loading-indicator__container">
      <div className="loading-indicator__blood" />
        <div className="loading-indicator__logo" />
      </div>
      <span className="loading-indicator__drop"></span>
      <span className="loading-indicator__fill"></span>
    </div>
  )
}

export default LoadingIndicator