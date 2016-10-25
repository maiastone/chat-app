import React from 'react';
import Application from './Application';


class UsersList extends React.Component {
  constructor(){
    super();
  
  }

  userArray(e) {
    let userEmail = e.target.value;

// if buttton clicked
    let filterUserArray = this.props.messages.filter(function(u) {
      return u.user.email.match(userEmail);
    });
    this.props.filteredUserDisplay(filterUserArray);
  }


  render() {

    let userDisplay = {};
    for(var i = 0; i < this.props.messages.length; i++){
      let name = this.props.messages[i].user.displayName.split(' ')[0];
      let email = this.props.messages[i].user.email;
      userDisplay[name] = email;
    }

    let names = Object.keys(userDisplay);
    let users = names.map(name =>
      <button value={this.props.messages[0].user.email} onClick={(e)=>this.userArray(e)} className="user-list-button">
        {name} ({userDisplay[name]}) </button> );

  return (

      <ul id="users">
        <p id="userTitle">Users</p>
        <li>{users}</li>
      </ul>
      );
    }
  }

module.exports = UsersList;
