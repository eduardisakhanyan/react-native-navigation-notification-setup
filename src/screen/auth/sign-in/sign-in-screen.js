import React from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {startAppInLayoutState} from '../../index';
import {Button, TextInput, Touchable} from '../../../component';
import styles from './sing-in-screen.style';

class SignInScreen extends React.Component {
  state = {
    name: '',
  };

  async componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      await startAppInLayoutState();
    }
  }

  _setName = (name) => {
    this.setState({
      name,
    });
  };

  _navigateToForgotPassword = () => {
    Navigation.push(this.props.componentId, {
      component: {name: 'ForgotPasswordScreen'},
    });
  };

  render() {
    const {name} = this.state;
    const {signIn} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this._setName}
          label={'Name'}
          value={name}
          placeholder={'Enter Your Name'}
        />
        <Button
          onPress={signIn.bind(null, name)}
          title={'Sign In'}
          disabled={!name}
        />
        <View style={styles.textContainer}>
          <Touchable onPress={this._navigateToForgotPassword}>
            <Text style={styles.link}>{'Click Here'}</Text>
          </Touchable>
          <Text style={styles.text}>{' if you forgot the password'}</Text>
        </View>
      </View>
    );
  }
}

export default SignInScreen;
