import React, { Component } from 'react';
import { InputText, Button, Alert, FormGroup } from '../../../common/Components';
import styles from './BodyMass.css';
import Progress from '../../components/Progress/Progress';

export default class BodyMass extends Component {
  constructor (props) {
    super(props);
    let bmi = {
      bmi: 0,
      category: ''
    };
    this.state = { bmi, mass: '', height: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
    this.submitBodyMass = this.submitBodyMass.bind(this);
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
            {this.renderAlert()}
            <div className={styles.formAction}>
              <Button buttonType='orange'>
                Calcular BMI
              </Button>
            </div>
          </form>
        </div>
        <div className={styles.rightColumn}>
          <h2>{this.props.bmi.bmi} BMI - {this.props.bmi.category}</h2>
          <p className={styles.lead}>
            Obesidad.
          </p>
          <Progress />
        </div>
      </div>
    );
  }
}
