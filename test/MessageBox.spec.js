const assert = require('chai').assert;
var expect = require('chai').expect;
const React = require('react');
import {shallow, mount, render, map} from 'enzyme';
import MessageBox from '../lib/components/MessageBox.jsx';
import Application from '../lib/components/Application.jsx';


describe('MessageBox', () => {

  it('renders as a <ul>', () => {
    const wrapper = shallow(<MessageBox   messages={messages}
      filteredArray={filteredArray}/>)
    assert.equal(wrapper.type(), 'ul');
  });
});
