import React from 'react';


class UsersList extends React.Component {
  constructor(){
    super();
  }

  userArray(name) {
    let userEmail = name;
    let filterUserArray = this.props.displayedMessages.filter(function(u) {
      return u.user.displayName.match(userEmail);
    });
    this.props.filteredUserDisplay(filterUserArray);
  }


// let currentUser = (email === user.email) ? " " : "🔴";

  render() {

    let userDisplay = {};
    for(var i = 0; i < this.props.messages.length; i++){
      let name = this.props.messages[i].user.displayName.split(' ')[0];
      let email = this.props.messages[i].user.email;
      userDisplay[name] = email;
    }
    let names = Object.keys(userDisplay);
    let users = names.map(name =>
      <button onClick={()=>this.userArray(name)} className="user-list-button">
        {name} ({userDisplay[name]})</button>);

  return (

    <ul id="users">
      <li id="userTitle">Users</li>
      <li>{users}</li>
    </ul>
    );
  }
}



module.exports = UsersList;
