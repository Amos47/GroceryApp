'use strict';

const styles = require('../styles/core.js');
const constants = styles.constants

import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class ListItem extends Component {
  render(){
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;