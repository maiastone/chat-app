import React from 'react';


class FilteredMessages extends React.Component {

  render() {

    return (
      <input id="filter" type="search" placeholder="Filter"
        value={this.props.searchString}
        onChange={this.props.filterArray}/>
     );
  }
}



module.exports = FilteredMessages;
