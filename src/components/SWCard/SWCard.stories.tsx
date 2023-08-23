// SWCard.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import SWCard, { SWCardProps } from './SWCard';

export default {
  title: 'Components/SWCard',
  component: SWCard,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWCardProps> = (args) => <SWCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the content of the card.',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  content: 'This card includes an image.',
  imageSrc: 'https://via.placeholder.com/150',
};
