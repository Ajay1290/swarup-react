// SWSlider.stories.tsx
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import SWSlider, { SWSliderProps } from './SWSlider';

export default {
  title: 'Components/SWSlider',
  component: SWSlider,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWSliderProps> = (args) => {
  const [value, setValue] = useState(args.value);
  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
    args.onChange(newValue);
  };

  return <SWSlider {...args} value={value} onChange={handleSliderChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 50,
};
