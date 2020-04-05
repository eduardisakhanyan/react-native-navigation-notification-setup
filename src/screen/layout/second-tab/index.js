import SecondTabScreen from './second-tab-screen';
import {connect} from 'react-redux';
import {authActions} from '../../../store/action/auth.action';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authReducer.loggedIn,
  };
};

export default connect(mapStateToProps)(SecondTabScreen);
