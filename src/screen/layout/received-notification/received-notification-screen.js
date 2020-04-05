import React from 'react';
import {View, Text} from 'react-native';

class ReceivedNotificationScreen extends React.Component {
  render() {
    const {notificationTitle, notificationBody} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>I will show you the notification</Text>
        <Text>Title: {notificationTitle}</Text>
        <Text>Body: {notificationBody}</Text>
      </View>
    );
  }
}

export default ReceivedNotificationScreen;
