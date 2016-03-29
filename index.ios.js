'use strict';

const Firebase = require('firebase');
const FirebaseRef = 'https://chores-list.firebaseio.com'

const styles = require('./styles/core');
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');

import React, {
  AppRegistry,
  Component,
  Text,
  ListView,
  View,
  AlertIOS,
} from 'react-native';

class GroceryApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    this.itemsRef = new Firebase(FirebaseRef+'/items');
  }

  listenForItems(itemsRef){
    itemsRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key()
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('canceled new item'),
          style: 'cancel',
        },
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          },
        },
      ],
      'plain-text'
    );
  }

  _removeItem(item){
    AlertIOS.alert(
      'Complete Task',
      null,
      [
        {text: 'Complete',  onPress: (text) => this.itemsRef.child(item._key).remove()},
        {text: 'Cancel', onPress: (text) => console.log("Cancel")}
      ]
    )
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  _renderItem(item){
    return (
      <ListItem item={item} onPress={()=> this._removeItem(item)} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Grocery List" />

        <ListView
          style={styles.listview}
          dataSource={this.state.dataSource}
          renderRow={(item) => this._renderItem(item)} />

        <ActionButton title="Add" onPress={()=> this._addItem()} />
      </View>
    );
  }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
