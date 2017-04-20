import React, { Component } from 'react';
import styles from './UserMenu.css';
import { Dropdown, DropdownSeparator } from '../../../common/Components';
import Avatar from 'react-avatar';

export default class UserMenu extends Component {
  constructor (props) {
    super(props);
    this.state = { };
    this.logout = this.logout.bind(this);
  }

  logout (event) {
    event.preventDefault();
    this.props.logout();
  }

  render () {
    if (!this.props.user.name) return null;
    const containerStyle = [
      styles.container
    ].join(' ');
    const overlay = [
      <div className={styles.link} key='email'>
        {this.props.user && this.props.user.email}
      </div>,
      <DropdownSeparator key='separator' />,
      <a key='logout' className={styles.link} href='#' onClick={this.logout}>Cerrar sesión</a>
    ];
    return (
      <div className={containerStyle}>
        <Dropdown overlay={overlay}>
          <div className={styles.userMenu}>
            <i className='fa fa-angle-down' />
          </div>
        </Dropdown>
      </div>
    );
  }
}
