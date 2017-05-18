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
  constructor(props){
    super(props)
    this.state = {
      amZug: 'X',
      feld: ['','X','','O','','','O','','']
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Tic Tac Toe</Text>
        <View style={styles.row}>
          <Field inhalt={this.state.feld[0]}/>
          <Field inhalt={this.state.feld[1]}/>
          <Field inhalt={this.state.feld[2]}/>
        </View>
        <View style={styles.row}>
          <Field inhalt={this.state.feld[3]}/>
          <Field inhalt={this.state.feld[4]}/>
          <Field inhalt={this.state.feld[5]}/>
        </View>
        <View style={styles.row}>
          <Field inhalt={this.state.feld[6]}/>
          <Field inhalt={this.state.feld[7]}/>
          <Field inhalt={this.state.feld[8]}/>
        </View>
      </View>
    );
  }
}

function Field(props){
  return (
    <View style={styles.feld}>
      <Text>{props.inhalt}</Text>
    </View>
  )
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
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);
