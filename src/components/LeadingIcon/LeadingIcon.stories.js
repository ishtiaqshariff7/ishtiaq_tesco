import { LeadingIcon } from ".";

export default {
  title: "Components/LeadingIcon",
  component: LeadingIcon,
  argTypes: {
    chooseIcon: {
      options: ["search", "location", "back"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    chooseIcon: "search",
    className: {},
    webIconsSearchUnion:
      "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-45.svg",
  },
};
