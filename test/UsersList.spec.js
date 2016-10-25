const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render} from 'enzyme';
import UsersList from '../lib/components/UsersList';
import Application from '../lib/components/Application'
import messages from './helpers/messages'

describe('UsersList', () => {

  it('renders as a <ul>', () => {
    const wrapper = shallow(<UsersList
      messages={messages} />)
    assert.equal(wrapper.type(), 'ul');
  });
  it('should render Users', () => {
    const wrapper = shallow(<UsersList messages={messages}/>)
    expect(wrapper.contains('Users')).to.be.true
  });
  
});
