import { useEffect } from "react";

function ScrollToTopDesign({ location }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default ScrollToTopDesign;
