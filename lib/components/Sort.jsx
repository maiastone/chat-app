import React from 'react';
import { pick, map, extend, uniqBy} from 'lodash';
import Application from './Application'

class Sort extends React.Component {
  constructor(){
    super();
  }

  sortUp() {
    const array = this.props.messages;
    const revArray = array.reverse();
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
