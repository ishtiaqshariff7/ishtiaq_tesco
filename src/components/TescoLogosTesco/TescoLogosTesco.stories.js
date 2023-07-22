import { TescoLogosTesco } from ".";

export default {
  title: "Components/TescoLogosTesco",
  component: TescoLogosTesco,
  argTypes: {
    type: {
      options: [
        "native",
        "lotus-large",
        "lotus-small",
        "bank-native",
        "bank-large",
        "bank-x-small",
        "large-signpost",
        "small",
        "bank-small",
        "medium",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "native",
    typeBankNativeClassName: {},
    fill: "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/fill-3-1.svg",
    text: "Signpost",
    img: "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/fill-1-2.svg",
    fill1: "https://generation-sessions.s3.amazonaws.com/3d34c3acf585c70e0fb5ddc89f792977/img/fill-3-2.svg",
  },
};
