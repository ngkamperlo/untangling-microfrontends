import React, { useEffect, useRef } from "react";
//@ts-ignore
import { mount } from "vuemfe/VueMFE";

const VueMFE = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default VueMFE;
