import type { Meta, StoryObj } from '@storybook/nextjs';

import { Toast } from './index';

const meta = {
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'success',
    message: 'Toast de sucesso.',
    onClose: () => {},
  },
};

export const ErrorToast: Story = {
  args: {
    type: "error",
    message: "Toast de erro.",
    onClose: () => {},
  },
};

export const WarningToast: Story = {
  args: {
    type: "warning",
    message: "Toast de cuidado.",
    onClose: () => {},
  },
};