import React from 'react';
import Sort from './Sort';

class Filter extends React.Component {
  constructor(){
    super();

}

  // let ref = firebase.database().ref(searchString, message
//       filterMessages() {
//
//
// }
  filteredMessages(searchString) {
  var messageArray = this.props.messages;
  var filteredArray = messageArray.filter(messageArray );
  this.setState({messages: filteredArray});
  }

  render() {

  return (
    <div>
      <header className="header">
        <p>Shoot the Breeze</p>
        <input  type="search" placeholder="Filter"
          value={this.state.searchString}
          onChange={(e)=> this.setState({searchString: e.target.value})}/>

        <Sort />
      </header>

    </div>

      );
    }
  }

module.exports = Filter;
