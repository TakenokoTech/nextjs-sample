import { shallow } from 'enzyme';
import * as React from 'react';
import Image from '../../src/components/ImageComponent';

describe('sample test', () => {
  it('test', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.find('div')).toHaveLength(0);
    expect(50).toEqual(50);
  });
});

export {};
