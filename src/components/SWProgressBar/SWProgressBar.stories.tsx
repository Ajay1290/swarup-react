// SWProgressBar.stories.tsx
import React, { useState, useEffect } from 'react';
import { Story, Meta } from '@storybook/react';
import SWProgressBar, { SWProgressBarProps } from './SWProgressBar';

export default {
  title: 'Components/SWProgressBar',
  component: SWProgressBar,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWProgressBarProps> = (args) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(percentage + 10);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [percentage]);

  return <SWProgressBar {...args} percentage={percentage} />;
};

export const Default = Template.bind({});
Default.args = {
  percentage: 0,
};
