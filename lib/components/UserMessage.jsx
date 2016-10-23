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
    this.setState({draftMessage: ''});
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
          onChange={(e) => this.setState({ draftMessage: e.target.value })} />
        <p id='CharCount'>{ 140-this.state.draftMessage.length}</p>
        <button id="submit" onClick={() => this.addNewMessage()}>Submit</button>
        <button id="clear" onClick={() => this.clearMessage()}>Clear</button>
      </div>
      );
    }
}
