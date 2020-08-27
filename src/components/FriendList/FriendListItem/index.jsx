import React from 'react';
import './styles.scss';

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

export default FriendListItem;
