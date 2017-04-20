import { connect } from 'react-redux';
import * as userActions from '../../state/user/userActions';
import UserMenu from './UserMenu';

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(userActions.logoutRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
