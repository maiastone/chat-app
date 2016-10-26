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
    this.clearInput();
    this.setState({submitDisabled: true, clearDisabled: true });
  }


  render() {
    let disabled = this.state.draftMessage.length > 140 || this.state.draftMessage.length === 0
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
          <button tabIndex="0" disabled={disabled} id="submit" onClick={() => this.addNewMessage()}>Submit</button>
          <button tabIndex="0" disabled={this.state.clearDisabled} id="clear" onClick={() => this.clearMessage()}>Clear</button>
        </div>
      </section>
      );
    }
}



export default UserMessage;
