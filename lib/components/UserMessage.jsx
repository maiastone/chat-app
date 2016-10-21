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

  clearMessage() {
    document.getElementById('input').value='';
  }

  updateCharacterCount () {
    let input = document.getElementById('input');
    let charCount = document.getElementById('char-count');
    charCount.text(input.value().length);
  }

  render() {
  return (
      <div className="MessageInput">
        <input id="input"
          placeholder="Message…"
          value={this.state.draftMessage}
          onChange={(e) => this.setState({ draftMessage: e.target.value })}

        />

        <div id='char-count'>0</div>
        <button onClick={() => this.addNewMessage()}>Submit</button>
        <button onClick={() => this.clearMessage()}>Clear</button>
      </div>
      );
    }
}
