import React, { Component } from 'react';
import styles from './Button.css';

export default class Button extends Component {
  render () {
    const buttonStyles = [
      styles.base,
      styles[this.props.buttonType],
      this.props.block ? styles.block : '',
      this.props.className
    ].join(' ');
    return (
      <button type={this.props.type} className={buttonStyles} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  buttonType: 'default',
  className: '',
  block: '',
  type: 'submit'
};
