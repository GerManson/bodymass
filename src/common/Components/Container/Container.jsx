import React, { Component } from 'react';
import styles from './Container.css';

export default class Container extends Component {
  render () {
    return (
      <div className={`${styles.container} ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

Container.defaultProps = {
  className: ''
};
