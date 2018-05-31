/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
View,
StyleSheet,
YellowBox
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';


import Home from './components/home';
import Summary from './components/summary';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="home" component = {Home} title='Home' />
            <Scene key="summary" component = {Summary} title='Summary' />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
