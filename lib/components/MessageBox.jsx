import React from 'react';



class MessageBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    // const currentArray = (this.props.filteredUserArray) ?
// if filteredUser then currentArray = filteredUserArray
// else current Array = filteredTextArray
// else current Array = this.props.messages

    const currentArray =
    ( this.props.filteredUserArray ) ? this.props.filteredUserArray : this.props.messages;



    return (

        <ul id="renderedMessages">
          {currentArray.map(m =>
            <li key={m.key}>{}<span id='date'>{m.createdAt}  </span>
              <span id='name'> {m.user.displayName.split(' ')[0]}</span><br/>
            <span id='content'>{m.content}</span></li>)}
        </ul>
        );
      }
  }

module.exports = MessageBox;
