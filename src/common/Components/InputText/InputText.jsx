import React, { Component } from 'react';
import styles from './InputText.css';

export default class InputText extends Component {
  render () {
    return (
      <input {...this.props} className={`${styles.input} ${this.props.className}`} />
    );
  }
}

InputText.defaultProps = {
  type: 'text',
  className: ''
};
