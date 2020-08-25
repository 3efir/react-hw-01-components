import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Description = ({ avatar, name, tag, location }) => {
  return (
    <div className="description">
        <img
          src={avatar}
          alt="user avatar"
          className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
  );
};

Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default Description;
