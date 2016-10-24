import React from 'react';



class MessageBox extends React.Component {
  constructor(){
    super();
  }

  render() {

    const currentArray = ( this.props.filteredArray ) ? this.props.filteredArray : this.props.messages;

    

    return (

        <ul id="renderedMessages">
          {currentArray.map(m =>
            <li key={m.key}>{}<span id='date'>{m.createdAt}</span>
            <span id='name'>{m.user.displayName}</span><br/>
            <span id='content'>{m.content}</span></li>)}
        </ul>
        );
      }
  }

module.exports = MessageBox;
