import React from 'react';


class FilteredMessages extends React.Component {

  filterArray(e) {
    const searchString = e.target.value;
    if (searchString.length >= 1) {
      let filterArray = this.props.messages.filter(function(m){
        return m.content.toLowerCase().match(searchString);
      });
      this.props.filteredDisplay(filterArray);
    } else {
      this.props.filteredDisplay(null);
    }
  }

  render() {

    return (
      <input aria-label="search" id="filter" type="search" placeholder="Filter"
        value={this.props.searchString}
        onChange={(e)=> this.filterArray(e)}/>
     );
  }
}


module.exports = FilteredMessages;
