import propTypes from "prop-types";

import "./Banner.css";
import BannerIcon from "./BannerIcon";
import getBannerColors from "./bannerColors";

export default function Banner({ children, status = "neutral", title = "Attention" }){
  return (
    <div className="banner-container" style={getBannerColors(status)}>
      <BannerIcon bannerStatus={status}/>
      <div className="banner-content">
        <p>{title}</p>
        <p>{children}</p>
      </div>
    </div>
  )
}

Banner.propTypes = {
  children: propTypes.any,
  status: propTypes.string,
  title: propTypes.string,
  color: propTypes.string
}