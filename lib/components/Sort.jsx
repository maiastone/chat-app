import React from 'react';


class Sort extends React.Component {
  constructor(){
    super();
  }

  sortUp() {
    var array = this.props.messages;
    debugger
    var revArray = array.reverse();
    console.log(revArray);
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
