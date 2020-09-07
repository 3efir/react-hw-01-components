import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const StatsItem = ({ label, quantity, colored }) => {
  let liClassName = "item";

  if (colored) {
    liClassName += " item--colored";
  }

  return (
    <li
      className={liClassName}
      style={{backgroundColor:  colored ? getRandomColor() : 'inherit'}}
    >
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

StatsItem.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default StatsItem;
