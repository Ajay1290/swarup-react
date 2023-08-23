// SWSelect.stories.tsx
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import SWSelect, { SWSelectProps } from './SWSelect';

export default {
  title: 'Components/SWSelect',
  component: SWSelect,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWSelectProps> = (args) => {
  const [value, setValue] = useState(args.value);
  return <SWSelect {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3'],
  value: 'Option 1',
};
