import React from 'react';
import Alert from './alert';

export default {
  title: 'Alert',
};

export const show = () => (
  <>
    <Alert type={''}>none</Alert>
    <Alert type={'success'}>success</Alert>
    <Alert type={'error'}>test</Alert>
  </>
);
