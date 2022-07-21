
import React from 'react';

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Statistics from './components/Statistics/Statistics';


import user from './database/user.json';
import friends from './database/friends.json';
import transactions from './database/transactions.json';
import data from './database/data.json';

export default function App() {
    return (
        <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
            {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> 
        </>
    );
};

