import React, { useState, useEffect } from 'react';
import './style.css';
import useStorage from './useStorage';

export default function App() {
  const [value, setValue] = useStorage('', 'name');
  return (
    <div>
      Name :{' '}
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
}
