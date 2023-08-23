// SWCheckbox.stories.tsx (Improved)
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import SWCheckbox, { SWCheckboxProps } from './SWCheckbox';

export default {
  title: 'Components/SWCheckbox',
  component: SWCheckbox,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWCheckboxProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);
  const handleCheckboxChange = (isChecked: boolean) => {
    setChecked(isChecked);
    args.onChange(isChecked);
  };

  return <SWCheckbox {...args} checked={checked} onChange={handleCheckboxChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Check me',
  checked: false,
};
