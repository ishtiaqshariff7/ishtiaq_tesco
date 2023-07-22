/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { WebIconsClose } from "../WebIconsClose";
import "./style.css";

export const ButtonNoText = ({
  className,
  override = (
    <WebIconsClose union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-113.svg" />
  ),
  iconClassName,
}) => {
  return (
    <div className={`button-no-text ${className}`}>
      <div className={`web-icons-close-wrapper ${iconClassName}`}>{override}</div>
    </div>
  );
};
