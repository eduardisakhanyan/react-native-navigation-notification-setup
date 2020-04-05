import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Touchable} from './touchable';

class Button extends Component {
  render() {
    const {onPress, title, disabled} = this.props;

    return (
      <Touchable disabled={disabled} onPress={onPress}>
        <View style={[styles.container, disabled && styles.disabled]}>
          <Text style={[styles.buttonText]}>{title}</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#500004',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 7,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  disabled: {
    backgroundColor: '#877B7B',
  },
});

export {Button};
