import React from 'react';
import moment from 'moment';


class MessageBox extends React.Component {
  constructor(){
    super();
  }

  render() {



// moment().format('MMMM Do, h:mma')
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
