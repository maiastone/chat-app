const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render} from 'enzyme';
import UserMessage from '../lib/components/UserMessage.jsx';
// import Application from '../lib/components/Application.jsx';


describe('UserMessage', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<UserMessage />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should change the state of "draft messages" based on user input', () => {
    const wrapper = mount(<UserMessage />);
    wrapper.find('#user-message').simulate('change', {target: {value: 'Hello'}});
    expect(wrapper.state('draftMessage')).to.equal('Hello');
  });
  it.skip('the add new msg button should push the draft message to the messages array on click', () => {
  });

  it.skip('the button should reset the draft message state to an empty string on click', () => {
  const wrapper = mount(<UserMessage />)
  wrapper.find('#user-message').simulate('change', {target: {value: 'Hello'}});
  wrapper.find('#submit-btn').simulate('click');
  expect(wrapper.state('draftMessage')).to.equal('');
  });

});
