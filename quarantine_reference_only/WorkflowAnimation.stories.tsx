import type { Meta, StoryObj } from '@storybook/react';

import WorkflowAnimation from './WorkflowAnimation';

const meta: Meta<typeof WorkflowAnimation> = {
  component: WorkflowAnimation,
  title: 'WorkflowAnimation',
};

export default meta;
type Story = StoryObj<typeof WorkflowAnimation>;

export const Default: Story = {
  args: {},
};
