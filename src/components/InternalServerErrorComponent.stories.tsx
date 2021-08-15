import React from 'react';
import InternalServerErrorComponent from './InternalServerErrorComponent';

export default {
  title: 'InternalServerErrorComponent',
  component: InternalServerErrorComponent,
};

export const show = (props) => <InternalServerErrorComponent {...props} />;
