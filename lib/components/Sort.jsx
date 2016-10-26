import React from 'react';


class Sort extends React.Component {
  constructor(){
    super();
    this.state = {
      sortDown: true,
      sortUp: false
    };
  }

  sortMessagesUp() {
    const normArray = this.props.messages;
    const revArray = normArray.reverse();
    this.props.sortMessages(revArray);
    this.setState({sortUp: true, sortDown: false});
  }

  sortMessagesDown() {
    const normArray = this.props.messages;
    const revArray = normArray.reverse();
    this.props.sortMessages(revArray);
    this.setState({sortUp: false, sortDown: true});
  }


  render() {

  return (
    <div className='button-container-mobile'>
      <button tabIndex="0" disabled={this.state.sortUp} id='sort-up-btn' onClick={() => this.sortMessagesUp()}>Sort ⬆</button>
      <button tabIndex="0" disabled={this.state.sortDown} id='sort-down-btn' onClick={() => this.sortMessagesDown()}>Sort ⬇</button>
    </div>
      );
    }
  }



module.exports = Sort;
