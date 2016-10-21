import React from 'react';
import Application from './Application.jsx'


export default class UserMessage extends React.Component {
  constructor() {
    super();
    this.state = {draftMessage: '' };
  }

  addNewMessage() {
    this.props.submitMessage(this.state.draftMessage);
    this.setState({draftMessage: ''});
  }

  render() {
  return (
      <div className="MessageInput">
        <input id='user-message'
          placeholder="Message…"
          value={this.state.draftMessage}
          onChange={(e) => this.setState({ draftMessage: e.target.value })}
        />
      <button id='submit-btn' onClick={() => this.addNewMessage()}>Add New Message</button>
      </div>
      );
    }
  }
