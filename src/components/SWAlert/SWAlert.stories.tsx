// SWAlert.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import SWAlert, { SWAlertProps } from './SWAlert';

export default {
  title: 'Components/SWAlert',
  component: SWAlert,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWAlertProps> = (args) => <SWAlert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Operation successful!',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning message.',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'An error occurred.',
};
