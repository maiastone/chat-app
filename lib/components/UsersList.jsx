import React from 'react';
import Application from './Application'
import { pick, map, extend, uniqBy, keyBy } from 'lodash';

class UsersList extends React.Component {
  constructor(){
    super();
  }

  render() {

    //
    // let nameArray  = [];
    // let emailArray = [];
    // nameArray = keyBy(this.props.messages,'user.displayName');
    // emailArray = keyBy(this.props.messages, 'user.email');
    // const userNames = Object.keys(nameArray);
    // const userEmails = Object.keys(emailArray);
    // let users = []
    // for(var i = 0; i < userNames.length; i++) {
    //   let name = userNames[i];
    //   let email = userEmails[i];
    //   users.push(<li>{name}: {email}</li>)
    // }
    let userDisplay = {}
    for(var i = 0; i < this.props.messages.length; i++){
      let name = this.props.messages[i].user.displayName
      let email = this.props.messages[i].user.email
      userDisplay[name] = email
    }
    let names = Object.keys(userDisplay);
    let users = names.map(name => <li>{name}: {userDisplay[name]} </li> )

  return (

      <ul id="users"><p id="userTitle">Users</p>
      {users}
      </ul>
      );
    }
  }

module.exports = UsersList;
