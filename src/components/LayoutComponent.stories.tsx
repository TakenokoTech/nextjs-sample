import React from 'react';
import HeaderComponent, { HeaderSize } from './HeaderComponent';
import LayoutComponent from './LayoutComponent';

export default {
  title: 'LayoutComponent',
  component: LayoutComponent,
  argTypes: {
    home: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: 'sample text',
  },
};

export const show = (props) => <LayoutComponent {...props} />;
