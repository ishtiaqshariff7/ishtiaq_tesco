/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NotificationAlert = ({ text = "2", className }) => {
  return (
    <div className={`notification-alert ${className}`}>
      <div className="notifications-icon">
        <img
          className="notifications-icon-2"
          alt="Notifications icon"
          src="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/notifications-icon-1.svg"
        />
      </div>
      <div className="alert-badge">
        <div className="notification-amount">{text}</div>
      </div>
    </div>
  );
};

NotificationAlert.propTypes = {
  text: PropTypes.string,
};
