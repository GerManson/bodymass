import React, { Component } from 'react';
import styles from './List.css';

export default class List extends Component {
  render () {
    const style = [
      styles.list,
      this.props.className
    ].join(' ');
    return (
      <ul className={style}>
        {this.props.children}
      </ul>
    );
  }
}

List.defaultProps = {
  className: ''
};
