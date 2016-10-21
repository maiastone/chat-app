const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render} from 'enzyme';
import Application from '../lib/components/Application';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

});
