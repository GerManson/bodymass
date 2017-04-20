import React, { Component } from 'react';
import styles from './FormGroup.css';

export default class FormGroup extends Component {
  render () {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

FormGroup.defaultProps = {
  className: ''
};
