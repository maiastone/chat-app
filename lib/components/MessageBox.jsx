import React from 'react';



class MessageBox extends React.Component {
  constructor(){
    super();
  }
// userArray ( this.props.filteredArray ) ? this.props.filteredArray : this.props.messages;
// currentArray (this.props.filteredUserArray) ? (this.props.filteredUserArray) : this.props.messages;
// function to determine which array to render first??
// if filteredUser then currentArray = filteredUserArray
// else current Array = filteredTextArray
// else current Array = this.props.messages
//
//   decideArray() {
//     var currentArray = this.props.messages;
//     return (this.props.filteredUserArray)
// //     currentArray = (this.props.filteredUserArray);
// //   } else if ( this.props.filteredArray ) {
// //     currentArray = (this.props.filteredArray);
// //   }  else  {
// //     currentArray =
// //   }
// //     return currentArray;
// // // }
// filteredArray={filteredArray}
// filteredUserArray={filteredUserArray}


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
