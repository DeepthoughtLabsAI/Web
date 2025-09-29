import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
