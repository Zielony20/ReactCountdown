import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import { Link } from 'react-router-dom';

const Wedding = ({ name, day, month }) => {
  // useState Hooks
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItWday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    // This is if not enough params are provided
    name = ''; // Name of the Person
    month = 9; // Month of the Wedding
    day = 14; // Day of the Wedding
  }

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Wedding in Data Object
  // WE subtract 1 from momnth ; Months start from 0 in Date Object
  // Bithday Boolean
  const isItWday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        // Getting the Current Date
        const dateAtm = new Date();

        // if the Wedding has passed
        // then set the Wedding countdown for next year
        let WeddingDay = new Date(currentYear, month - 1, day);
        if (dateAtm > WeddingDay) {
          WeddingDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === WeddingDay.getFullYear() + 1) {
          WeddingDay = new Date(currentYear, month - 1, day);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Weddings Time
        const WeddingTime = WeddingDay.getTime() + + (15 * 60 * 60 * 1000);

        // Time remaining for the Wedding
        const timeRemaining = WeddingTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItWday,
        }));
        // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItWday}`);
      };
      if (!isItWday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItWday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItWday, month]);

  let birth = new Date(currentYear, month - 1, day);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let monthBday = monthNames[birth.getMonth()];

  return (
    <div className='page'>
      <Countdown countdownData={state} name={name} />
      {!isItWday && (
        <>
          <div className='birthdate'>
            Data ślubu: {day} {monthBday} {currentYear}
          </div>
          
        </>
      )}
    </div>
  );
};

export default Wedding;