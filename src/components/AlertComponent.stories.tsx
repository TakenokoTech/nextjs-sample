import React from 'react';
import AlertComponent from './AlertComponent';

export default {
  title: 'AlertComponent',
};

export const show = () => (
  <>
    <AlertComponent type={''}>none</AlertComponent>
    <AlertComponent type={'success'}>success</AlertComponent>
    <AlertComponent type={'error'}>test</AlertComponent>
  </>
);
