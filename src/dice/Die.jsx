
import React from 'react';

const Die = ({ face, rolling }) => {
  return (
    <i className={`fas fa-dice-${face} ${rolling ? 'rolling' : ''}`}></i>
  );
};

export default Die;
