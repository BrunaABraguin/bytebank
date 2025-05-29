import type { Meta, StoryObj } from '@storybook/nextjs';

import { UserGreetings } from './index';

const meta = {
  component: UserGreetings,
} satisfies Meta<typeof UserGreetings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};