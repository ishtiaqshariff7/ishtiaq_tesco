/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GlobalHeaderElementsBasket } from "../GlobalHeaderElementsBasket";
import { SearchWithDropdown } from "../SearchWithDropdown";
import { WebIconsBasket } from "../WebIconsBasket";
import { WebIconsSearch } from "../WebIconsSearch";
import "./style.css";

export const GlobalHeaderElementsSearchWithDropdown756PxAndAbove = ({
  basket = true,
  className,
  searchWithDropdownSearchInputLeadingIconWebIconsSearchUnion = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-174.svg",
  searchWithDropdownDropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand = "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--44.svg",
  searchWithDropdownSearchInput = (
    <WebIconsSearch union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-173.svg" />
  ),
  globalHeaderElementsBasketButtonIconButtonButtonNoText = (
    <WebIconsBasket union="https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-24.svg" />
  ),
}) => {
  return (
    <div className={`global-header-elements-search-with-dropdown-756px-and-above ${className}`}>
      <SearchWithDropdown
        className="search-with-dropdown-instance"
        device="desktop"
        dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand={
          searchWithDropdownDropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand
        }
        dropdownDefaultHintText={false}
        dropdownDefaultLabel={false}
        dropdownDefaultText="Groceries"
        searchInput={searchWithDropdownSearchInput}
        searchInputDdsFormStyleDdsFormStyleClassName="design-component-instance-node"
        searchInputLabel={false}
        searchInputLeadingIconWebIconsSearchUnion={searchWithDropdownSearchInputLeadingIconWebIconsSearchUnion}
        searchInputPreferredHint={false}
        searchInputSearchButtonUsage="global-1"
        searchInputText="Search"
      />
      {basket && <div className="divider-3" />}

      {basket && (
        <GlobalHeaderElementsBasket
          buttonIconButtonButtonNoText={globalHeaderElementsBasketButtonIconButtonButtonNoText}
          className="basket"
          state="items-added"
          total="£94.60"
        />
      )}
    </div>
  );
};

GlobalHeaderElementsSearchWithDropdown756PxAndAbove.propTypes = {
  basket: PropTypes.bool,
  searchWithDropdownSearchInputLeadingIconWebIconsSearchUnion: PropTypes.string,
  searchWithDropdownDropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand: PropTypes.string,
};
