import type { Meta, StoryObj } from "@storybook/nextjs";

import Button from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const DefaultOutline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Orange: Story = {
  args: {
    children: "Button",
    color: "orange",
  },
};

export const OrangeOutline: Story = {
  args: {
    children: "Button",
    color: "orange",
    variant: "outline",
  },
};

export const BlueDark: Story = {
  args: {
    children: "Button",
    color: "blueDark",
  },
};

export const BlueDarkOutline: Story = {
  args: {
    children: "Button",
    color: "blueDark",
    variant: "outline",
  },
};

export const Black: Story = {
  args: {
    children: "Button",
    color: "black",
  },
};

export const BlackOutline: Story = {
  args: {
    children: "Button",
    color: "black",
    variant: "outline",
  },
};
