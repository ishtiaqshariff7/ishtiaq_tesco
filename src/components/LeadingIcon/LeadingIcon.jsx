/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonIconButton } from "../ButtonIconButton";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const LeadingIcon = ({
  chooseIcon,
  className,
  webIconsSearchUnion = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-45.svg",
}) => {
  return (
    <div className={`leading-icon ${className}`}>
      {chooseIcon === "search" && <WebIconsSearch union={webIconsSearchUnion} />}

      {chooseIcon === "back" && (
        <div className="structure-don-t-copy-wrapper">
          <div className="structure-don-t-copy">
            <div className="icon">
              <img
                className="web-icons-backward"
                alt="Web icons backward"
                src="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-backward-24px--small--6.svg"
              />
            </div>
          </div>
        </div>
      )}

      {chooseIcon === "location" && (
        <ButtonIconButton
          className="button-icon-button-instance"
          loadClassName="button-icon-button-2"
          onDark={false}
          size="twenty-four-px"
          state="active"
          style="link"
          union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-44.svg"
        />
      )}
    </div>
  );
};

LeadingIcon.propTypes = {
  chooseIcon: PropTypes.oneOf(["search", "location", "back"]),
  webIconsSearchUnion: PropTypes.string,
};
