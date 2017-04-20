import React, { Component } from 'react';
import styles from './TopBar.css';
import Logo from '../Logo/Logo';
import UserMenuContainer from '../UserMenu/UserMenuContainer';

export default class TopBar extends Component {
  render () {
    return (
      <div className={styles.container}>
        <Logo />
        <UserMenuContainer />
      </div>
    );
  }
}
