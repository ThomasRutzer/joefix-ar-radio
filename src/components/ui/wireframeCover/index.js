import asset from "./../../../assets/images/focus-marker.png"
import "./index.css"

const WireframeCover = ({ appearance, label }) => {
  return (
    <div className={`wireframe-cover ${appearance === "small" ? "wireframe-cover--small" : ""}`}>
      <img className="wireframe-cover__img" src={asset} alt="wireframe cover visual" aria-hidden />
      <span className="wireframe-cover__label">{label}</span>
    </div>
  )
}

export default WireframeCover