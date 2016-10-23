import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import moment from 'moment';
import { pick, map, extend } from 'lodash';
import UserMessage from './UserMessage';
import MessageBox from './MessageBox';
import Filter from './Filter';
import UsersList from './UsersList';

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  addNewMessage(draftMessage) {
    const { user } = this.state;

    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format('MMMM D, h:mma')
    });
  }

  render() {
    const { user, messages } = this.state;

    return (
      <div className="Application">

        <Filter messages={this.state.messages}/> 

        <MessageBox messages={this.state.messages}/>

        <UsersList />

        {user ? <p>Logged in as {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }

        <UserMessage submitMessage={this.addNewMessage.bind(this)}  />

      </div>

    );
  }
}

module.exports = Application;
