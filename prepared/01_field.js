/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TicTacToe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Tic Tac Toe</Text>
        <View style={styles.row}>
          <View style={styles.feld}></View>
          <View style={styles.feld}></View>
          <View style={styles.feld}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.feld}></View>
          <View style={styles.feld}></View>
          <View style={styles.feld}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.feld}></View>
          <View style={styles.feld}></View>
          <View style={styles.feld}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  feld: {
    backgroundColor: 'lightgrey',
    width: 50,
    height: 50,
    margin: 5
  },
  row: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);
