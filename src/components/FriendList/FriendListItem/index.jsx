import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const FriendListItem = ({isOnline, avatar, name}) => {
  let statusClass = "friend-list__item-status";

  if (isOnline) {
    statusClass += " online";
  }

  return (
    <li className="friend-list__item">
      <span className={statusClass}></span>
      <img className="friend-list__item-avatar" src={avatar} alt={name} />
      <p className="friend-list__item-name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
