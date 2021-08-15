import React from 'react';
import DateComponent from './DateComponent';
import HeaderComponent, { HeaderSize } from './HeaderComponent';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  argTypes: {
    size: {
      options: [HeaderSize.Size2Xl, HeaderSize.SizeXL, HeaderSize.SizeLg],
      control: { type: 'radio' },
    },
  },
  args: {
    children: 'sample text',
  },
};

export const show = (props) => <HeaderComponent {...props} />;
