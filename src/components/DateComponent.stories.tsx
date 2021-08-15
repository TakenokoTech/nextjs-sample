import React from 'react';
import AlertComponent from './AlertComponent';
import DateComponent from './DateComponent';

export default {
  title: 'DateComponent',
  component: DateComponent,
  argTypes: {
    dateString: {
      control: { type: 'text' },
    },
  },
  args: {
    dateString: '2020-01-01',
  },
};

export const show = (props) => <DateComponent {...props} />;
