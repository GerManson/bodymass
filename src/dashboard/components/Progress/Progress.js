import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import styles from './Progress.css';

export default class Progress extends Component {
  render () {
    return (
      <div className={styles.container}>
        <Circle {...this.props} strokeWidth='10' strokeColor='#ff7575' />
        <div className={styles.percentage}>
          {this.props.percent} BMI
        </div>
      </div>
    );
  }
}

Progress.defaultProps = {
  percent: 0
};
