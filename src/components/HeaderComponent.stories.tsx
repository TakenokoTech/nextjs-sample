import React from 'react';
import HeaderComponent, { HeaderSize } from './HeaderComponent';

export default {
  title: 'HeaderComponent',
};

export const show = () => (
  <>
    <HeaderComponent size={HeaderSize.Size2Xl}>HeaderSize.Size2Xl</HeaderComponent>
    <HeaderComponent size={HeaderSize.SizeXL}>HeaderSize.SizeXL</HeaderComponent>
    <HeaderComponent size={HeaderSize.SizeLg}>HeaderSize.SizeLg</HeaderComponent>
  </>
);
