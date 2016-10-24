import React from 'react';



class MessageBox extends React.Component {
  constructor(){
    super();
  }

  render() {

    const currentArray = ( this.props.filteredArray ) ? this.props.filteredArray : this.props.messages;


    return (

        <ul>
          {currentArray.map(m =>
            <li key={m.key}>{}{m.createdAt} {m.user.displayName} {m.content}</li>)}
        </ul>
        );
      }
  }

module.exports = MessageBox;
