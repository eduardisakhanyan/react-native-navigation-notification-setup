import {persistStore} from 'redux-persist';
import {Navigation} from 'react-native-navigation';

import {
  registerScreens,
  startAppInAuthState,
  startAppInLayoutState,
} from './screen';
import {store} from './store';

function startApp() {
  registerScreens(store);
  Navigation.events().registerAppLaunchedListener(() => {
    /**
     * Store@ sync-enq anum AsyncStoragei het
     */
    persistStore(store, null, async () => {
      const state = store.getState();
      if (!state.authReducer.loggedIn) {
        await startAppInAuthState();
      } else {
        await startAppInLayoutState();
      }
    });
  });
}

startApp();
