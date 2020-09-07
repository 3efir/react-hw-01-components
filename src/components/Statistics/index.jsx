import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import StatsItem from '../StatsItem';

const Statistics = ({ title, stats }) => {
  return (
    <div className="statistics">
      {title && (<h2 className="title">{title}</h2>)}
      <ul className="stat-list">
        {stats.map((item) => {
          return (
            <StatsItem key={item.id}
              colored={true}
              label={item.label}
              quantity={`${item.percentage}%`}
            />
          );
        })}
      </ul>
    </div>
  );
};

Statistics.defaultProps = {
  stats: []
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
