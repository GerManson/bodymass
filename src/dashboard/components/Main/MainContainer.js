import { connect } from 'react-redux';
import Main from './Main';
import * as userActions from '../../state/user/userActions';

const mapStateToProps = (state, ownProps) => {
  return {
    activeTab: ownProps.location.pathname.split('/')[2]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(userActions.authRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
