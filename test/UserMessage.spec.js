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

  it('should have the submit and clear buttons disabled by default state', () => {
    const wrapper = mount(<UserMessage />);
    expect(wrapper.state('submitDisabled')).deep.equal(true);
    expect(wrapper.state('clearDisabled')).deep.equal(true);
  });

  it('should enable the submit and clear buttons when text is typed in the input field', () => {
    const wrapper = mount(<UserMessage />);
    wrapper.find('#message').simulate('change', {target: {value: 'Hello'}});
    expect(wrapper.state('submitDisabled')).deep.equal(false);
    expect(wrapper.state('clearDisabled')).deep.equal(false);
  })

  it('should have a clear button that clears the input field when clicked', () => {
    const wrapper = mount(<UserMessage />);
    wrapper.find('#clear').simulate('click');
    expect(wrapper.state('draftMessage')).to.equal('');
  });

  it('should disable clear and submit buttons when clear button is clicked', () => {
    const wrapper = mount(<UserMessage />);
    wrapper.find('#clear').simulate('click');
  })

  it.skip('the button should reset the draft message state to an empty string on click', () => {
  const wrapper = mount(<UserMessage />)
  wrapper.find('#message').simulate('change', {target: {value: 'Hello'}});
  wrapper.find('#submit').simulate('click');
  expect(wrapper.state('draftMessage')).to.equal('');
  });

});
