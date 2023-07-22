/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const WebIconsSearch = ({
  union = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-46.svg",
}) => {
  return (
    <div className="web-icons-search">
      <img className="union-4" alt="Union" src={union} />
    </div>
  );
};

WebIconsSearch.propTypes = {
  union: PropTypes.string,
};
