import React from 'react';
import styles from './ColorBox.module.scss';
import { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState(() => {
    return localStorage.getItem('color') || 'deeppink';
  });

  const getRanDomColor = () => {
    const listColor = ['deepping', 'green', 'blue', 'yellow', 'red'];
    let index = Math.trunc(Math.random() * 5);
    return listColor[index];
  }

  const handeChangeColor = () => {
    let changeColor = getRanDomColor()
    setColor(changeColor);
    localStorage.setItem('color', changeColor);
  }

  return (
    <div
      className={styles.colorbox}
      style={{ backgroundColor: color }}
      onClick={handeChangeColor} />
  )
};

export default ColorBox;