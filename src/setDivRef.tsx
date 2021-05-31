import React from "react";
import { createRef, useEffect } from "react";

const setDivRef = (scriptHTML: any, scriptSRC: string): any => {
  const ref: { current: HTMLDivElement | null } = createRef();

  useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = scriptSRC;
      script.async = true;
      script.type = "text/javascript";
      script.innerHTML = JSON.stringify(scriptHTML);
      ref.current.appendChild(script);
      refValue = ref.current;
    }
    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    };
  }, [ref, scriptHTML]);
  return <div ref={ref} />;
};

export default setDivRef;
