/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { observer, Provider } from 'mobx-react';
import SplashActivity from './src/scene/SplashActivity';

const Route = createStackNavigator({
  Splaz: {
    screen: SplashActivity,
    navigationOptions: { header: null }
  },
}, {
  initialRouteName: 'Splaz',
})

const AppContainer = createAppContainer(Route)

@observer
class App extends Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}

export default App