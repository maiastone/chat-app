const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render} from 'enzyme';
import UsersList from '../lib/components/UsersList';
import Application from '../lib/components/Application'

describe('UsersList', () => {

  it('renders as a <ul>', () => {
    const wrapper = shallow(<UsersList />)
    assert.equal(wrapper.type(), 'ul');
  });
});
