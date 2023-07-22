/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsExpandWrapper } from "../WebIconsExpandWrapper";
import "./style.css";

export const LocalNavigation = ({
  type,
  state,
  className,
  webIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--45.svg",
  webIconsContract = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-contract-24px--default-.svg",
  text = "Menu",
}) => {
  return (
    <div className={`local-navigation state-23-${state} type-${type} ${className}`}>
      {type === "default" && (
        <div className="label-14">
          <div className="text-4">Menu item</div>
        </div>
      )}

      {state === "default" && type === "dropdown" && (
        <>
          <div className="text-5">{text}</div>
          <WebIconsExpandWrapper
            className="web-icons-expand-instance"
            webIconsExpand={webIconsExpandWrapperWebIconsExpand}
          />
        </>
      )}

      {type === "dropdown" && state === "selected" && (
        <>
          <div className="text-6">{text}</div>
          <img className="web-icons-contract-2" alt="Web icons contract" src={webIconsContract} />
        </>
      )}
    </div>
  );
};

LocalNavigation.propTypes = {
  type: PropTypes.oneOf(["dropdown", "default"]),
  state: PropTypes.oneOf(["selected", "default"]),
  webIconsExpandWrapperWebIconsExpand: PropTypes.string,
  webIconsContract: PropTypes.string,
  text: PropTypes.string,
};
