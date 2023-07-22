/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const WebIconsAccount = ({
  union = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-35.svg",
}) => {
  return (
    <div className="web-icons-account">
      <img className="union" alt="Union" src={union} />
    </div>
  );
};

WebIconsAccount.propTypes = {
  union: PropTypes.string,
};
