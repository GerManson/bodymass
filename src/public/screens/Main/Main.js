import React, { Component } from 'react';
import styles from './Main.css';

export default class Main extends Component {
  render () {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
