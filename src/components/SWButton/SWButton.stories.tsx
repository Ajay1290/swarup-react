import React from 'react';
import { Story, Meta } from '@storybook/react';
import SWButton, { SWButtonProps } from './SWButton';

export default {
  title: 'Components/SWButton',
  component: SWButton,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWButtonProps> = (args) => <SWButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  kind: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  kind: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary Button',
  kind: 'tertiary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
};