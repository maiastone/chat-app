import React from 'react';
import { pick, map, extend, uniqBy} from 'lodash';
import Application from './Application'
const $ = require('jquery');

class Sort extends React.Component {
  constructor(){
    super();
  }

  sortMessagesUp() {
    const normArray = this.props.messages;
    const revArray = normArray.reverse();
    this.props.sortMessages(revArray);
    $
  }

  sortMessagesDown() {
    const normArray = this.props.messages;
    const revArray = normArray.reverse();
    this.props.sortMessages(revArray);
  }

  render() {

  return (
    <div>
      <button id='sort-up-btn' onClick={() => this.sortMessagesUp()}>Sort Up</button>
      <button id='sort-down-btn' disabled='true' onClick={() => this.sortMessagesDown()}>Sort Down</button>
    </div>

      );
    }
  }

module.exports = Sort;
