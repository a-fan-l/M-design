import type { Meta, StoryObj } from '@storybook/react';
import SvgIcon from '@components/SvgIcon';
import './index.css';

const meta: Meta<typeof SvgIcon> = {
  title: 'SvgIcon',
  component: SvgIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SvgIcon>;

export const Primary: Story = {
  args: {
    name: 'mode_dark',
  },
};
