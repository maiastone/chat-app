const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render} from 'enzyme';
import Filter from '../lib/components/Filter';

describe('Filter', () => {

  it('should render as a <input>', () => {
    const wrapper = shallow(<Filter />)
    assert.equal(wrapper.type(), 'input');
  });
});
