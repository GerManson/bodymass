import { connect } from 'react-redux';
import Signup from './Signup';
import * as userActions from '../../state/user/userActions';
import * as errorActions from '../../state/error/errorActions';

const mapStateToProps = (state) => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (name, email, password, confirm) => dispatch(userActions.signupRequest(name, email, password, confirm)),
    dismissError: () => dispatch(errorActions.dismissError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
