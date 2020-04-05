import React from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {Button} from '../../../component';
import styles from './forgot-password-screen.style';

class ForgotPasswordScreen extends React.Component {
  _goBack = () => {
    Navigation.pop(this.props.componentId);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Injes xarnve irar password chka :D</Text>
        <Button onPress={this._goBack} title={'Go back to sign in'} />
      </View>
    );
  }
}

export default ForgotPasswordScreen;
