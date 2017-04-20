import React, { Component } from 'react';
import styles from './Alert.css';

export default class Alert extends Component {
  render () {
    const alertStyles = [
      styles.container,
      styles[this.props.type],
      this.props.className
    ].join(' ');
    return (
      <div className={alertStyles} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

Alert.defaultProps = {
  type: 'danger',
  onClick: () => {}
};
