import React, { useEffect } from "react";
//@ts-ignore
import { mount } from "angularmfe/AngularMFE";

const AngularMFE = () => {
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="angular-mfe">
      {/* 
      //@ts-ignore */}
      <app-root></app-root>
    </div>
  );
};

export default AngularMFE;
