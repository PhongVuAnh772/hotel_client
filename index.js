import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import App from './App';
import store from './app/store';



const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
