/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const SearchButton = ({
  usage,
  className,
  buttonIconButtonButtonNoText = (
    <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-170.svg" />
  ),
  buttonIconButtonState = "active",
}) => {
  return (
    <div className={`search-button ${className}`}>
      {["global-2", "inline"].includes(usage) && (
        <div className="button-label-only">
          <div className={`structure-don-t-copy-2 ${usage}`}>
            <div className="text-i-wrapper">
              <div className="text">Search</div>
            </div>
          </div>
        </div>
      )}

      {usage === "global-1" && (
        <ButtonIconButton
          buttonNoText={buttonIconButtonButtonNoText}
          onDark={false}
          size="forty-px-default-size"
          state={buttonIconButtonState}
          style="primary"
        />
      )}
    </div>
  );
};

SearchButton.propTypes = {
  usage: PropTypes.oneOf(["global-1", "inline", "global-2"]),
  buttonIconButtonState: PropTypes.string,
};
