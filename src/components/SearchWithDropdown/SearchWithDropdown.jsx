/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { DropdownDefault } from "../DropdownDefault";
import { SearchInput } from "../SearchInput";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const SearchWithDropdown = ({
  device,
  className,
  dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--43.svg",
  dropdownDefaultHintText,
  dropdownDefaultText = "Select [label]",
  dropdownDefaultLabel,
  searchInputPreferredHint,
  searchInputDdsFormStyleDdsFormStyleClassName,
  searchInputLeadingIconWebIconsSearchUnion = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-20.svg",
  searchInputLabel,
  searchInput = (
    <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-19.svg" />
  ),
  searchInputText = "Hint text (optional)",
  searchInputSearchButtonUsage,
}) => {
  return (
    <div className={`search-with-dropdown device-4-${device} ${className}`}>
      <DropdownDefault
        atomsDropdowIconsAtomsDropdowIconsClassName={`${device === "mobile" ? "class-28" : "class-29"}`}
        atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand={
          dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand
        }
        className={`${device === "mobile" ? "class-26" : "class-27"}`}
        complete={false}
        hintSelectionClassName={`${device === "desktop" && "class-25"}`}
        hintText={dropdownDefaultHintText}
        label={dropdownDefaultLabel}
        leftLabel={false}
        optionalText={false}
        size="forty-px"
        state="default"
        text={dropdownDefaultText}
        text1="Hint text goes here."
      />
      <SearchInput
        DDSFormStyleDdsFormStyleClassName={searchInputDdsFormStyleDdsFormStyleClassName}
        className={`${device === "mobile" ? "class-26" : "class-30"}`}
        complete={false}
        device={device === "mobile" ? "mobile" : "desktop"}
        label={searchInputLabel}
        leadingIconWebIconsSearchUnion={searchInputLeadingIconWebIconsSearchUnion}
        override={searchInput}
        preferredHint={searchInputPreferredHint}
        searchButtonButtonIconButtonState={device === "desktop" ? "active" : undefined}
        searchButtonUsage={searchInputSearchButtonUsage}
        state="default"
        text={searchInputText}
      />
    </div>
  );
};

SearchWithDropdown.propTypes = {
  device: PropTypes.oneOf(["desktop", "mobile"]),
  dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand: PropTypes.string,
  dropdownDefaultHintText: PropTypes.bool,
  dropdownDefaultText: PropTypes.string,
  dropdownDefaultLabel: PropTypes.bool,
  searchInputPreferredHint: PropTypes.bool,
  searchInputLeadingIconWebIconsSearchUnion: PropTypes.string,
  searchInputLabel: PropTypes.bool,
  searchInputText: PropTypes.string,
  searchInputSearchButtonUsage: PropTypes.string,
};
