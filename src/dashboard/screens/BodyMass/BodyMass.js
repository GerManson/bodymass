import React, { Component } from 'react';
import { InputText, Button, Alert, FormGroup } from '../../../common/Components';
import styles from './BodyMass.css';
import Progress from '../../components/Progress/Progress';

export default class BodyMass extends Component {
  constructor (props) {
    super(props);
    this.state = { mass: '', height: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
    this.submitBodyMass = this.submitBodyMass.bind(this);
    this.percentage = this.percentage.bind(this);
  }
  submitBodyMass (event) {
    event.preventDefault();
    this.props.submitBodyMass(this.state.mass, this.state.height);
  }
  handleInputChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }
  renderAlert () {
    if (this.props.error) {
      return (
        <div className={styles.formRow}>
          <Alert className={styles.alert} onClick={this.props.dismissError}>{this.props.error}</Alert>
          <hr />
        </div>
      );
    }
    return null;
  }
  renderResult () {
    if (this.props.bmi) {
      let percent = this.percentage(this.props.bmi.bmi);
      return (
        <div>
          <h2>{this.props.bmi.bmi} BMI - {this.props.bmi.category}</h2>
          <Progress bmi={this.props.bmi.bmi} percent={percent} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Resultado</h2>
          <Progress bmi='0' percent='0' />
        </div>
      );
    }
  }
  percentage (bmi) { // Calculates percentage if 100% is 40 BMI.
    let percentage = 0;
    percentage = Math.round((bmi * 100) / 40);
    if (percentage > 100) percentage = 100;
    return percentage;
  }
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h1>Calcula tu Índice de Masa Corporal</h1>
          <p className={styles.lead}>
            Llena los campos de abajo y presiona el boton "Calcular BMI" para saber tu masa corporal.
          </p>
          <hr />
          <form onSubmit={this.submitBodyMass} className={styles.form}>
            <div className={styles.formRow}>
              <FormGroup className={styles.formGroup}>
                <label>Peso <small>(Kg)</small></label>
                <InputText name='mass' placeholder='Kg' onChange={this.handleInputChange} />
              </FormGroup>
              <FormGroup className={styles.formGroup}>
                <label>Estatura <small>(Mts)</small></label>
                <InputText name='height' placeholder='Metros' onChange={this.handleInputChange} />
              </FormGroup>
            </div>
            <div className={styles.formAction}>
              <Button buttonType='orange'>
                Calcular BMI
              </Button>
              {this.renderAlert()}
            </div>
          </form>
        </div>
        <div className={styles.rightColumn}>
          {this.renderResult()}
        </div>
      </div>
    );
  }
}
