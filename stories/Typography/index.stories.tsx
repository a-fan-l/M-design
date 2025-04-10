import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@components/Typography';
import './index.css';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    children: 'Hello World',
  },
};
