import { DropdownMenuItem } from ".";

export default {
  title: "Components/DropdownMenuItem",
  component: DropdownMenuItem,
  argTypes: {
    state: {
      options: ["active", "focus", "default"],
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
    icon: true,
    label: true,
    state: "active",
    device: "desktop",
    text: "Menu label",
    webIconsExpandWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--small--5.svg",
  },
};
