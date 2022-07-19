
import React from 'react';

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './database/user.json';
import friends from './database/friends.json';
import transactions from './database/transactions.json';

export default function App() {
    return (
        <div>
            <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="UPLOAD STATS" stats={stats} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> 
        </div>
    );
};

