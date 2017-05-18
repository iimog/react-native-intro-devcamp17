import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

export default class TicTacToe extends Component {
  constructor(props){
    super(props)
    this.state = {
      amZug: 'X',
      feld: ['','','','','','','','','']
    }
  }
  handlePress(index){
    let currentFeld = [...this.state.feld]
    let currentZug = this.state.amZug
    if(currentFeld[index] === ''){
      currentFeld[index] = currentZug
      currentZug = (currentZug === 'X' ? 'O' : 'X')
      this.setState({amZug: currentZug, feld: currentFeld})
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Tic Tac Toe</Text>
        <View style={styles.row}>
          <Field inhalt={this.state.feld[0]} onPress={() => this.handlePress(0)}/>
          <Field inhalt={this.state.feld[1]} onPress={() => this.handlePress(1)}/>
          <Field inhalt={this.state.feld[2]} onPress={() => this.handlePress(2)}/>
        </View>
        <View style={styles.row}>
          <Field inhalt={this.state.feld[3]} onPress={() => this.handlePress(3)}/>
          <Field inhalt={this.state.feld[4]} onPress={() => this.handlePress(4)}/>
          <Field inhalt={this.state.feld[5]} onPress={() => this.handlePress(5)}/>
        </View>
        <View style={styles.row}>
          <Field inhalt={this.state.feld[6]} onPress={() => this.handlePress(6)}/>
          <Field inhalt={this.state.feld[7]} onPress={() => this.handlePress(7)}/>
          <Field inhalt={this.state.feld[8]} onPress={() => this.handlePress(8)}/>
        </View>
        <Text>Am Zug ist '{this.state.amZug}'</Text>
        <TouchableWithoutFeedback onPress={() => this.setState({amZug: 'X', feld: Array.from({length:9}, () => '')})}>
          <View backgroundColor='red'>
            <Text>Reset</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

function Field(props){
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.feld}>
        <Text>{props.inhalt}</Text>
      </View>
    </TouchableWithoutFeedback>
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
