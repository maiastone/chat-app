import React from 'react';
import Application from './Application'
import { pick, map, extend, uniqBy, keyBy } from 'lodash';

class UsersList extends React.Component {
  constructor(){
    super();
  }

  render() {

    let userArray  = []
    userArray = keyBy(this.props.messages, 'user.displayName');
    const userList = Object.keys(userArray);

  return (

      <ul>
          <li> {userList} </li>
        </ul>
      );
    }
  }

module.exports = UsersList;
