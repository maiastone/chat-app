const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render} from 'enzyme';
import Sort from '../lib/components/Sort';
import messages from './helpers/messages'

describe('Sort', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Sort />)
    assert.equal(wrapper.type(), 'div');
  });
  it('should contain a button for sorting the messages up', () => {
    const wrapper = shallow(<Sort />)
    expect(wrapper.contains('Sort ⬆')).to.be.true;
  });
  it('should contain a button for sorting the messages down', () => {
    const wrapper = shallow(<Sort />)
    expect(wrapper.contains('Sort ⬇')).to.be.true;
  });
  it('should set state of sortDown button to true (disabled) and sortUp to false (enabled) as default', function() {
    const wrapper = mount(<Sort />);
    expect(wrapper.state('sortDown')).deep.equal(true);
    expect(wrapper.state('sortUp')).deep.equal(false);
  });
  it.skip('should set state of sortup to true and sort down to false when sortUp button is clicked', () => {
    const wrapper = mount(<Sort messages={messages} />);
    wrapper.find('#sort-up-btn').simulate('click');
    expect(wrapper.state('sortUp')).deep.equal(true);
    expect(wrapper.state('sortDown')).deep.equal(false);
  })
});
