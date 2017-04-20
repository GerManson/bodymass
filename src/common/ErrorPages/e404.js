import React, { Component } from 'react';
import styles from './e404.css';

export default class e404 extends Component {
  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <a href='javascript:history.back()'>Go back</a>
      </div>
    );
  }
}
