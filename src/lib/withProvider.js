import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

const withProvider =
  Component =>
  (props = {}) =>
    (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );

export default withProvider;
