'use strict';

const styles = require('../styles/core.js');
const constants = styles.constants

import React, {
  Component,
  Text,
  View,
} from 'react-native';

class StatusBar extends Component {
  render(){
    return (
      <View>
        <View style={styles.statusBar}></View>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

module.exports = StatusBar;