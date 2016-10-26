import React from 'react';
import firebase, { reference, signIn, signOut} from '../firebase';
import moment from 'moment';
import { pick, map, extend } from 'lodash';
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
      filteredArray: null,
      filteredUserArray: null,
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
      createdAt: moment().format('M/YY, h:mma')
    });
  }

  filteredUserDisplay(filterUserArray) {
    this.setState({filteredArray: filterUserArray});
  }

  sortMessages(revArray) {
    this.setState({messages: revArray});
  }

  filteredDisplay(filterArray) {
    this.setState({filteredArray: filterArray});
  }


  render() {
    const { user, messages, filteredArray } = this.state;

    return (
      <div className="Application">

        <header id="header">
          <p id="title">Shoot the Breeze</p>
          <FilteredMessages
            messages ={filteredArray? filteredArray:messages}
            filteredDisplay = {this.filteredDisplay.bind(this)} />
          <Sort
            messages={messages}
            sortMessages={this.sortMessages.bind(this)} />
        </header>

        <main className="body">
          <MessageBox
            messages={filteredArray? filteredArray:messages} />
          <UsersList
            messages={messages}
            displayedMessages={messages}
            filteredUserDisplay={this.filteredUserDisplay.bind(this)} />
        </main>

        <footer id="footer">
          <div id="userName"> {user ?
            <p>Logged in as {user.displayName.split(' ')[0]}
            <button className="sign" onClick={()=> signOut()}>Sign Out</button></p>
            : <button className="sign" onClick={() => signIn()}>Sign In</button>}
          </div>
          <UserMessage
            submitMessage={this.addNewMessage.bind(this)} />
        </footer>

      </div>
    );
  }
}



module.exports = Application;
