import React from 'react';
import { Story, Meta } from '@storybook/react';
import SWDataGrid, { SWDataGridProps } from './SWDataGrid';

export default {
  title: 'Components/SWDataGrid',
  component: SWDataGrid,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWDataGridProps> = (args) => <SWDataGrid {...args} />;

const columns = ['Name', 'Age', 'Country'];
const data = [
  { Name: 'John', Age: 25, Country: 'USA' },
  { Name: 'Alice', Age: 30, Country: 'Canada' },
  { Name: 'Bob', Age: 28, Country: 'Australia' },
  // Add more data here for testing
  { Name: 'Zoe', Age: 22, Country: 'France' },
  { Name: 'David', Age: 35, Country: 'Germany' },
];

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
};

export const WithPaginationAndFiltering = Template.bind({});
WithPaginationAndFiltering.args = {
  columns,
  data: [
...data,
...data
  ],
};
