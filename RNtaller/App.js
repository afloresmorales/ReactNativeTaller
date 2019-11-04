/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {initStore} from './app/src/redux/store';
import {Provider} from 'react-redux';
import { Tabs, Router, Stack, Scene } from 'react-native-router-flux';
import HomeScreen from './app/src/pages/HomeScreen';
import MoviesScreen from './app/src/pages/MoviesScreen';
import RestaurantsScreen from './app/src/pages/RestaurantsScreen';

const store = initStore();
const App: () => React$Node = () => {
  return (
  <Provider store={store}>
      <Router>
          <Tabs>
          <Stack key="Home">
            <Scene key="home" component={HomeScreen} title="Home"/>
            <Scene key="movies" component={MoviesScreen} title="Movies"/>
          </Stack>
          <Stack key="Restaurants">
              <Scene key="restaurant" component={RestaurantsScreen} title="Restaurants" />
          </Stack>
          </Tabs>
      </Router>
  </Provider>
    );
};

export default App;
