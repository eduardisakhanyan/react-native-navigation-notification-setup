import React from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {Button} from '../../../component';
import {startAppInAuthState} from '../../index';
import styles from './second-tab-screen.style';

class SecondTabScreen extends React.Component {
  static options() {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.loggedIn && !this.props.loggedIn) {
      await startAppInAuthState();
    }
  }

  _openSideMenu = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        right: {
          visible: true,
        },
      },
    });
  };

  _navigateToRandomScreen = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'RandomNestedScreen',
        passProps: {
          cameFrom: 'Second Tab',
        },
        options: {
          sideMenu: {
            right: {
              enabled: false,
            },
          },
        },
      },
    });
  };

  render() {
    const {signOut} = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Push me and then just touch me</Text>
          <Button onPress={this._navigateToRandomScreen} title={'Push me'} />
        </View>
        <View>
          <Text style={styles.text}>Open Side Menu</Text>
          <Button onPress={this._openSideMenu} title={'Open Side Menu'} />
        </View>
      </View>
    );
  }
}

export default SecondTabScreen;
