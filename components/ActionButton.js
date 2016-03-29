'use strict';

const styles = require('../styles/core.js');
const constants = styles.constants

import React, {
  Component,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;