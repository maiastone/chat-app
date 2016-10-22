import React from 'react';
import { pick, map, extend, uniq } from 'lodash';

class UsersList extends React.Component {
  constructor(){
    super();
  }

  render() {

  return (

      <ul>
        { uniq(this.props.messages.map(m =>
          <li key={m.key}> {m.user.displayName}</li>
        ))}
        </ul>
      );
    }
  }


module.exports = UsersList;
