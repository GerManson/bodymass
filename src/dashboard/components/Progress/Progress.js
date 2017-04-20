import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import styles from './Progress.css';

export default class Progress extends Component {
  render () {
    return (
      <div className={styles.container}>
        <Circle percent='50' strokeWidth='10' strokeColor='#ff7575' />
        <div className={styles.percentage}>
          50 BMI
        </div>
      </div>
    );
  }
}
