import * as React from 'react';
import { shallow } from 'enzyme';
import Image from '../../src/components/image';

describe('sample test', () => {
  it('test', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.find('div')).toHaveLength(0);
    expect(50).toEqual(50);
  });
});

export {};
