import React, { useEffect, useState } from "react";

import useDebounce from "./useDebounce";

const useResize = () => {
  const [state, setState] = useState();

  useEffect(() => {
    onResizeHandler();
    setup();
    return () => {
      cleanUp();
    };
  }, []);

  const onResizeHandler = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;
    console.log("innerwidth:: ", window.innerWidth);
    console.log("isMobile:: ", isMobile);
    setState({ isMobile, isTablet, isDesktop });
  };

  const debouncedFn = useDebounce(onResizeHandler, 400);

  const setup = () => {
    window.addEventListener("resize", debouncedFn, false);
  };

  const cleanUp = () => {
    window.removeEventListener("resize", debouncedFn, false);
  };

  return state;
};

export default useResize;
