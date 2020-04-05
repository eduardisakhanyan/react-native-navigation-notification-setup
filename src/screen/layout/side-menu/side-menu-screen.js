import React from 'react';
import {Text, View} from 'react-native';

import {Button} from '../../../component';
import styles from './side-menu-screen.style';

class SideMenuScreen extends React.Component {
  render() {
    const {signOut} = this.props;
    return (
      <View style={styles.container}>
        <Button onPress={signOut} title={'Sign Out'} />
      </View>
    );
  }
}

export default SideMenuScreen;
