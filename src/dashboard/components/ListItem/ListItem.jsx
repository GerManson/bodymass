import React, { Component } from 'react';
import styles from './ListItem.css';

export default class ListItem extends Component {
  render () {
    const style = [
      styles.listItem,
      this.props.className
    ].join(' ');
    return (
      <li className={style}>
        {this.props.children}
      </li>
    );
  }
}

ListItem.defaultProps = {
  className: ''
};
