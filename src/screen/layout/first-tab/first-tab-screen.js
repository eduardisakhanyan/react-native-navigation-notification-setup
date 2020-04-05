import React from 'react';
import {View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import messaging from '@react-native-firebase/messaging';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {NavigationWrapper} from '../../navigation';
import {Button} from '../../../component';
import styles from './first-tab-screen.style';

class FirstTabScreen extends React.Component {
  static options() {
    return {
      topBar: {
        visible: false,
      },
    };
  }

  _checkNotificationPermissions = async () => {
    const hasPermission = await messaging().hasPermission();
    if (!hasPermission) {
      const settings = await messaging().requestPermission();
      if (settings) {
        console.log('Settings', settings);
      }
    }
  };

  _createNotificationListeners = async () => {
    /**
     * Mi hat demic stugum enq App@ bacvela prosto te cherez notificationi vra sxmelu
     */
    const notification = await messaging().getInitialNotification();
    if (notification) {
      this._handleNotification(notification.notification);
    }

    /**
     * Dranic heto listenerner@ chpcnum enq
     */

    /**
     * Es listener@ ashxatuma ete foreground rejimum es
     * Foreground is appi mej es :)
     */
    this.listenForeground = messaging().onMessage(async ({notification}) => {
      this._handleNotification(notification);
    });

    /**
     * Es listener@ ashxatuma ete background rejimum es
     * Background is app@ pakel es baic kill ches are :)
     */
    this.listenBackground = messaging().onNotificationOpenedApp(
      async ({notification}) => {
        this._handleNotification(notification);
      },
    );
  };

  _handleNotification = async (notification) => {
    /**
     * Notification object unes stex mej@ infoya xar@ backic gali vonc petqa handle es anum uje!
     */
    await NavigationWrapper.push('ReceivedNotificationScreen', {
      notificationTitle: notification.title,
      notificationBody: notification.body,
    });
  };

  _navigateToRandomScreen = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'RandomNestedScreen',
        passProps: {
          cameFrom: 'First Tab',
        },
      },
    });
  };

  async componentDidMount() {
    /**
     * Ios@ notification stanalu hamar permission pti uzes useric explicit.
     */
    await this._checkNotificationPermissions();
    /**
     * Listenerner@ stex stexcum enq.
     */
    await this._createNotificationListeners();
  }

  componentWillUnmount() {
    /**
     * Chenq moranum iranc hanenq!
     */
    if (this.listenBackground) {
      this.listenBackground();
    }
    if (this.listenForeground) {
      this.listenForeground();
    }
  }

  render() {
    const {name} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome {name}</Text>
        <Button onPress={this._navigateToRandomScreen} title={'Push me'} />
      </View>
    );
  }
}

export default FirstTabScreen;
