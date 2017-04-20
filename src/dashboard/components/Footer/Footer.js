import React, { Component } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {
  render () {
    return (
      <div className={styles.container}>
        <div>&copy; <strong>Body Mass</strong></div>
        <div>
          Todos los derechos reservados.
        </div>
      </div>
    );
  }
}
