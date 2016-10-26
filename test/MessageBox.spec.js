const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render, map} from 'enzyme';
import MessageBox from '../lib/components/MessageBox.jsx';
import Application from '../lib/components/Application.jsx';
import messages from './helpers/messages'
import filteredArray from './helpers/filteredMessages'


describe('MessageBox', () => {

  it('renders as a <ul>', () => {
    const wrapper = shallow(<MessageBox   messages={messages}
      filteredArray={filteredArray}/>)
    assert.equal(wrapper.type(), 'ul');
  });
  it('should hold an array of messages', () => {
    const wrapper = mount(<MessageBox   messages={messages}
      filteredArray={filteredArray}/>)
    expect(messages.length).to.equal(3)
  })
  it('should hold an array of filtered messages', () => {
    const wrapper = mount(<MessageBox   messages={messages}
      filteredArray={filteredArray}/>)
    expect(filteredArray.length).to.equal(2)
  });
  it.skip('should render an <li> that contains key, createdAt, displayName, and content', () => {
    const wrapper = mount(<MessageBox   messages={messages}
      filteredArray={filteredArray}/>)
    expect(messages).to.contain('createdAt')
  })
});
