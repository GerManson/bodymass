import React, { Component } from 'react';
import styles from './Service.css';

export default class Service extends Component {
  render () {
    const s = this.props.service;
    return (
      <div className={styles.base} onClick={() => this.props.onClick(s)}>
        <img src={`/public/img/services/${s.name.toLowerCase().replace(/ /g, '-')}-icon.png`} />
        {s.name}
      </div>
    );
  }
}

Service.defaultProps = {
  service: {},
  onClick: () => {}
};
