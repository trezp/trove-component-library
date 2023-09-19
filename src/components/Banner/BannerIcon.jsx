import { BsFillCheckCircleFill, BsFillInfoCircleFill, BsFillExclamationTriangleFill, BsFillXCircleFill } from 'react-icons/bs';

export default function BannerIcon({ bannerStatus = "neutral" }){
    let icon; 

    switch(bannerStatus){
      case "neutral":
        icon = <BsFillInfoCircleFill className={`status ${bannerStatus}`}/>
        break;j
      case "success":
        icon = <BsFillCheckCircleFill className={`status ${bannerStatus}`}/>
        break;
      case "warning":
        icon = <BsFillExclamationTriangleFill className={`status ${bannerStatus}`}/>;
        break;
      case "error":
        icon =  <BsFillXCircleFill className={`status ${bannerStatus}`}/>
        break;
    }
    return icon;
}