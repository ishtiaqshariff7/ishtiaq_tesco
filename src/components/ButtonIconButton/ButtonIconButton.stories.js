import { ButtonIconButton } from ".";

export default {
  title: "Components/ButtonIconButton",
  component: ButtonIconButton,
  argTypes: {
    style: {
      options: ["primary", "link", "secondary"],
      control: { type: "select" },
    },
    state: {
      options: ["active", "active-focus", "selected", "selected-focus", "loading", "disabled"],
      control: { type: "select" },
    },
    size: {
      options: ["thirty-two-px", "forty-px-default-size", "twenty-four-px"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "primary",
    onDark: true,
    state: "active",
    size: "thirty-two-px",
    className: {},
    loadClassName: {},
    union: "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/union-91.svg",
  },
};
