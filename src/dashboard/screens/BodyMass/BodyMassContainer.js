import { connect } from 'react-redux';
import BodyMass from './BodyMass';
import * as errorActions from '../../state/error/errorActions';
import * as bmiActions from '../../state/bmi/bmiActions';

const mapStateToProps = (state, ownProps) => {
  return {
    bmi: state.bmi,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitBodyMass: (mass, height) => dispatch(bmiActions.bodyMassRequest(mass, height)),
    dismissError: () => dispatch(errorActions.dismissError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyMass);
