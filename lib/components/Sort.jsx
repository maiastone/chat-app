import React from 'react';
import { pick, map, extend, uniqBy} from 'lodash';
import Application from './Application'

class Sort extends React.Component {
  constructor(){
    super();
  }

  sortMessagesUp() {
    const normArray = this.props.messages;
    const revArray = normArray.reverse();
    this.props.sortMessages(revArray);
  }

  sortMessagesDown() {
    const normArray = this.props.messages;
    const revArray = normArray.reverse();
    this.props.sortMessages(revArray);
  }

  render() {

  return (
    <div>
      <button onClick={() => this.sortMessagesUp()}>Sort Up</button>
      <button onClick={() => this.sortMessagesDown()}>Sort Down</button>
    </div>

      );
    }
  }

module.exports = Sort;
