import asset from "./../../../assets/images/logo-white.png"
import "./index.css"

const WireframeCover = ({ label }) => {
  return (
    <div className="wireframe-cover">
      <img className="wireframe-cover__img" src={asset} alt="wireframe cover visual" aria-hidden />
      <span className="wireframe-cover__label">{label}</span>
    </div>
  )
}

export default WireframeCover