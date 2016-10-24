import React from 'react';
import Application from './Application'
import { pick, map, extend, uniqBy, keyBy } from 'lodash';

class UsersList extends React.Component {
  constructor(){
    super();
  }

  render() {

    let nameArray  = []
    let emailArray = []
    nameArray = keyBy(this.props.messages,'user.displayName');
    emailArray = keyBy(this.props.messages, 'user.email');
    const userNames = Object.keys(nameArray);
    const userEmails = Object.keys(emailArray);

  return (

      <ul>
          <li className='user-names'> {userNames} </li>
          <li className='user-emails'> {userEmails} </li>
        </ul>
      );
    }
  }

module.exports = UsersList;
