
export default function getBannerColors(status){
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
  return {
    "backgroundColor": bannerColors[status].background,
    "color": bannerColors[status].color
  }
}