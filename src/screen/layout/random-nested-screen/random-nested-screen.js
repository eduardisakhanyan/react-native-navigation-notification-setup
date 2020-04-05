import React from 'react';
import {View, Text} from 'react-native';

import styles from './random-nested-screen.style';

class RandomNestedScreen extends React.Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Random Screen',
        },
      },
    };
  }

  render() {
    const {cameFrom} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          I'm a random page. You just pushed me into stack from {cameFrom}.
        </Text>
      </View>
    );
  }
}

export default RandomNestedScreen;
