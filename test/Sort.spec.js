const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render} from 'enzyme';
import Sort from '../lib/components/Sort';

describe('Sort', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Sort />)
    assert.equal(wrapper.type(), 'div');
  });
});
