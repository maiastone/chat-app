import React from 'react';
import { pick, map, extend, uniq } from 'lodash';

class Sort extends React.Component {
  constructor(){
    super();
  }

  sortUp() {
    var array = this.props.messages;
    var revArray = array.reverse();
    console.log(revArray);
    this.setState({
      messages: revArray });
    }

  render() {

  return (
    <div>
      <button onClick={() => this.sortUp()}>Sort Up</button>
      <button onClick={() => this.sortDown()}>Sort Down</button>
    </div>

      );
    }
  }

module.exports = Sort;
