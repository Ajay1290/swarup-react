// SWTabs.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import SWTabs, { SWTabsProps } from './SWTabs';

export default {
  title: 'Components/SWTabs',
  component: SWTabs,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWTabsProps> = (args) => <SWTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1', content: <p>Content for Tab 1</p> },
    { label: 'Tab 2', content: <p>Content for Tab 2</p> },
    { label: 'Tab 3', content: <p>Content for Tab 3</p> },
  ],
};
