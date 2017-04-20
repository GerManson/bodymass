import React, { Component } from 'react';
import styles from './Provider.css';

export default class Provider extends Component {
  render () {
    const p = this.props.provider;
    return (
      <div onClick={() => this.props.onClick(p)} className={styles.base}>
        <img src={`/public/img/providers/${p.name.toLowerCase().replace(/ /g, '-')}-icon.png`} />
        {p.name}
      </div>
    );
  }
}

Provider.defaultProps = {
  provider: {},
  onClick: () => {}
};
