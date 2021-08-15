import React from 'react';
import AlertComponent from './AlertComponent';

export default {
  title: 'AlertComponent',
  component: AlertComponent,
  argTypes: {
    type: {
      options: ['none', 'success', 'error'],
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'sample text',
  },
};

export const show = (props) => <AlertComponent {...props} />;
