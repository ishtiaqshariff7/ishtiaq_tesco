/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { WebIconsBasket } from "../WebIconsBasket";
import "./style.css";

export const GlobalHeaderElementsBasket = ({
  items = "0 items",
  total = "£94.60",
  state,
  className,
  buttonIconButtonButtonNoText = (
    <WebIconsBasket union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-23.svg" />
  ),
}) => {
  return (
    <div className={`global-header-elements-basket ${state} ${className}`}>
      <div className="container-3">
        {state === "items-loading" && (
          <div className="loading-spinner-with">
            <div className="loading-spinner-icon">
              <div className="indicator-wrapper">
                <div className="load-wrapper">
                  <img
                    className="load-2"
                    alt="Load"
                    src="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/load---25-.svg"
                  />
                </div>
              </div>
            </div>
            <div className="div-5">
              <div className="label-13">Adding</div>
            </div>
          </div>
        )}

        {["items-added", "no-items-added"].includes(state) && (
          <>
            <ButtonIconButton
              buttonNoText={buttonIconButtonButtonNoText}
              onDark={false}
              size="forty-px-default-size"
              state="active"
              style="primary"
            />
            <div className="div-5">
              {state === "items-added" && (
                <>
                  <div className="text-2">{total}</div>
                  <div className="guide-price">Guide price</div>
                </>
              )}

              {state === "no-items-added" && <div className="text-3">{items}</div>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

GlobalHeaderElementsBasket.propTypes = {
  items: PropTypes.string,
  total: PropTypes.string,
  state: PropTypes.oneOf(["items-added", "items-loading", "no-items-added"]),
};
