import propTypes from "prop-types";
import "./Banner.css";

export default function Banner({ children }){
  return (
    <>
      {children}
    </>
  )
}

Banner.propTypes = {
  children: propTypes.any
}