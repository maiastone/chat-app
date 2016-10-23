import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import moment from 'moment';
import { pick, map, extend, filter } from 'lodash';
import UserMessage from './UserMessage';
import MessageBox from './MessageBox';
import FilteredMessages from './Filter';
import UsersList from './UsersList';
import Sort from './Sort';


class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      searchString: ''
    };
    this.filterArray = this.filterArray.bind(this);
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

  filterArray(e) {
    this.setState({searchString: e.target.value});
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
    const { user, messages, searchString } = this.state;

    return (
      <div className="Application">

        <header id="header">
          <p id="title">Shoot the Breeze</p>
          <FilteredMessages searchString = {searchString}
          filterArray = {this.filterArray} />
          <Sort />
        </header>

        <main className="body">
          <MessageBox messages={this.state.messages} searchString={searchString}/>
          <UsersList />
        </main>

        <footer>
          {user ? <p>Logged in as {user.displayName}</p> : <button onClick={() => signIn()}>Sign In</button> }
          <UserMessage submitMessage={this.addNewMessage.bind(this)} />
        </footer>

      </div>
    );
  }
}



module.exports = Application;
