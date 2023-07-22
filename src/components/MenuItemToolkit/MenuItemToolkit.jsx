/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsStore } from "../WebIconsStore";
import "./style.css";

export const MenuItemToolkit = ({
  icon = true,
  borderRight = true,
  label = true,
  borderLeft = true,
  state,
  device,
  override = (
    <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-41.svg" />
  ),
  text = "Menu label",
}) => {
  return (
    <div className={`menu-item-toolkit state-0-${state}`}>
      <div className={`icon-and-label-2 device-${device}`}>
        {icon && <>{override}</>}

        {label && (
          <div className="div-wrapper">
            <div className="label-2">{text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

MenuItemToolkit.propTypes = {
  icon: PropTypes.bool,
  borderRight: PropTypes.bool,
  label: PropTypes.bool,
  borderLeft: PropTypes.bool,
  state: PropTypes.oneOf(["active", "focus", "default"]),
  device: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
};
