import React from 'react';


class MessageBox extends React.Component {
  constructor(){
    super();
  }


  render() {

  return (
    <ul id="renderedMessages">
      {this.props.messages.map(m =>
        <li key={m.key}>{}<span className="date">{m.createdAt}  </span>
          <span className="name"> {m.user.displayName.split(' ')[0]}</span><br/>
        <span className="content">{m.content}</span></li>)}
    </ul>
    );
  }
}



module.exports = MessageBox;
