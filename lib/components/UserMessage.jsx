import React from 'react';


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
        <input
          placeholder="Message…"
          value={this.state.draftMessage}
          onChange={(e) => this.setState({ draftMessage: e.target.value })}
        />
        <button onClick={() => this.addNewMessage()}>Add New Message</button>
      </div>
      );
    }
  }
