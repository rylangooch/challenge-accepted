import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

var NewChallengeView = React.createClass({
  // static get defaultProps() {
  //   return {
  //     title: 'New Challenge'
  //   };
  // }

  render: function() {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>
            Create your challenge
          </Text>
          <TextInput
            style={styles.input} placeholder="Description">
          </TextInput>
          <TextInput
            style={styles.input}
            placeholder="Ante">
          </TextInput>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>
              Submit
            </Text>
          </TouchableHighlight>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#15204C',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    paddingTop: 80
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 2,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D9DADF',
    backgroundColor: '#D9DADF'
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#000000',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 17,
    marginTop: 15,
    marginBottom: 65,
    alignSelf: 'center',
    color: '#FFF'
  },
});

module.exports = NewChallengeView;
