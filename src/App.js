import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './resources/user.json';
import statisticalData from './resources/statistical-data.json';
import friends from './resources/friends.json';
import transactions from './resources/transactions.json';

import './styles.scss';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />

      <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />
    </>
  );
}

export default App;
