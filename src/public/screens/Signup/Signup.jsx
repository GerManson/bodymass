import React, { Component } from 'react';
import { Link } from 'react-router';
import { InputText, Button, Alert, FormGroup } from '../../../common/Components';
import styles from './Signup.css';

export default class Signup extends Component {
  constructor (props) {
    super(props);
    this.state = { name: '', email: '', password: '', confirm: '' };
    this.submitSignup = this.submitSignup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }
  submitSignup (event) {
    event.preventDefault();
    this.props.signup(this.state.name, this.state.email, this.state.password, this.state.confirm);
  }
  handleInputChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  renderAlert () {
    if (this.props.error) {
      return (
        <Alert className={styles.alert} onClick={this.props.dismissError}>{this.props.error}</Alert>
      );
    }
    return null;
  }
  render () {
    return (
      <div className={styles.container}>
        <img src='public/img/logo.png' className={styles.main_logo} />
        <form onSubmit={this.submitSignup} className={styles.form}>
          <h2 className={styles.title}>Abre tu cuenta de BodyMass</h2>
          {this.renderAlert()}
          <FormGroup>
            <InputText name='name' placeholder='Nombre Completo' onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <InputText name='email' placeholder='Correo Electrónico' onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <InputText name='password' placeholder='Contraseña' type='password' onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <InputText name='confirm' placeholder='Confirma Contraseña' type='password' onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Button buttonType='primary' block>
              Crear cuenta
            </Button>
          </FormGroup>
          <FormGroup className={styles.sign_up}>
            <p>
              ¿Ya tienes tu cuenta? <Link to='/'>Inicia Sesión</Link>
            </p>
          </FormGroup>
        </form>

        <div className={styles.footer}>
          <div className={styles.copyright}>
            © 2017 BodyMass<br />
            <small><i>Todos los derechos reservados.</i></small>
          </div>
        </div>
      </div>
    );
  }
}
