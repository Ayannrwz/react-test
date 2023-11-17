import React, { useState } from 'react';
import Die from './Die';
import '../styles/styles.css';

const RollDice = () => {
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);

    setTimeout(() => {
      const faces = ['one', 'two', 'three', 'four', 'five', 'six'];
      setDie1(faces[Math.floor(Math.random() * faces.length)]);
      setDie2(faces[Math.floor(Math.random() * faces.length)]);
      setRolling(false);
    }, 1000);
  };

  return (
    <div>
      <Die face={die1} rolling={rolling} />
      <Die face={die2} rolling={rolling} />
      <button onClick={roll} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default RollDice;
