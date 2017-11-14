import React from 'react';
import { Welcome } from './containers/Welcome'
import { Provider } from 'react-redux';
import { store } from './store';

export const Root = () => (
  <Provider store={store}>
    <Welcome />
  </Provider>
);