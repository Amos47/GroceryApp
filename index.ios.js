'use strict';

const Firebase = require('firebase');
const styles = require('./styles/core.js');

import React, {
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';

class GroceryApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
