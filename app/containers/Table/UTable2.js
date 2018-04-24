import React from 'react';
import namor from 'namor';
import './index.css';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newRow = () => {
  const statusChance = Math.random();
  return {
    category: namor.generate({ words: 1, numbers: 0 }),
    question: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33 ? 'complicated' : 'single'
  };
};

export function makeData(len = 6) {
  return range(len).map(d => {
    return {
      ...newRow(),
      children: range(10).map(newRow)
    };
  });
}

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
    Lytics copyright 2018
    <br />
  </div>;

export const Tips = () =>
  <div style={{ textAlign: 'center' }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
