import React, { Component } from 'react';
import moment from 'moment';
import styles from './Subscription.css';
import { Link } from 'react-router';
import { Button, InputText } from '../../../common/Components';
import periodUtil from '../../util/periodUtil';

export default class Subscription extends Component {
  constructor (props) {
    super(props);
    this.state = { quantity: 0 };
    this.onInputChange = this.onInputChange.bind(this);
  }
  componentDidMount () {
    console.log('didmount', this.props.subscription.quantity);
    this.setState({ quantity: this.props.subscription.quantity });
  }
  onInputChange (e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render () {
    const s = this.props.subscription;
    if (this.props.editable) {
      return (
        <div className={styles.base}>
          <div className={styles.detailsContainer}>
            <ul className={styles.details}>
              <li>
                <div className={styles.field}>Cliente</div>
                <div className={styles.value}>{s.client.legal_name}</div>
              </li>
              <li>
                <div className={styles.field}>Fecha de creación</div>
                <div className={styles.value}>{moment(s.created_at).format('lll')}</div>
              </li>
            </ul>
            <div className={styles.quantity}>
              <div className={styles.field}>Suscripciones</div>
              <InputText
                type='number'
                name='quantity'
                step='1'
                min='1'
                className={styles.quantityInput}
                value={this.state.quantity}
                onChange={this.onInputChange} />
              <div>
                ${s.plan.price} / {periodUtil.periodicity(s.plan.period)}
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <span className={styles.cancel}>
              Cancelar suscripción
            </span>
            <Button buttonType='primary'>
              Guardar cambios
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <li>
          <Link to={`/dashboard/subscriptions/${s.id}`} className={styles.base}>
            <span className={styles.planName}>
              {s.plan.name}
            </span>
            <span>
              {moment(s.created_at).format('lll')}
            </span>
          </Link>
        </li>
      );
    }
  }
}

Subscription.defaultProps = {
  subscription: null,
  editable: false
};
