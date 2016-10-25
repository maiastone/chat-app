import React from 'react';



class MessageBox extends React.Component {
  constructor(){
    super();
  }


  render() {

    return (
        <ul id="renderedMessages">
          {this.props.messages.map(m =>
            <li key={m.key}>{}<span id='date'>{m.createdAt}  </span>
              <span id='name'> {m.user.displayName.split(' ')[0]}</span><br/>
            <span id='content'>{m.content}</span></li>)}
        </ul>
        );
      }
  }

module.exports = MessageBox;
