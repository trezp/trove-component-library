import propTypes from "prop-types";

import "./Banner.css";
import { BsFillCheckCircleFill, BsFillInfoCircleFill, BsFillExclamationTriangleFill, BsFillXCircleFill } from 'react-icons/bs';

export default function Banner({ children, status = "neutral", title = "Attention" }){
  function statusIcon(){ 
    switch(status){
      case "neutral":
        return <BsFillInfoCircleFill className={`status ${status}`}/>
      case "success":
        return <BsFillCheckCircleFill className={`status ${status}`}/>
      case "warning":
        return <BsFillExclamationTriangleFill className={`status ${status}`}/>;
      case "error":
        return <BsFillXCircleFill className={`status ${status}`}/>
    }
  }

  const bannerColors = {
    "neutral": {
      color: "#1E40AF",
      background: "#EFF6FF"
    }, 
    "success": {
      color: "#065F46",
      background: "#ECFDF5"
    }, 
    "error": {
      color: "#B45309",
      background: "#FEF2F2"
    }, 
    "warning": {
      color: "#B45309",
      background: "#FFFBEB"
    }, 

  }
  function getBannerColors(bannerColors, status){
    return {
      "backgroundColor": bannerColors[status].background,
      "color": bannerColors[status].color
    }
  }
  return (
    <div className="banner-container" style={getBannerColors(bannerColors, status)}>
      {statusIcon()}
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