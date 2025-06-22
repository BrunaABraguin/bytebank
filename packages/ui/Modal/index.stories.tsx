import type { Meta, StoryObj } from '@storybook/nextjs';

import { Modal } from './index';

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Modal',
    isOpen: true,
    onClose: () => {},
    children: 'This is the modal content',
  },
};