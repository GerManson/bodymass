import React, { Component } from 'react';
import { Link } from 'react-router';
import { InputText, Button, Alert, FormGroup } from '../../../common/Components';
import styles from './Login.css';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = { email: '', password: '' };
    this.submitLogin = this.submitLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
  }
  submitLogin (event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
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
        <form onSubmit={this.submitLogin} className={styles.form}>
          <h2 className={styles.title}>Inicia sesión a tu cuenta</h2>
          {this.renderAlert()}
          <FormGroup>
            <InputText name='email' placeholder='Correo electrónico' onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <InputText name='password' placeholder='Contraseña' type='password' onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Button buttonType='primary' block>
              Iniciar sesión
            </Button>
          </FormGroup>
          <FormGroup className={styles.sign_up}>
            <p>
              ¿Nuevo en BodyMass? <Link to='/signup'>Crea una cuenta</Link>
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
