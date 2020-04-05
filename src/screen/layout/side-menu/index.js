import SideMenuScreen from './side-menu-screen';
import {connect} from 'react-redux';
import {authActions} from '../../../store/action/auth.action';

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(authActions.signOutRequest()),
  };
};

export default connect(null, mapDispatchToProps)(SideMenuScreen);
