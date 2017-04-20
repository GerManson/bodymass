import { connect } from 'react-redux';
import Login from './Login';
import * as userActions from '../../state/user/userActions';
import * as errorActions from '../../state/error/errorActions';

const mapStateToProps = (state) => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(userActions.loginRequest(email, password)),
    dismissError: () => dispatch(errorActions.dismissError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
