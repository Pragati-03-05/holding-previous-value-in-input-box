import React, { useState, useEffect } from 'react';
import './style.css';

export default function useStorage(initialValue, key) {
  const [value, setValue] = useState(() => {
    console.log('KKKKKKKKKKKKKKKK');
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    else {
      return initialValue;
    }
  });

  useEffect(() => {
    console.log('TTTTTTTTTTTTTTTTT');
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  console.log('22222222222', value);
  return [value, setValue];
}
