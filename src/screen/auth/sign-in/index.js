import SignInScreen from './sign-in-screen';
import {connect} from 'react-redux';
import {authActions} from '../../../store/action/auth.action';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authReducer.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (name) => dispatch(authActions.signInRequest(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
