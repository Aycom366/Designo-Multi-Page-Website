import React from "react";
import { useGlobalContext } from "../context";

const OverLay = () => {
  const { openNavLinks } = useGlobalContext();
  return (
    <div className={`${openNavLinks ? "overlay overlay-active" : "overlay"}`}>
      overlay
    </div>
  );
};

export default OverLay;
