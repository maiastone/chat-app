import React from 'react';

class UserMessage extends React.Component {
  constructor() {
    super();
    this.state = {draftMessage: '',
                  submitDisabled: true,
                  clearDisabled: true
                  };
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
    this.clearInput()
    this.setState({submitDisabled: true, clearDisabled: true });
  }

  updateCharacterCount () {
    let input = document.getElementById('input');
    let charCount = document.getElementById('char-count');
    charCount.text(input.value().length);
  }


  render() {
  return (
      <section className="MessageInput">
        <div className='message-field'>
          <input id="message"
            placeholder="Message"
            value={this.state.draftMessage}
            onChange={(e) => this.setState({ draftMessage: e.target.value, submitDisabled: false, clearDisabled: false })} />
          <p id='CharCount'>{ 140-this.state.draftMessage.length}</p>
        </div>
        <div className='button-container-mobile'>
          <button disabled={this.state.submitDisabled} id="submit" onClick={() => this.addNewMessage()}>Submit</button>
          <button disabled={this.state.clearDisabled} id="clear" onClick={() => this.clearMessage()}>Clear</button>
        </div>
      </section>
      );
    }
}

export default UserMessage;
