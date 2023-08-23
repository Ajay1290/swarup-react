// SWAccordion.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import SWAccordion, { SWAccordionProps } from './SWAccordion';

export default {
  title: 'Components/SWAccordion',
  component: SWAccordion,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWAccordionProps> = (args) => <SWAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  content: <p>This is the content of the accordion.</p>,
};
