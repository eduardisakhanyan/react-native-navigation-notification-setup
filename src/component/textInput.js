import React, {Component} from 'react';
import {StyleSheet, TextInput as RCTextInput, View, Text} from 'react-native';

class TextInput extends Component {
  render() {
    const {label} = this.props;

    return (
      <View>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={styles.container}>
          <RCTextInput
            {...this.props}
            underlineColorAndroid="transparent"
            placeholderTextColor={'#A0A0A0'}
            style={styles.textInput}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderWidth: 1,
    borderColor: '#500004',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
  label: {
    color: '#500004',
    marginLeft: 15,
  },
});

export {TextInput};
