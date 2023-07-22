import { LocalNavigation } from ".";

export default {
  title: "Components/LocalNavigation",
  component: LocalNavigation,
  argTypes: {
    type: {
      options: ["dropdown", "default"],
      control: { type: "select" },
    },
    state: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "dropdown",
    state: "selected",
    className: {},
    webIconsExpandWrapperWebIconsExpand:
      "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-expand-24px--default--45.svg",
    webIconsContract:
      "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/web-icons-contract-24px--default-.svg",
    text: "Menu",
  },
};
