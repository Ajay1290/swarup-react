// SWModal.stories.tsx
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import SWModal, { SWModalProps } from './SWModal';
import SWButton from '../SWButton/SWButton';

export default {
  title: 'Components/SWModal',
  component: SWModal,
  tags: ['autodocs']
} as Meta;

const Template: Story<SWModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div>
      <SWButton onClick={handleOpenModal}>Open Modal</SWButton>
      <SWModal {...args} isOpen={isOpen} onClose={handleCloseModal}>
        {args.children}
      </SWModal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Title',
  children: <p>This is the content of the modal.</p>,
};
