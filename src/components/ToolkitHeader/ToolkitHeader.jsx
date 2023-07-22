/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DropdownMenuItem } from "../DropdownMenuItem";
import { MenuItemToolkit } from "../MenuItemToolkit";
import { NotificationAlert } from "../NotificationAlert";
import { WebIconsAccount } from "../WebIconsAccount";
import { WebIconsHelpAnd } from "../WebIconsHelpAnd";
import { WebIconsHome } from "../WebIconsHome";
import "./style.css";

export const ToolkitHeader = ({
  notifications,
  helpAndSupport,
  toolsSingle,
  home,
  profile,
  toolsMulti,
  className,
  visible = true,
  hasToolsContainer = true,
  hasHelpAndSupport = true,
  hasNotifications = true,
  profileContainerClassName,
  dropdownMenuItem = (
    <WebIconsAccount union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-42.svg" />
  ),
  dropdownMenuItemWebIconsExpandWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--small--6.svg",
}) => {
  return (
    <div className={`toolkit-header ${className}`}>
      <div className="div">
        <div className="home-container">
          {visible && (
            <MenuItemToolkit
              device="desktop"
              label={false}
              override={
                <WebIconsHome
                  className="web-icons-home-instance"
                  webIconsHome="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-home-1.svg"
                />
              }
              state="default"
            />
          )}
        </div>
        {hasToolsContainer && (
          <div className="tools-container">
            <DropdownMenuItem
              device="desktop"
              icon={false}
              state="default"
              text="Tools"
              webIconsExpandWebIconsExpand="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--small--7.svg"
            />
          </div>
        )}
      </div>
      <div className="div">
        {hasHelpAndSupport && (
          <div className="help-and-support">
            <MenuItemToolkit
              device="desktop"
              override={
                <WebIconsHelpAnd union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-43.svg" />
              }
              state="default"
              text="Help and support"
            />
          </div>
        )}

        {hasNotifications && (
          <div className="notifications">
            <MenuItemToolkit
              device="desktop"
              override={<NotificationAlert className="notification-alert-instance" text="2" />}
              state="default"
              text="Notifications"
            />
          </div>
        )}

        <div className={`profile-container ${profileContainerClassName}`}>
          <DropdownMenuItem
            device="desktop"
            override={dropdownMenuItem}
            state="default"
            text="Profile"
            webIconsExpandWebIconsExpand={dropdownMenuItemWebIconsExpandWebIconsExpand}
          />
        </div>
      </div>
    </div>
  );
};

ToolkitHeader.propTypes = {
  notifications: PropTypes.bool,
  helpAndSupport: PropTypes.bool,
  toolsSingle: PropTypes.bool,
  home: PropTypes.bool,
  profile: PropTypes.bool,
  toolsMulti: PropTypes.bool,
  visible: PropTypes.bool,
  hasToolsContainer: PropTypes.bool,
  hasHelpAndSupport: PropTypes.bool,
  hasNotifications: PropTypes.bool,
  dropdownMenuItemWebIconsExpandWebIconsExpand: PropTypes.string,
};
