/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const WebIconsExpand = ({
  className,
  webIconsExpand = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--small--1.svg",
}) => {
  return <img className={`web-icons-expand ${className}`} alt="Web icons expand" src={webIconsExpand} />;
};

WebIconsExpand.propTypes = {
  webIconsExpand: PropTypes.string,
};
