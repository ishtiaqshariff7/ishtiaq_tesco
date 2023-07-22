/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AtomsDropdowIcons } from "../AtomsDropdowIcons";
import "./style.css";

export const DropdownDefault = ({
  hintText = true,
  optionalText = true,
  label = true,
  complete,
  leftLabel,
  state,
  size,
  className,
  hintSelectionClassName,
  text = "Select [label]",
  atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--41.svg",
  atomsDropdowIconsAtomsDropdowIconsClassName,
  text1 = "Hint text goes here. Delete as necessary",
}) => {
  return (
    <div className={`dropdown-default ${className}`}>
      {leftLabel && (
        <div className={`field ${size}`}>
          <div className="label-container">
            <div className={`label-7 state-4-${state}`}>Label</div>
          </div>
          <div className="field-container">
            {["default", "disabled", "focus"].includes(state) && (
              <div className={`field-2 state-2-${state} size-1-${size}`}>
                {state === "default" && (
                  <>
                    <div className="hint-selection">
                      {!complete && <>{text}</>}

                      {complete && <>Selected [options]</>}
                    </div>
                    <AtomsDropdowIcons
                      className={`${size === "forty-px" ? "class-3" : "class-4"}`}
                      webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--41.svg"
                    />
                  </>
                )}

                {["disabled", "focus"].includes(state) && (
                  <div className="overlap">
                    <div className="DDS-form-style-focus">
                      <div className="overlap_group">
                        {state === "focus" && (
                          <>
                            <div className="field-3" />
                            <div className="field-4" />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="hint-selection-2">
                      {!complete && <>{text}</>}

                      {complete && <>Selected [options]</>}
                    </div>
                    <AtomsDropdowIcons
                      className={`${size === "forty-px" ? "class-5" : "class-6"}`}
                      webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--41.svg"
                    />
                  </div>
                )}
              </div>
            )}

            {["error-focus", "error"].includes(state) && (
              <>
                <div className="overlap-wrapper">
                  <div className="overlap-2">
                    <div className="DDS-form-style-error">
                      <div className={`overlap_group state-7-${state} size-12-${size}`}>
                        {state === "error-focus" && (
                          <>
                            <div className="field-5" />
                            <div className="field-6" />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="hint-selection-3">
                      {!complete && <>{text}</>}

                      {complete && <>Selected [options]</>}
                    </div>
                    <AtomsDropdowIcons
                      className={`${size === "forty-px" ? "class-5" : "class-6"}`}
                      webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--41.svg"
                    />
                  </div>
                </div>
                <p className="error-text">Error text. Delete as necessary</p>
              </>
            )}
          </div>
        </div>
      )}

      {((!complete && !leftLabel && state === "disabled") ||
        (!leftLabel && state === "default") ||
        (!leftLabel && state === "error-focus") ||
        (!leftLabel && state === "error") ||
        (!leftLabel && state === "focus")) && (
        <>
          <>
            {label && (
              <div className={`label-8 state-8-${state} complete-${complete} size-16-${size}`}>
                {label && <div className="label-9">Label. Delete as necessary</div>}

                {optionalText && <div className="optional-mark">(optional)</div>}
              </div>
            )}
          </>
        </>
      )}

      {complete && state === "disabled" && !leftLabel && (
        <div className="label-10">
          {label && <div className="label-11">Label. Delete as necessary</div>}

          {optionalText && <div className="optional-mark-2">(optional)</div>}
        </div>
      )}

      {!leftLabel && (
        <>
          <>{hintText && <p className="hint">{text1}</p>}</>
          <div className="field-wrapper">
            <div className={`field-7 state-3-${state} size-17-${size}`}>
              {["disabled", "error-focus", "error", "focus"].includes(state) && (
                <div className="overlap-group-2">
                  <div className="DDS-form-style-2">
                    <div className="field-13">
                      {["error-focus", "focus"].includes(state) && (
                        <>
                          <div className="field-8" />
                          <div className="field-9" />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="hint-selection-4">
                    {complete && <>Selected [options]</>}

                    {!complete && <>{text}</>}
                  </div>
                  <AtomsDropdowIcons
                    className={`${size === "thirty-two-px" ? "class-7" : "class-8"}`}
                    webIconsExpandWrapperWebIconsExpand="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--41.svg"
                  />
                </div>
              )}

              {state === "default" && (
                <>
                  <div className={`hint-selection-5 ${hintSelectionClassName}`}>
                    {!complete && <>{text}</>}

                    {complete && <>Selected [options]</>}
                  </div>
                  <AtomsDropdowIcons
                    className={atomsDropdowIconsAtomsDropdowIconsClassName}
                    webIconsExpandWrapperWebIconsExpand={atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand}
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}

      {!leftLabel && ["error-focus", "error"].includes(state) && (
        <div className="error-container">
          <p className="p">Error text. Delete as necessary</p>
        </div>
      )}
    </div>
  );
};

DropdownDefault.propTypes = {
  hintText: PropTypes.bool,
  optionalText: PropTypes.bool,
  label: PropTypes.bool,
  complete: PropTypes.bool,
  leftLabel: PropTypes.bool,
  state: PropTypes.oneOf(["default", "focus", "error-focus", "error", "disabled"]),
  size: PropTypes.oneOf(["thirty-two-px", "forty-px"]),
  text: PropTypes.string,
  atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand: PropTypes.string,
  text1: PropTypes.string,
};
