import { DropdownDefault } from ".";

export default {
  title: "Components/DropdownDefault",
  component: DropdownDefault,
  argTypes: {
    state: {
      options: ["default", "focus", "error-focus", "error", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["thirty-two-px", "forty-px"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hintText: true,
    optionalText: true,
    label: true,
    complete: true,
    leftLabel: true,
    state: "default",
    size: "thirty-two-px",
    className: {},
    hintSelectionClassName: {},
    text: "Select [label]",
    atomsDropdowIconsWebIconsExpandWrapperWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--41.svg",
    atomsDropdowIconsAtomsDropdowIconsClassName: {},
    text1: "Hint text goes here. Delete as necessary",
  },
};
