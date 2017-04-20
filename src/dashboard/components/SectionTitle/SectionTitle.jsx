import React, { Component } from 'react';
import styles from './SectionTitle.css';

export default class SectionTitle extends Component {
  render () {
    return (
      <div className={styles.base}>{this.props.children}</div>
    );
  }
}
