import React from 'react';
import Sort from './Sort';

class Filter extends React.Component {
  constructor(){
    super();
  }

// TODO filter through array and show or hide based on searchString
    filterMessages(searchString) {
    for (var i=0; i < this.array.length; i++) {
    var existingMessage = this.array[i];
    if (!(this.array[i].input.includes(searchString))) {
      array.children(this.array[i]).hide();
    } else {
      array.children(this.array[i]).show();
    }
  }
}


  render() {

  return (
    <div>
      <header className="header">
        <p>Shoot the Breeze</p>
        <input type="search" placeholder="Filter"/>
        <Sort />
      </header>

    </div>

      );
    }
  }

module.exports = Filter;
