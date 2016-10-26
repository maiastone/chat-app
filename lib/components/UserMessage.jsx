import React from 'react';


class UserMessage extends React.Component {
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
      <div className="message-field">
        <input aria-label="message" id="message"
          placeholder="Message"
          value={this.state.draftMessage}
          onChange={(e) => this.setState({ draftMessage: e.target.value })} />
        <h5 id="CharCount">{ 140-this.state.draftMessage.length}</h5>
      </div>
      <div className="button-container-mobile">
        <button tabindex="0" id="submit" onClick={() => this.addNewMessage()}>Submit</button>
        <button tabindex="0" id="clear" onClick={() => this.clearMessage()}>Clear</button>
      </div>
    </section>
    );
  }
}



export default UserMessage;
