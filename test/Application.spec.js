const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render} from 'enzyme';
import Application from '../lib/components/Application';
import Sort from '../lib/components/Sort';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should render the app name', () => {
    const wrapper = shallow(<Application />)
    expect(wrapper.contains('Shoot the Breeze')).to.be.true
  });

  it('should have a constructor that sets state of messages to an empty array', function() {
    const wrapper = shallow(<Application />);
    expect(wrapper.state('messages')).deep.equal([]);
});

  it('should have a constructor that sets state of user to be null', function() {
    const wrapper = mount(<Application />);
    expect(wrapper.state('user')).deep.equal(null);
});

it('should have a constructor that sets state of filteredArray to be null', function() {
  const wrapper = mount(<Application />);
  expect(wrapper.state('filteredArray')).deep.equal(null);
});

it('should have a constructor that sets state of filteredUserArray to be null', function() {
  const wrapper = mount(<Application />);
  expect(wrapper.state('filteredUserArray')).deep.equal(null);
});

  it.skip('should have a sort messages function that sets the state of messagegs to the reversed array of messages', () => {
    const wrapper = shallow(<Sort />)
    expect(wrapper.contains('button')).to.be.true
  })

  it.skip('the add new msg button should push the draft message to the messages array on click', () => {
  });
});
