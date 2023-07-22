import { SearchWithDropdown } from ".";

export default {
  title: "Components/SearchWithDropdown",
  component: SearchWithDropdown,
  argTypes: {
    device: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    device: "desktop",
    className: {},
    dropdownDefaultAtomsDropdowIconsWebIconsExpandWrapperWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--43.svg",
    dropdownDefaultHintText: true,
    dropdownDefaultText: "Select [label]",
    dropdownDefaultLabel: true,
    searchInputPreferredHint: true,
    searchInputDdsFormStyleDdsFormStyleClassName: {},
    searchInputLeadingIconWebIconsSearchUnion:
      "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-20.svg",
    searchInputLabel: true,
    searchInputText: "Hint text (optional)",
    searchInputSearchButtonUsage: "abc",
  },
};
