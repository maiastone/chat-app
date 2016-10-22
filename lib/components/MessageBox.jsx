import React from 'react';



class MessageBox extends React.Component {
  constructor(){
    super();
  }

  render() {


  return (

      <ul>
        { this.props.messages.map(m =>
          <li key={m.key}>{}{m.createdAt} {m.user.displayName} {m.content}</li>

        )}

      </ul>

      );
    }
  }

module.exports = MessageBox;
