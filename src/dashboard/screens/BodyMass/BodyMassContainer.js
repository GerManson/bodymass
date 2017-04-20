import { connect } from 'react-redux';
import BodyMass from './BodyMass';
import * as errorActions from '../../state/error/errorActions';
import * as userActions from '../../state/user/userActions';

const mapStateToProps = (state, ownProps) => {
  return {
    error: state.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitBodyMass: (mass, height) => dispatch(userActions.bodyMassRequest(mass, height)),
    dismissError: () => dispatch(errorActions.dismissError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyMass);
