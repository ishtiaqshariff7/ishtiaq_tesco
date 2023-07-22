/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WebIconsStore } from "../WebIconsStore";
import "./style.css";

export const MenuItemGlobal = ({
  icon = true,
  type,
  state,
  className,
  text = "Menu label",
  override = (
    <WebIconsStore union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-281.svg" />
  ),
  flagsFlagGreatClassName,
  flagsFlagGreat = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/flags-flag---great-britain-1.svg",
  labelClassName,
}) => {
  return (
    <div className={`menu-item-global ${className}`}>
      <div className={`icon-and-label-3 ${type}`}>
        {type === "label" && (
          <>
            <>{icon && <>{override}</>}</>
            <div className={`label-3 state-1-${state} ${labelClassName}`}>
              <div className="label-4">{text}</div>
            </div>
          </>
        )}

        {type === "flag" && (
          <>
            <img
              className={`flags-flag-great ${flagsFlagGreatClassName}`}
              alt="Flags flag great"
              src={
                state === "focus"
                  ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/flags-flag---great-britain.svg"
                  : flagsFlagGreat
              }
            />
            <div className={`label-5 ${labelClassName}`}>
              <div className={`label-6 state-3-${state}`}>{text}</div>
            </div>
          </>
        )}
      </div>
      <div className="border-left" />
    </div>
  );
};

MenuItemGlobal.propTypes = {
  icon: PropTypes.bool,
  type: PropTypes.oneOf(["label", "flag"]),
  state: PropTypes.oneOf(["focus", "default"]),
  text: PropTypes.string,
  flagsFlagGreat: PropTypes.string,
};
