import React from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {       
    const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    var userAgent = navigator.userAgent;
    const mobile = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0 || 
      "msMaxTouchPoints" in navigator && navigator.msMaxTouchPoints > 0 || 
      mQ && mQ.media === "(pointer:coarse)" && !!mQ.matches || 
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(userAgent) || 
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(userAgent) ? 
      true : false ;

    //de esta manera reconoce todos los dispositivos con touch como moviles

    setMobile(mobile);
  }, []);

  return { isMobile };
}