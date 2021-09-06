import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';
import AsyncStorage from '@react-native-async-storage/async-storage';

import epics from './epics';
import reducers from './reducers';

const epicMiddleware = createEpicMiddleware({
  dependencies: {},
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(epics);

persistStore(store, {
  storage: AsyncStorage,
});

export default store;
