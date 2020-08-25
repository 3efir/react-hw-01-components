import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const StatsItem = ({ label, quantity }) => {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};

export default StatsItem;
