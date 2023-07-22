import React from "react";
import { GlobalHeader } from "../../components/GlobalHeader";
import { ToolkitHeader } from "../../components/ToolkitHeader";
import { WebIconsAccount } from "../../components/WebIconsAccount";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="header-wrapper">
        <GlobalHeader
          className="header"
          flyOutMenu={false}
          override={
            <ToolkitHeader
              className="toolkit-header-instance"
              dropdownMenuItem={
                <WebIconsAccount union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-1.svg" />
              }
              dropdownMenuItemWebIconsExpandWebIconsExpand="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--small--7.svg"
              hasHelpAndSupport={false}
              hasNotifications={false}
              hasToolsContainer={false}
              profileContainerClassName="web-icons-account-wrapper"
              visible={false}
            />
          }
          propertyContainerClassName="global-header-px"
          tescoLogosTescoFill="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/fill-3.svg"
          tescoLogosTescoText="Partners toolkit"
          tescoLogosTescoType="large-signpost"
          tescoLogosTescoTypeBankNativeClassName="global-header-1260px"
          visible={false}
          visible1={false}
        />
      </div>
    </div>
  );
};
