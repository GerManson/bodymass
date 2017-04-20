import React, { Component } from 'react';
import styles from './DropdownLink.css';
import { Link } from 'react-router';

export default class DropdownLink extends Component {
  render () {
    return (
      <Link className={styles.link} to={this.props.to}>
        {this.props.children}
      </Link>
    );
  }
}

DropdownLink.propTypes = {
  to: React.PropTypes.string
};
