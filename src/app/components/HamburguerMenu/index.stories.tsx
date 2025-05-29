import type { Meta, StoryObj } from "@storybook/nextjs";

import { HamburgerMenu } from "./index";
import { NAV_LINKS, NAV_LINKS_DASHBOARD } from "@/constants";

const meta = {
  component: HamburgerMenu,
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
} satisfies Meta<typeof HamburgerMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: NAV_LINKS,
  },
};

export const Orange: Story = {
  args: {
    links: NAV_LINKS_DASHBOARD,
    colorVariant: "orange",
  },
};
