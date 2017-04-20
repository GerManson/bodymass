import React, { Component } from 'react';
import styles from './Logo.css';

export default class Logo extends Component {
  render () {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        <img src='/public/img/logo.png' className={styles.main_logo} /> Body Mass
      </div>
    );
  }
}
