import { SearchInput } from ".";

export default {
  title: "Components/SearchInput",
  component: SearchInput,
  argTypes: {
    state: {
      options: ["active", "default", "focus", "error-focus", "error", "disabled"],
      control: { type: "select" },
    },
    device: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    optionalHint: true,
    scrollbar: false,
    preferredHint: true,
    button: true,
    label: true,
    complete: true,
    state: "active",
    device: "desktop",
    className: {},
    DDSFormStyleDdsFormStyleClassName: {},
    leadingIconWebIconsSearchUnion:
      "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-172.svg",
    text: "Hint text (optional)",
    searchButtonButtonIconButtonState: "abc",
    searchButtonUsage: "global-1",
  },
};
