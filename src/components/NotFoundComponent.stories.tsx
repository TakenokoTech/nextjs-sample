import React from 'react';
import NotFoundComponent from './NotFoundComponent';

export default {
  title: 'NotFoundComponent',
  component: NotFoundComponent,
};

export const show = (props) => <NotFoundComponent {...props} />;
