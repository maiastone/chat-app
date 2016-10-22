import React from 'react';
import Sort from './Sort';

class Filter extends React.Component {
  constructor(){
    super();
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
