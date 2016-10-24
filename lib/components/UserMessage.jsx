import React from 'react';


export default class UserMessage extends React.Component {
  constructor() {
    super();
    this.state = {draftMessage: '' };
  }

  clearInput() {
   this.setState({draftMessage: ''});
  }

  addNewMessage() {
    this.props.submitMessage(this.state.draftMessage);
    this.clearInput();
  }

  clearMessage() {
    document.getElementById('message').value='';
    this.clearInput();
  }

  updateCharacterCount () {
    let input = document.getElementById('input');
    let charCount = document.getElementById('char-count');
    charCount.text(input.value().length);
  }


  render() {
  return (
      <section className="MessageInput">
        <input id="message"
          placeholder="Message…"
          value={this.state.draftMessage}
          onChange={(e) => this.setState({ draftMessage: e.target.value })} />
        <p id='CharCount'>{ 140-this.state.draftMessage.length}</p>
        <button id="submit" onClick={() => this.addNewMessage()}>Submit</button>
        <button id="clear" onClick={() => this.clearMessage()}>Clear</button>
      </section>
      );
    }
}
