import React, { useState } from "react";
import Die from "./Die";
import "../styles/styles.css";
import car from '../dice/car.webp';

const RollDice = () => {
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);

    setTimeout(() => {
      const faces = ["one", "two", "three", "four", "five", "six"];
      setDie1(faces[Math.floor(Math.random() * faces.length)]);
      setDie2(faces[Math.floor(Math.random() * faces.length)]);
      setRolling(false);
    }, 1000);
  };

  return (
    <div className='die-container'>
      <div className='car-with-dice'>
        <img className='car-image' src={car} alt='Car' />
        <div className='dice-wrapper'>
          <div className="left-wheel">
          <Die face={die1} rolling={rolling} /></div>
          <div className="right-wheel">
          <Die face={die2} rolling={rolling} /></div>
        </div>
      </div>
      <button onClick={roll} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default RollDice;
