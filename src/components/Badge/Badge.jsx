import PropTypes from "prop-types";
import colorSchemes from "./colorSchemes";
import "./Badge.css";

export default function Badge({children, color = "gray", type = "square"}){
  return (
      <div 
        className={`badge ${type}`}
        style={colorSchemes[color]}>
          {children}
      </div>
    )
}

Badge.propTypes = {
  children: PropTypes.any, 
  color: PropTypes.string,
  type: PropTypes.string
};
