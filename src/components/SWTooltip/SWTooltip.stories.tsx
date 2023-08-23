// SWTooltip.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import SWTooltip, { SWTooltipProps } from './SWTooltip';
import SWButton from '../SWButton/SWButton';

export default {
  title: 'Components/SWTooltip',
  component: SWTooltip,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWTooltipProps> = (args) => (
  <SWTooltip {...args}>
    <SWButton>Hover me</SWButton>
  </SWTooltip>
);

export const Default = Template.bind({});
Default.args = {
  content: 'This is a tooltip!',
};
