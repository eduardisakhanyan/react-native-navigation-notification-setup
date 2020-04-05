import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import messaging from '@react-native-firebase/messaging';

import {NavigationWrapper} from './navigation';

import SignInScreen from './auth/sign-in';
import ForgotPasswordScreen from './auth/forgot-password';

import FirstTabScreen from './layout/first-tab';
import SecondTabScreen from './layout/second-tab';
import RandomNestedScreen from './layout/random-nested-screen';
import ReceivedNotificationScreen from './layout/received-notification';
import SideMenuScreen from './layout/side-menu';

/**
 * Screener@ register enq anum Redux-ov vor heto Navigation Libin tanq
 * @param store
 */
function registerScreens(store) {
  Navigation.registerComponentWithRedux(
    'SignInScreen',
    () => SignInScreen,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'ForgotPasswordScreen',
    () => ForgotPasswordScreen,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'FirstTabScreen',
    () => FirstTabScreen,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'SecondTabScreen',
    () => SecondTabScreen,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'RandomNestedScreen',
    () => RandomNestedScreen,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'ReceivedNotificationScreen',
    () => ReceivedNotificationScreen,
    Provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'SideMenuScreen',
    () => SideMenuScreen,
    Provider,
    store,
  );
}

/**
 * App@ sksuma Login stateum
 */
async function startAppInAuthState() {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SignInScreen',
            },
          },
        ],
        options: {
          topBar: {
            visible: 'false',
          },
        },
      },
    },
  });
}

/**
 * App@ sksuma himnakan stateum(Login Exac enq)
 */
async function startAppInLayoutState() {
  /**
   * Ete login exac enq pti sksenq notificationner spasel.
   */
  await messaging().registerDeviceForRemoteMessages();
  /**
   * Esi notification galuc vor imananq urenq amen navigationi jamanak componentId pahum enq.
   */
  Navigation.events().registerComponentDidAppearListener(({componentId}) => {
    NavigationWrapper.setComponentId(componentId);
  });
  /**
   * Prosto icon-em vercnum vor dnem sirun ereva :D
   */
  Promise.all([
    MaterialIcons.getImageSource('favorite', 25),
    MaterialIcons.getImageSource('build', 25),
  ]).then(async ([firstIcon, secondIcon]) => {
    /**
     * Uzumenq Vor topBar@ vortex ereva misht title u backButton fixac guyni linen
     * mnacac@ uje amen komponent iran@ kasi
     */
    Navigation.setDefaultOptions({
      topBar: {
        title: {
          color: '#500004',
        },
        backButton: {
          color: '#500004',
        },
      },
    });
    /**
     * Bottom Tab-enq sarqum vor@ uni 2 tab
     * 1) sovorakan stack
     * 2) sideMenu center - sovorakan stack, right - sovorakan component
     */
    await Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            bottomTabs: {
              animate: true,
              backgroundColor: '#808080',
            },
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'FirstTabScreen',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'First Tab',
                    fontSize: 15,
                    textColor: '#000000',
                    iconColor: '#000000',
                    selectedTextColor: '#FFFFFF',
                    selectedIconColor: '#FFFFFF',
                    icon: firstIcon,
                  },
                },
              },
            },
            {
              sideMenu: {
                center: {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'SecondTabScreen',
                        },
                      },
                    ],
                    options: {
                      bottomTab: {
                        text: 'Second Tab',
                        fontSize: 15,
                        textColor: '#000000',
                        iconColor: '#000000',
                        selectedTextColor: '#FFFFFF',
                        selectedIconColor: '#FFFFFF',
                        icon: secondIcon,
                      },
                    },
                  },
                },
                right: {component: {name: 'SideMenuScreen'}},
              },
            },
          ],
        },
      },
    });
  });
}

export {registerScreens, startAppInAuthState, startAppInLayoutState};
