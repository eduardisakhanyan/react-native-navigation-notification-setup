import {Navigation} from 'react-native-navigation';

/**
 * Esi Wrappera vor Notification galuc imananq vortex enq @tex push anenq
 */
export class NavigationWrapper {
  static setComponentId(componentId) {
    this._componentId = componentId;
  }
  static async push(routeName, props) {
    await Navigation.push(this._componentId, {
      component: {name: routeName, passProps: {...props}},
    });
  }
}
