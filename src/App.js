import React, { useState, useEffect } from 'react';

import './App.css';
import Wedding from './Wedding';
import { Route, Switch } from 'react-router-dom';
import RouterWedding from './RouterWedding';
import Generate from './Generate';

function CountdownTimer() {
  const targetDate = new Date('2024-09-14T15:00:00').getTime();
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (timeRemaining <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Odliczanie do 14 września 2024, 15:00</h1>
      <div className="countdown">
        <div className="countdown-item">
          <span>{days}</span>
          <p>Dni</p>
        </div>
        <div className="countdown-item">
          <span>{hours}</span>
          <p>Godzin</p>
        </div>
        <div className="countdown-item">
          <span>{minutes}</span>
          <p>Minut</p>
        </div>
        <div className="countdown-item">
          <span>{seconds}</span>
          <p>Sekund</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Wedding} />
        <Route
          exact
          path='/Wedding/:name?/:day?/:month?'
          component={RouterWedding}
        />
        <Route exact path='/generate' component={Generate} />
      </Switch>
    </div>
  );
}

export default App;