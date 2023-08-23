// SWTextInput.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import SWTextInput, { SWTextInputProps } from './SWTextInput';

export default {
  title: 'Components/SWTextInput',
  component: SWTextInput,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWTextInputProps> = (args) => <SWTextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter your name',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Email',
  value: 'john@example.com',
};
