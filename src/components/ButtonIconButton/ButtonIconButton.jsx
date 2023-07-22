/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonNoText } from "../ButtonNoText";
import { WebIconsClose } from "../WebIconsClose";
import "./style.css";

export const ButtonIconButton = ({
  style,
  onDark,
  state,
  size,
  buttonNoText = (
    <WebIconsClose union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-113.svg" />
  ),
  className,
  loadClassName,
  union = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-91.svg",
}) => {
  return (
    <div className={`button-icon-button on-dark-${onDark} state-2-${state} size-25-${size} ${style} ${className}`}>
      {((size === "forty-px-default-size" && state === "active-focus") ||
        (size === "forty-px-default-size" && state === "active") ||
        (size === "forty-px-default-size" && state === "disabled") ||
        (size === "forty-px-default-size" && state === "selected-focus") ||
        (size === "forty-px-default-size" && state === "selected")) && (
        <ButtonNoText
          className={`${
            state === "active" && style === "primary" && !onDark
              ? "class-9"
              : state === "selected"
              ? "class-10"
              : style === "primary" && state === "active-focus" && !onDark
              ? "class-11"
              : state === "selected-focus"
              ? "class-12"
              : style === "primary" && state === "disabled" && !onDark
              ? "class-13"
              : style === "primary" && state === "disabled" && onDark
              ? "class-14"
              : state === "active" && (onDark || style === "secondary") && (!onDark || style === "primary")
              ? "class-15"
              : style === "primary" && state === "active-focus" && onDark
              ? "class-16"
              : style === "secondary" && state === "active-focus" && !onDark
              ? "class-17"
              : style === "link" && state === "active-focus" && !onDark
              ? "class-18"
              : style === "secondary" && state === "disabled" && !onDark
              ? "class-19"
              : onDark && state === "active-focus" && ["link", "secondary"].includes(style)
              ? "class-20"
              : style === "secondary" && state === "disabled" && onDark
              ? "class-21"
              : "class-22"
          }`}
          iconClassName={`${
            !onDark && style === "secondary" && ["active-focus", "active"].includes(state) && "class-23"
          } ${onDark && style === "secondary" && ["active-focus", "active"].includes(state) && "class-24"}`}
          override={buttonNoText}
        />
      )}

      {(size === "thirty-two-px" ||
        size === "twenty-four-px" ||
        (size === "forty-px-default-size" && state === "loading")) && (
        <div className="spinner-wrapper">
          <div className="spinner">
            <div className="indicator">
              <img
                className={`load ${loadClassName}`}
                alt="Load"
                src={
                  size === "forty-px-default-size" && !onDark
                    ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/load---25--18.svg"
                    : size === "thirty-two-px" && state === "loading" && !onDark
                    ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/load---25--16.svg"
                    : state === "loading" && size === "twenty-four-px" && !onDark
                    ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/load---25--15.svg"
                    : state === "disabled" && !onDark
                    ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-94.svg"
                    : (!onDark && state === "active-focus" && style === "link") ||
                      (!onDark && state === "active-focus" && style === "secondary") ||
                      (!onDark && state === "active" && style === "link") ||
                      (!onDark && state === "active" && style === "secondary") ||
                      (onDark && state === "active-focus" && style === "primary") ||
                      (onDark && state === "active" && style === "primary") ||
                      (onDark && state === "disabled" && style === "primary")
                    ? union
                    : size === "forty-px-default-size" && onDark
                    ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/load---25--14.svg"
                    : size === "thirty-two-px" && state === "loading" && onDark
                    ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/load---25--13.svg"
                    : state === "loading" && size === "twenty-four-px" && onDark
                    ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/load---25--12.svg"
                    : onDark && state === "disabled" && ["link", "secondary"].includes(style)
                    ? "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-51.svg"
                    : "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-110.svg"
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ButtonIconButton.propTypes = {
  style: PropTypes.oneOf(["primary", "link", "secondary"]),
  onDark: PropTypes.bool,
  state: PropTypes.oneOf(["active", "active-focus", "selected", "selected-focus", "loading", "disabled"]),
  size: PropTypes.oneOf(["thirty-two-px", "forty-px-default-size", "twenty-four-px"]),
  union: PropTypes.string,
};
