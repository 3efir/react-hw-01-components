import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { v4 as uuidv4 } from 'uuid';
import Description from './Description';
import StatsItem from './StatsItem';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className="profile">
      <Description
        avatar={avatar}
        name={name}
        tag={tag}
        location={location}
      />

      <ul className="stats">
        {Object.keys(stats).map((key) => {
          return (
            <StatsItem key={uuidv4()}
              label={key}
              quantity={stats[key]}
            />
          );
        })}
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: 'https://dummyimage.com/600x400/000/fff.jpg&text=Avatar',
  stats: {}
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    label: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default Profile;
