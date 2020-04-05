import FirstTabScreen from './first-tab-screen';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    name: state.authReducer.name,
  };
};

export default connect(mapStateToProps)(FirstTabScreen);
