import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {persistReducer} from 'redux-persist';

import rootReducer from './reducer';
import rootSaga from './saga';

const saga = createSagaMiddleware();
const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
  blacklist: [
    //Stex mnacacnenq grelu vortev menak authReducernenq uzum vor persist ani
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(saga, logger));

saga.run(rootSaga);

export {store};
