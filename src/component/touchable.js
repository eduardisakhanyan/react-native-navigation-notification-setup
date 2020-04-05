import React, {Component} from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

class Touchable extends Component {
  render() {
    const {children, ...rest} = this.props;

    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback {...rest}>
          {children}
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={'transparent'}
        {...rest}>
        {children}
      </TouchableHighlight>
    );
  }
}

export {Touchable};
