const assert = require('chai').assert;
const expect = require('chai').expect;
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import UserMessage from '../lib/components/UserMessage.jsx';
import Application from '../lib/components/Application.jsx';
import messages from './helpers/messages'


describe('UserMessage', () => {

  it('renders as a <section>', () => {
    const wrapper = shallow(<UserMessage />)
    assert.equal(wrapper.type(), 'section');
  });

  it('should change the state of "draft messages" based on user input with every keypress', () => {
    const wrapper = mount(<UserMessage />);
    wrapper.find('#message').simulate('change', {target: {value: 'H'}});
    expect(wrapper.state('draftMessage')).to.equal('H');
    wrapper.find('#message').simulate('change', {target: {value: 'Hel'}});
    expect(wrapper.state('draftMessage')).to.equal('Hel');
    wrapper.find('#message').simulate('change', {target: {value: 'Hello'}});
    expect(wrapper.state('draftMessage')).to.equal('Hello');
  });


  it.skip('the button should reset the draft message state to an empty string on click', () => {
  const wrapper = mount(<UserMessage />)
  wrapper.find('#message').simulate('change', {target: {value: 'Hello'}});
  wrapper.find('#submit').simulate('click');
  expect(wrapper.state('draftMessage')).to.equal('');
  });

});
