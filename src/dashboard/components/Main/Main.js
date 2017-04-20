import React, { Component } from 'react';
import styles from './Main.css';
import { Container } from '../../../common/Components';
import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';

export default class Main extends Component {
  componentWillMount () {
    this.props.getUserData();
  }
  render () {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.dashboard}>
            <TopBar />
            <div className={styles.mainContent}>
              {this.props.children}
            </div>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }
}
