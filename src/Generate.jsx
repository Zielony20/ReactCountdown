import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Generate = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [link, setLink] = useState('');
  const generateLink = () => {
    setLink(
      `https://birthday-chrono.netlify.app/birthday/${name}/${day}/${month}`
    );
  };
  return (
    <div className='page'>
      <h1>Generate Here</h1>
      <div className='form'>
        <input
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Enter Day'
          value={day}
          onChange={(e) => setDay(e.target.value)}
          max={31}
          min={1}
        />
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value=''>Select Month</option>
          <option selected value='1'>
            Styczeń
          </option>
          <option value='2'>Luty</option>
          <option value='3'>Marzec</option>
          <option value='4'>Kwiecień</option>
          <option value='5'>Maj</option>
          <option value='6'>Czerwiec</option>
          <option value='7'>Lipiec</option>
          <option value='8'>Sierpień</option>
          <option value='9'>Wrzesień</option>
          <option value='10'>Październik</option>
          <option value='11'>Listopad</option>
          <option value='12'>Grudzień</option>
        </select>
      </div>
      <button className='btn' onClick={() => generateLink()}>
        Generate Link
      </button>

      {link !== '' ? (
        <>
          <p className='gen-link'>{link}</p>
          <Link to={`birthday/${name}/${day}/${month}`}>
            <button className='btn'>Visit Link</button>
          </Link>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Generate;