import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;